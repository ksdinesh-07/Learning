import express from 'express'
import { create_order, get_order } from '../controllers/order_controller.js'

const router = express.Router();

router.route('/').post(create_order).get(get_order)

export default router;