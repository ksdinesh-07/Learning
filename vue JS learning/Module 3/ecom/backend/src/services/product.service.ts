import { products } from "../data/products"
import type { product, Category } from "../models/product.model"

// Get every product
export function get_all_products(): product[] {
  return products
}

// Find one product by its id
export function find_product_by_id(id: number): product | undefined {
  const found = products.find(function (item) {
    return item.id === id
  })
  return found
}

// Filter products by category and search text
export function filter_products(
  category: Category | undefined,
  search: string | undefined
): product[] {
  let result: product[] = []

  // Step 1: loop through every product
  for (let i = 0; i < products.length; i++) {
    const item = products[i]

    // Step 2: check category
    if (category !== undefined) {
      if (item.category !== category) {
        continue // skip this product
      }
    }

    // Step 3: check search text
    if (search !== undefined && search !== "") {
      const product_name_lower = item.product_name.toLowerCase()
      const search_lower = search.toLowerCase()

      if (!product_name_lower.includes(search_lower)) {
        continue // skip this product
      }
    }

    // Step 4: product passed all checks → add it
    result.push(item)
  }

  return result
}