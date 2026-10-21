import * as dashboard_service from '../services/dashboard_services.js';

//POST /api/dashboards
export const create_dashboard=async(req,res,next)=>{
    try{
        const dashboard=await dashboard_service.create_dashboard(req.body);
        res.status(201).json(dashboard);
    }catch(err){
        next(err);
    }
}

//GET /api/dashboards
export const get_dashboards=async(req,res,next)=>{
    try{
        const dashboard=await dashboard_service.get_all_dashboards();
        res.status(200).json(dashboard);
    }catch(err){
        next(err)
    }
}

// GET /api/dashboards/:id
export const get_dashboard=async(req,res,next)=>{
    try{
        const dashboard=await dashboard_service.get_dashboards_by_id(req.params.id);
        if(!dashboard){
            return res.status(404).json({message:'Dashboard not found'})
        }
        res.status(200).json(dashboard)
    }catch(err){
        next(err)
    }
}

// PUT /api/dashboards/:id
export const update_dashboard = async (req, res, next) => {
  try {
    const updatedDashboard = await dashboardService.update_dashboard(req.params.id, req.body);
    res.status(200).json(updatedDashboard);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/dashboards/:id
export const delete_dashboard = async (req, res, next) => {
  try {
    await dashboardService.delete_dashboard(req.params.id);
    res.status(200).json({ message: 'Dashboard deleted successfully' });
  } catch (err) {
    next(err);
  }
};