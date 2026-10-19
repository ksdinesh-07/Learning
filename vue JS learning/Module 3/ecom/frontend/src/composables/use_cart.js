import { storeToRefs } from "pinia"
import { use_cart_store } from "@/stores/cart.js"

/**
 * Thin wrapper around the Pinia cart store.
 */
export function use_cart() {
  const cart_store = use_cart_store()

  // State & getters (reactive via storeToRefs)
  const { items, total_items, total_price } = storeToRefs(cart_store)

  // Actions
  const {
    add_product,
    increase,
    decrease,
    remove_product,
    clear_cart,
  } = cart_store

  // Compatibility object so `cart.items` keeps working
  const cart = {
    get items() {
      return items.value
    },
  }

  return {
    cart,
    items,
    total_items,
    total_price,
    add_product,
    increase,
    decrease,
    remove_product,
    clear_cart,
  }
}