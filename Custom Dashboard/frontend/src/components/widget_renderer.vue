<template>
  <div class="widget-renderer">
    <!-- KPI CARD -->
    <div v-if="widget.type === 'kpi'" class="kpi-content">
      <span class="widget-value">
        {{ formatValue(chart_data.kpi.totalSales, widget.data_format || 'currency', widget.precision) }}
      </span>
    </div>

    
    <!-- TABLE -->
    <div v-else-if="widget.type === 'table'" class="table-content">
      <div v-if="paginated_table_data.length === 0" class="empty-table-state">No data</div>
      <table v-else class="mini-table" :style="{ fontSize: (widget.font_size || 14) + 'px' }">
        <thead :style="{ backgroundColor: widget.header_bg || '#f9fafb' }">
          <tr>
            <th v-for="col in active_columns" :key="col.value">{{ col.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in paginated_table_data" :key="row._id">
            <td v-for="col in active_columns" :key="col.value">
              <template v-if="col.value === 'order_id'">ORD-{{ row._id.slice(-4).toUpperCase() }}</template>
              <template v-else-if="col.value === 'customer_name'">{{ row.first_name }} {{ row.last_name }}</template>
              <template v-else-if="col.value === 'total_amount' || col.value === 'unit_price'">{{ formatValue(row[col.value], 'currency', 2) }}</template>
              <template v-else>{{ row[col.value] || '-' }}</template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- CHARTS (Bar, Line, Area, Scatter, Pie) -->
    <div v-else class="chart-content">
      <apexchart 
        width="100%" 
        height="100%" 
        :type="widget.type" 
        :options="get_chart_options()" 
        :series="get_chart_series()"
      ></apexchart>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'
import axios from 'axios'
import apexchart from 'vue3-apexcharts' 

const props = defineProps({
  widget: { type: Object, required: true },
  timeFilter: { type: String, default: 'All time' }
})

const chart_data = ref({ 
  labels: [], 
  values: [], 
  pie_labels: [], 
  pie_values: [], 
  table: [], 
  kpi: { totalSales: 0, totalOrders: 0 } 
})

// --- TABLE LOGIC ---
const all_column_definitions = [
  { name: 'Order ID', value: 'order_id' },
  { name: 'Customer name', value: 'customer_name' },
  { name: 'Product', value: 'product' },
  { name: 'Quantity', value: 'quantity' },
  { name: 'Total amount', value: 'total_amount' },
  { name: 'Status', value: 'status' },
  { name: 'Unit Price', value: 'unit_price' }
]

const active_columns = computed(() => {
  const saved_cols = props.widget.table_columns || ['order_id', 'customer_name', 'product', 'total_amount', 'status'];
  return all_column_definitions.filter(c => saved_cols.includes(c.value));
})

const paginated_table_data = computed(() => {
  let data = [...chart_data.value.table];
  if (props.widget.table_apply_filter) {
    data = data.filter(row => row.status === 'Pending');
  }
  data.sort((a, b) => props.widget.table_sort === 'asc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt));
  return data.slice(0, props.widget.table_pagination || 5);
})

// --- FETCH DATA ---
const fetch_data = async () => {
  try {
    const params = {
      time: props.timeFilter,
      metric: props.widget.metric || 'total_amount',
      aggregation: props.widget.aggregation || 'sum',
      x_axis: props.widget.x_axis || 'createdAt',
      y_axis: props.widget.y_axis || 'total_amount',
      chart_data: props.widget.chart_data || 'status'
    }

    const res = await axios.get('http://localhost:3000/api/charts', { params })
    
    chart_data.value = {
      labels: res.data.barChart?.labels || [],
      values: res.data.barChart?.values || [],
      pie_labels: res.data.pieChart?.labels || [],
      pie_values: (res.data.pieChart?.values || []).map(Number),
      table: res.data.table || [],
      kpi: res.data.kpi || { totalSales: 0, totalOrders: 0 }
    }
  } catch (err) {
    console.error("Failed to load chart data:", err)
  }
}

onMounted(() => fetch_data())
watch(() => [props.widget.metric, props.widget.aggregation, props.timeFilter, props.widget.x_axis, props.widget.y_axis, props.widget.chart_data], () => { fetch_data() }, { deep: true })

const formatValue = (value, format, precision) => {
  if (value === undefined || value === null) return '$ 0.00'
  const p = precision !== undefined ? precision : 2
  const finalFormat = format || 'currency'
  if (finalFormat === 'currency') return '$ ' + Number(value).toFixed(p)
  return Number(value).toFixed(p)
}

// --- APEXCHARTS CONFIGURATION ---
const get_chart_options = () => {
  const options = {
    chart: { 
      toolbar: { show: false }, 
      fontFamily: 'Open Sans, sans-serif',
      animations: { enabled: false }
    },
    colors: ['#3B82F6'], // Blue color (same as line chart)
    stroke: { 
      show: true, 
      curve: 'smooth', // Smooth curve for the line
      width: 3 
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true, theme: 'light' },
    grid: { 
      borderColor: '#f3f4f6', 
      strokeDashArray: 4, 
      padding: { top: 0, right: 0, bottom: 0, left: 0 } 
    },
    // ✅ AREA CHART FILL (Gradient)
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4, // Solid at the top
        opacityTo: 0.05,  // Fades out at the bottom
        stops: [0, 100]
      }
    },
    // ✅ SHOW DOTS (MARKERS) ON THE LINE
    markers: {
      size: 5,
      colors: ['#3B82F6'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: { size: 7 }
    }
  }

  if (props.widget.type === 'pie') {
    options.colors = ['#10B981', '#F59E0B', '#EF4444'];
    options.labels = chart_data.value.pie_labels.length > 0 ? chart_data.value.pie_labels : ['No Data'];
    options.legend = { show: true, position: 'right', markers: { radius: 0, size: 8 } };
    options.stroke = { show: true, width: 3, colors: ['#ffffff'], lineCap: 'butt' };
    options.fill = { type: 'solid' }; // Pie charts don't need gradient fill
  } else if (props.widget.type === 'scatter') {
    options.xaxis = { title: { text: 'Index' }, type: 'numeric' }
    options.fill = { type: 'solid' };
  } else {
    // Bar, Line, Area
    options.plotOptions = { bar: { borderRadius: 0, columnWidth: '60%' } }
    
    options.xaxis = { 
      categories: chart_data.value.labels.length > 0 ? chart_data.value.labels : ['No Data'],
      labels: { 
        rotate: 0,
        rotateAlways: false,
        trim: false,
        maxHeight: 60,
        style: { fontSize: '11px', fontFamily: 'Open Sans, sans-serif' },
        formatter: (val) => {
          if (val === undefined || val === null) return '';
          const string_val = String(val); 
          const words = string_val.split(' ');
          let lines = [];
          let currentLine = '';
          words.forEach(word => {
            if ((currentLine + ' ' + word).trim().length > 15) {
              lines.push(currentLine.trim());
              currentLine = word;
            } else {
              currentLine = (currentLine + ' ' + word).trim();
            }
          });
          if (currentLine) lines.push(currentLine);
          return lines; 
        }
      },
      axisBorder: { show: true, color: '#e5e7eb' },
      axisTicks: { show: true, color: '#e5e7eb' }
    };

    options.yaxis = {
      axisBorder: { show: true, color: '#e5e7eb' },
      axisTicks: { show: true, color: '#e5e7eb' },
      labels: {
        style: { fontSize: '11px', fontFamily: 'Open Sans, sans-serif' },
        formatter: (val) => {
          if (props.widget.y_axis === 'total_amount' || props.widget.y_axis === 'unit_price') {
            return '$ ' + Math.round(val);
          }
          return Math.round(val);
        }
      }
    };
    
    options.grid.padding.bottom = 0; 
  }

  return options
}

const get_chart_series = () => {
  if (props.widget.type === 'pie') return chart_data.value.pie_values.length > 0 ? chart_data.value.pie_values : [0];
  if (props.widget.type === 'scatter') return [{ name: 'Data', data: chart_data.value.values.map((val, index) => [index + 1, val || 0]) }];
  return [{ name: 'Total', data: chart_data.value.values.length > 0 ? chart_data.value.values : [0] }];
}
</script>

<style scoped>
.widget-renderer { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.chart-content { width: 100%; height: 100%; padding: 0; }
.kpi-content { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; }
.widget-value { font-family: 'Open Sans', sans-serif; font-size: 28px; font-weight: 600; color: #111827; }

/* Table Styles */
.table-content { width: 100%; height: 100%; overflow: auto; padding: 8px; }
.mini-table { width: 100%; border-collapse: collapse; font-family: 'Open Sans', sans-serif; }
.mini-table th { padding: 10px 8px; text-align: left; border-bottom: 1px solid #e5e7eb; color: #374151; font-weight: 600; background-color: #f9fafb; }
.mini-table td { padding: 10px 8px; border-bottom: 1px solid #f3f4f6; color: #4b5563; }
.empty-table-state { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; color: #9ca3af; font-family: 'Open Sans', sans-serif; font-size: 14px; }
</style>