import express from 'express';
import * as dashboardController from '../controllers/dashboard_controller.js';

const router = express.Router();

// Routes for /api/dashboards
router.route('/')
  .get(dashboardController.get_dashboards)    // GET all dashboards
  .post(dashboardController.create_dashboard); // Create a new dashboard

// Routes for /api/dashboards/:id
router.route('/:id')
  .get(dashboardController.get_dashboard)     // GET one dashboard by ID
  .put(dashboardController.update_dashboard)  // Update a dashboard (Save layout)
  .delete(dashboardController.delete_dashboard); // Delete a dashboard

export default router;