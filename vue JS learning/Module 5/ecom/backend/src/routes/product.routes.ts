import { Router } from "express"
import {get_products,get_product_by_id,} from "../controllers/product.controller"

const router = Router()

// GET /api/products
router.get("/", get_products)

// GET /api/products/:id
router.get("/:id", get_product_by_id)

export default router