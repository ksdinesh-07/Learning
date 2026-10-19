<script setup>

    import { inject, computed } from "vue"
    import { use_cart } from "@/composables/use_cart.js"


    // Grab the shared cart from app.vue
    // const cart = inject("cart")

    // Controls whether the drawer is visible
    // We inject this from AppHeader so both share the same open/closed state
    const is_open = inject("cart_open")


    //cart state and operations
    const {cart,total_items,total_price,increase,decrease}=use_cart();

    // Grand total — recomputes whenever the cart changes
    // const total_price = computed(() => {
    // let sum = 0
    // for (let i = 0; i < cart.items.length; i++) {
    //     sum = sum + cart.items[i].price * cart.items[i].quantity
    // }
    // return sum
    // })

    // Total item count
    // const total_items = computed(() => {
    // let sum = 0
    // for (let i = 0; i < cart.items.length; i++) {
    //     sum = sum + cart.items[i].quantity
    // }
    // return sum
    // })

    // Close the drawer
    function close_drawer() {
    is_open.value = false
    }

    // // Increase quantity
    // function increase(item) {
    // item.quantity = item.quantity + 1
    // }

    // // Decrease quantity — removes item if it hits 0
    // function decrease(item) {
    // if (item.quantity > 1) {
    //     item.quantity = item.quantity - 1
    // } else {
    //     // Remove the item from cart.items
    //     const index = cart.items.indexOf(item)
    //     if (index !== -1) {
    //     cart.items.splice(index, 1)
    //     }
    // }
    // }

</script>

<template>

  <Teleport to="body">

    <div v-if="is_open" class="overlay" @click.self="close_drawer">

      <div class="drawer">
        
        <div class="drawer-header">
          <h2>Your Cart ({{ total_items }})</h2>
          <button class="close-btn" @click="close_drawer">✕</button>
        </div>

        <div v-if="cart.items.length === 0" class="empty">
          Your cart is empty.
        </div>

        <ul v-else class="items">
          <li v-for="item in cart.items" :key="item.product_id" class="item">
            <div class="item-info">
              <div class="item-name">{{ item.product_name }}</div>
              <div class="item-price">₹{{ item.price }} each</div>
            </div>

            <div class="item-controls">
              <button @click="decrease(item.product_id)">−</button>
              <span class="qty">{{ item.quantity }}</span>
              <button @click="increase(item.product_id)">+</button>
            </div>

            <div class="item-total">₹{{ item.price * item.quantity }}</div>
          </li>
        </ul>

        <div class="drawer-footer">
          <div class="total">Total: ₹{{ total_price }}</div>
          <button class="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  </Teleport>

</template>

<style scoped>

    .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
    }

    .drawer {
    width: 360px;
    max-width: 100%;
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
    animation: slide_in 0.2s ease-out;
    }

    @keyframes slide_in {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
    }

    .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #eee;
    }

    .drawer-header h2 {
    margin: 0;
    font-size: 18px;
    }

    .close-btn {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    color: #666;
    }

    .empty {
    padding: 40px 20px;
    text-align: center;
    color: #888;
    }

    .items {
    list-style: none;
    padding: 0;
    margin: 0;
    overflow-y: auto;
    flex: 1;
    }

    .item {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 12px;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;
    }

    .item-name {
    font-size: 14px;
    font-weight: bold;
    }

    .item-price {
    font-size: 12px;
    color: #888;
    }

    .item-controls {
    display: flex;
    align-items: center;
    gap: 6px;
    }

    .item-controls button {
    width: 26px;
    height: 26px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    }

    .qty {
    min-width: 20px;
    text-align: center;
    font-size: 14px;
    }

    .item-total {
    font-weight: bold;
    font-size: 14px;
    min-width: 60px;
    text-align: right;
    }

    .drawer-footer {
    padding: 16px;
    border-top: 1px solid #eee;
    }

    .total {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
    }

    .checkout-btn {
    width: 100%;
    padding: 12px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    }

    .checkout-btn:hover {
    background: #369870;
    }
    
</style>