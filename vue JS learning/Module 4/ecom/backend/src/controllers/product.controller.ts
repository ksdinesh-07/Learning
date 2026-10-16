import { Request, Response } from "express"
import {filter_products,find_product_by_id,} from "../services/product.service"
import type { api_response, product, Category } from "../models/product.model"

// GET /api/products
// Optional query params: ?category=electronics  ?search=headphones
export function get_products(req: Request,res: Response<api_response<product[]>>) {
	//read query params from the URL
	const category_query = req.query.category
	const search_query = req.query.search

	// convert them to the right type (they arrive as strings or undefined)
	let category: Category | undefined = undefined
	let search: string | undefined = undefined

	if (typeof category_query === "string") {
		category = category_query as Category
	}
	

	if (typeof search_query === "string") {
		search = search_query
	}

	// call the service with simple, separate arguments
	const result = filter_products(category, search)

	// send the response
	res.json({success: true,data: result,})
}

// GET /api/products/:id
export function get_product_by_id(req: Request,res: Response<api_response<product>>) {
	//read the id from the URL and convert it to a number
	const id_string = req.params.id
	const id_number = Number(id_string)

	//call the service
	const product = find_product_by_id(id_number)

	// handle the "not found" case
	if (product === undefined) {
		res.status(404).json({success: false,error: "Product not found",})
		return
	}

	// send the product
	res.json({success: true,data: product,})
}