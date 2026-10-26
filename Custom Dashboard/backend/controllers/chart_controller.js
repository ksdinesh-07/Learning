import order from '../models/order.js';

export const get_dashboard_metrics = async (req, res) => {
  try {
    // 1. Extract all parameters
    const metric = req.query.metric || 'total_amount';
    const aggregation = req.query.aggregation || 'sum';
    const timeFilter = req.query.time || 'All time';
    
    const xAxis = req.query.x_axis || 'createdAt'; 
    const yAxis = req.query.y_axis || 'total_amount';
    const pieField = req.query.chart_data || 'status'; 

    // 2. Date Filter Logic
    let dateMatch = {};
    const now = new Date();
    
    if (timeFilter === 'Today') {
      const startOfToday = new Date(now.setHours(0, 0, 0, 0));
      dateMatch = { $expr: { $gte: [{ $toDate: "$createdAt" }, startOfToday] } };
    } else if (timeFilter === 'Last 7 Days') {
      const last7 = new Date();
      last7.setDate(last7.getDate() - 7);
      dateMatch = { $expr: { $gte: [{ $toDate: "$createdAt" }, last7] } };
    } else if (timeFilter === 'Last 30 Days') {
      const last30 = new Date();
      last30.setDate(last30.getDate() - 30);
      dateMatch = { $expr: { $gte: [{ $toDate: "$createdAt" }, last30] } };
    } else if (timeFilter === 'Last 90 Days') {
      const last90 = new Date();
      last90.setDate(last90.getDate() - 90);
      dateMatch = { $expr: { $gte: [{ $toDate: "$createdAt" }, last90] } };
    }

    // 3. Aggregation Logic for KPI
    let accumulator = { $sum: `$${metric}` };
    if (aggregation === 'average') accumulator = { $avg: `$${metric}` };
    if (aggregation === 'count') accumulator = { $sum: 1 };

    // 4. Run the Database Queries in parallel
    const [tableData, kpiResult, pieResult, barResult] = await Promise.all([
      
      // A. Table Data
      order.find().sort({ createdAt: -1 }).limit(10),

      // B. KPI Data 
      order.aggregate([
        { $match: dateMatch },
        { 
          $group: { 
            _id: null, 
            totalSales: accumulator, // <-- Dynamic metric & aggregation
            totalOrders: { $sum: 1 } 
          } 
        }
      ]),

      // C. Pie Chart Data (Dynamic based on 'chart_data' field)
      order.aggregate([
        { $match: dateMatch },
        { 
          $group: { 
            _id: `$${pieField}`, 
            value: { $sum: 1 }   
          } 
        },
        { $sort: { value: -1 } }
      ]),

      // D. Bar/Line/Area Chart Data (Dynamic X and Y)
      order.aggregate([
        { $match: dateMatch },
        {
          $group: {
            _id: xAxis === 'createdAt' 
                  ? { $month: { $toDate: "$createdAt" } } 
                  : `$${xAxis}`, 
            value: { 
              $sum: { 
                $cond: [ { $isNumber: `$${yAxis}` }, `$${yAxis}`, 0 ] 
              } 
            }
          }
        },
        { $sort: { _id: 1 } }
      ])
    ]); 

    // 5. Format Month Names
    const getMonthName = (monthNumber) => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      return months[monthNumber - 1] || 'Unknown';
    };

    // 6. Send Response
    res.json({
      kpi: {
        totalSales: kpiResult[0]?.totalSales || 0,
        totalOrders: kpiResult[0]?.totalOrders || 0
      },
      table: tableData,
      pieChart: {
        labels: pieResult.map(item => item._id || 'Unknown'),
        values: pieResult.map(item => item.value)
      },
      barChart: {
        labels: barResult.map(item => xAxis === 'createdAt' ? getMonthName(item._id) : item._id),
        values: barResult.map(item => item.value)
      }
    });

  } catch (error) {
    console.error("Dashboard Metrics Error:", error);
    res.status(500).json({ error: 'Failed to fetch chart data' });
  }
};