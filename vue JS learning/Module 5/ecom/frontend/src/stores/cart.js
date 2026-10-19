// import { defineStore } from "pinia";
// import {ref,computed,watch} from 'vue';

// export const use_cart_store=defineStore("cart",()=>{
//     // STATE — seed from localStorage
//     const saved_cart = localStorage.getItem("cart")
//     let initial_items = []
//     if (saved_cart) {
//         try {
//         const parsed = JSON.parse(saved_cart)
//         if (Array.isArray(parsed)) {
//             initial_items = parsed
//         }
//         } catch (err) {
//         localStorage.removeItem("cart")
//         }
//     }

//     const items = ref(initial_items)

//     // PERSISTENCE — save whenever items change
//     watch(
//         items,
//         (new_items) => {
//         localStorage.setItem("cart", JSON.stringify(new_items))
//         },
//         { deep: true }
//     )    
    
//     //getters
//     const total_items=computed(()=>{
//         let sum = 0
//         for (let i = 0; i < items.value.length; i++) {
//         sum = sum + items.value[i].quantity
//         }
//         return sum
//     })

//     const total_price = computed(() => {
//         let sum = 0
//         for (let i = 0; i < items.value.length; i++) {
//         sum = sum + items.value[i].price * items.value[i].quantity
//         }
//         return sum
//     })


//     //action
//     function add_product(product) {
//         let existing_item = null
//         for (let i = 0; i < items.value.length; i++) {
//         if (items.value[i].product_id === product.id) {
//             existing_item = items.value[i]
//             break
//         }
//         }

//         if (existing_item !== null) {
//         existing_item.quantity = existing_item.quantity + 1
//         } else {
//         items.value.push({
//             product_id: product.id,
//             product_name: product.product_name,
//             price: product.price,
//             quantity: 1,
//         })
//         }
//     }

//     function increase(product_id) {
//         for (let i = 0; i < items.value.length; i++) {
//         if (items.value[i].product_id === product_id) {
//             items.value[i].quantity = items.value[i].quantity + 1
//             return
//         }
//         }
//     }

//     function decrease(product_id) {
//         for (let i = 0; i < items.value.length; i++) {
//         if (items.value[i].product_id === product_id) {
//             if (items.value[i].quantity > 1) {
//             items.value[i].quantity = items.value[i].quantity - 1
//             } else {
//             items.value.splice(i, 1)
//             }
//             return
//         }
//         }
//     }

//     function remove_product(product_id) {
//         for (let i = 0; i < items.value.length; i++) {
//         if (items.value[i].product_id === product_id) {
//             items.value.splice(i, 1)
//             return
//         }
//         }
//     }

//     function clear_cart() {
//         items.value.splice(0, items.value.length)
//     }

//     // EXPOSE
//     return {
//         items,
//         total_items,
//         total_price,
//         add_product,
//         increase,
//         decrease,
//         remove_product,
//         clear_cart,
//     }
// })

// @ts-check
import { defineStore } from "pinia"
import { ref, computed, watch } from "vue"

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} product_name
 * @property {number} price
 * @property {string} image_url
 * @property {"electronics" | "clothing" | "books" | "home"} category
 * @property {number} stock
 * @property {number} rating
 * @property {string} description
 * @property {number} [discount]
 */

/**
 * @typedef {Object} CartItem
 * @property {number} product_id
 * @property {string} product_name
 * @property {number} price
 * @property {number} quantity
 */

export const use_cart_store = defineStore("cart", () => {
  // Load saved cart from localStorage
  const saved_cart = localStorage.getItem("cart")
  /** @type {CartItem[]} */
  let initial_items = []
  if (saved_cart) {
    try {
      const parsed = JSON.parse(saved_cart)
      if (Array.isArray(parsed)) {
        initial_items = parsed
      }
    } catch (err) {
      localStorage.removeItem("cart")
    }
  }

  /** @type {import("vue").Ref<CartItem[]>} */
  const items = ref(initial_items)

  // Save cart to localStorage whenever it changes
  watch(
    items,
    (new_items) => {
      localStorage.setItem("cart", JSON.stringify(new_items))
    },
    { deep: true }
  )

  // Total number of items in the cart
  const total_items = computed(() => {
    let sum = 0
    for (let i = 0; i < items.value.length; i++) {
      sum = sum + items.value[i].quantity
    }
    return sum
  })

  // Total price of all items in the cart
  const total_price = computed(() => {
    let sum = 0
    for (let i = 0; i < items.value.length; i++) {
      sum = sum + items.value[i].price * items.value[i].quantity
    }
    return sum
  })

  /**
   * Add a product to the cart or increment its quantity if it exists
   * @param {Pick<Product, "id" | "product_name" | "price">} product
   */
  function add_product(product) {
    /** @type {CartItem | null} */
    let existing_item = null
    for (let i = 0; i < items.value.length; i++) {
      if (items.value[i].product_id === product.id) {
        existing_item = items.value[i]
        break
      }
    }

    if (existing_item !== null) {
      existing_item.quantity = existing_item.quantity + 1
    } else {
      items.value.push({
        product_id: product.id,
        product_name: product.product_name,
        price: product.price,
        quantity: 1,
      })
    }
  }

  /**
   * Increase quantity of a cart item by product id
   * @param {number} product_id
   */
  function increase(product_id) {
    for (let i = 0; i < items.value.length; i++) {
      if (items.value[i].product_id === product_id) {
        items.value[i].quantity = items.value[i].quantity + 1
        return
      }
    }
  }

  /**
   * Decrease quantity of a cart item, remove if quantity reaches 0
   * @param {number} product_id
   */
  function decrease(product_id) {
    for (let i = 0; i < items.value.length; i++) {
      if (items.value[i].product_id === product_id) {
        if (items.value[i].quantity > 1) {
          items.value[i].quantity = items.value[i].quantity - 1
        } else {
          items.value.splice(i, 1)
        }
        return
      }
    }
  }

  /**
   * Remove a cart item entirely
   * @param {number} product_id
   */
  function remove_product(product_id) {
    for (let i = 0; i < items.value.length; i++) {
      if (items.value[i].product_id === product_id) {
        items.value.splice(i, 1)
        return
      }
    }
  }

  // Remove all items from the cart
  function clear_cart() {
    items.value.splice(0, items.value.length)
  }

  return {
    items,
    total_items,
    total_price,
    add_product,
    increase,
    decrease,
    remove_product,
    clear_cart,
  }
})