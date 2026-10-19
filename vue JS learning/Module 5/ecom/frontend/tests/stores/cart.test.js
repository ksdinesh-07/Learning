import { describe, it, expect, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { use_cart_store } from "@/stores/cart.js"

describe("cart store", () => {
  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia())
    // Clear localStorage between tests
    localStorage.clear()
  })

  it("starts empty", () => {
    const cart = use_cart_store()
    expect(cart.items).toEqual([])
    expect(cart.total_items).toBe(0)
    expect(cart.total_price).toBe(0)
  })

  it("adds a new product", () => {
    const cart = use_cart_store()
    const product = {
      id: 1,
      product_name: "Headphones",
      price: 1999,
    }

    cart.add_product(product)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].product_id).toBe(1)
    expect(cart.items[0].product_name).toBe("Headphones")
    expect(cart.items[0].price).toBe(1999)
    expect(cart.items[0].quantity).toBe(1)
  })

  it("increments quantity when adding an existing product", () => {
    const cart = use_cart_store()
    const product = { id: 1, product_name: "Headphones", price: 1999 }

    cart.add_product(product)
    cart.add_product(product)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].quantity).toBe(2)
    expect(cart.total_items).toBe(2)
    expect(cart.total_price).toBe(3998)
  })

  it("handles multiple different products", () => {
    const cart = use_cart_store()
    const product_a = { id: 1, product_name: "Headphones", price: 1999 }
    const product_b = { id: 2, product_name: "T-Shirt", price: 599 }

    cart.add_product(product_a)
    cart.add_product(product_b)
    cart.add_product(product_a)

    expect(cart.items.length).toBe(2)
    expect(cart.total_items).toBe(3)
    expect(cart.total_price).toBe(1999 * 2 + 599)
  })

  it("increases an existing item", () => {
    const cart = use_cart_store()
    cart.add_product({ id: 1, product_name: "Headphones", price: 1999 })

    cart.increase(1)

    expect(cart.items[0].quantity).toBe(2)
  })

  it("decreases quantity but keeps the item if quantity > 1", () => {
    const cart = use_cart_store()
    cart.add_product({ id: 1, product_name: "Headphones", price: 1999 })
    cart.add_product({ id: 1, product_name: "Headphones", price: 1999 })

    cart.decrease(1)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].quantity).toBe(1)
  })

  it("removes the item when quantity reaches 0", () => {
    const cart = use_cart_store()
    cart.add_product({ id: 1, product_name: "Headphones", price: 1999 })

    cart.decrease(1)

    expect(cart.items.length).toBe(0)
    expect(cart.total_items).toBe(0)
    expect(cart.total_price).toBe(0)
  })

  it("removes a product entirely", () => {
    const cart = use_cart_store()
    cart.add_product({ id: 1, product_name: "Headphones", price: 1999 })
    cart.add_product({ id: 2, product_name: "T-Shirt", price: 599 })

    cart.remove_product(1)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].product_id).toBe(2)
  })

  it("clears the cart", () => {
    const cart = use_cart_store()
    cart.add_product({ id: 1, product_name: "Headphones", price: 1999 })
    cart.add_product({ id: 2, product_name: "T-Shirt", price: 599 })

    cart.clear_cart()

    expect(cart.items.length).toBe(0)
    expect(cart.total_items).toBe(0)
    expect(cart.total_price).toBe(0)
  })

  it("calculates total_price across multiple items with quantities", () => {
    const cart = use_cart_store()
    cart.add_product({ id: 1, product_name: "Headphones", price: 1000 })
    cart.add_product({ id: 1, product_name: "Headphones", price: 1000 })
    cart.add_product({ id: 2, product_name: "T-Shirt", price: 500 })

    expect(cart.total_price).toBe(2500)
    expect(cart.total_items).toBe(3)
  })
})