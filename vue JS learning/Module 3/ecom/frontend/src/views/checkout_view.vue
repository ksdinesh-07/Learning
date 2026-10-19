<script setup>
import { ref, computed } from "vue"
import { useRouter } from "vue-router"
import { use_cart } from "@/composables/use_cart.js"
import { use_auth } from "@/composables/use_auth.js"

const router = useRouter()
const { cart, total_items, total_price, clear_cart } = use_cart()
const { current_user, logout } = use_auth()

// Fake form fields
const full_name = ref("")
const address = ref("")
const phone = ref("")
const error_message = ref("")
const order_placed = ref(false)
const order_id = ref("")

// Guard against empty checkout
const can_place_order = computed(() => cart.items.length > 0)

function place_order() {
  error_message.value = ""

  if (!full_name.value || !address.value || !phone.value) {
    error_message.value = "Please fill in all fields."
    return
  }

  // Fake order id
  order_id.value = "ORD-" + Math.floor(Math.random() * 1_000_000)

  // Clear the cart
  clear_cart()

  // Show success
  order_placed.value = true
}

function continue_shopping() {
  router.push("/")
}

function handle_logout() {
  logout()
  router.push("/")
}
</script>

<template>
  <div class="checkout-page">
    <!-- Success screen -->
    <div v-if="order_placed" class="success">
      <div class="success-icon">✅</div>
      <h1>Order placed!</h1>
      <p class="order-id">Order ID: {{ order_id }}</p>
      <p class="thanks">Thank you, {{ current_user.name }}.</p>
      <button class="primary-btn" @click="continue_shopping">
        Continue Shopping
      </button>
    </div>

    <!-- Checkout form -->
    <div v-else>
      <div class="header-row">
        <h1>Checkout</h1>
        <div class="user-info">
          <span>Signed in as <strong>{{ current_user.email }}</strong></span>
          <button class="link-btn" @click="handle_logout">Logout</button>
        </div>
      </div>

      <!-- Empty cart warning -->
      <div v-if="!can_place_order" class="empty">
        <p>Your cart is empty — nothing to check out.</p>
        <button class="primary-btn" @click="continue_shopping">
          Browse Products
        </button>
      </div>

      <!-- Form + summary -->
      <div v-else class="checkout-layout">
        <!-- Shipping form -->
        <div class="shipping-card">
          <h2>Shipping details</h2>

          <form @submit.prevent="place_order">
            <label>
              <span>Full name</span>
              <input v-model="full_name" type="text" placeholder="John Doe" />
            </label>

            <label>
              <span>Address</span>
              <textarea
                v-model="address"
                rows="3"
                placeholder="123 Main St, City"
              ></textarea>
            </label>

            <label>
              <span>Phone</span>
              <input v-model="phone" type="tel" placeholder="+91 98765 43210" />
            </label>

            <p v-if="error_message" class="error">{{ error_message }}</p>

            <button type="submit" class="primary-btn">
              Place Order — ₹{{ total_price }}
            </button>
          </form>
        </div>

        <!-- Order summary -->
        <div class="summary-card">
          <h2>Order summary</h2>
          <ul class="items">
            <li v-for="item in cart.items" :key="item.product_id">
              <span>{{ item.product_name }} × {{ item.quantity }}</span>
              <span>₹{{ item.price * item.quantity }}</span>
            </li>
          </ul>
          <div class="summary-total">
            <span>Total ({{ total_items }} items)</span>
            <span>₹{{ total_price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-page {
  padding: 10px 0;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
}

h1 {
  margin: 0;
  font-size: 26px;
}

h2 {
  margin: 0 0 16px 0;
  font-size: 18px;
}

.user-info {
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 12px;
}

.link-btn {
  background: none;
  border: none;
  color: #d33;
  cursor: pointer;
  font-size: 13px;
  padding: 0;
}

.link-btn:hover {
  text-decoration: underline;
}

.empty {
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
}

.empty p {
  color: #888;
  margin-bottom: 20px;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
}

@media (max-width: 720px) {
  .checkout-layout {
    grid-template-columns: 1fr;
  }
}

.shipping-card,
.summary-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 24px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
}

input,
textarea {
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #42b883;
  box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
}

.error {
  color: #d33;
  font-size: 13px;
  margin: 0;
}

.primary-btn {
  padding: 12px;
  background: #42b883;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
}

.primary-btn:hover {
  background: #369870;
}

.summary-card .items {
  list-style: none;
  padding: 0;
  margin: 0 0 16px 0;
}

.summary-card .items li {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  font-size: 14px;
  border-bottom: 1px solid #f5f5f5;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  border-top: 2px solid #eee;
  padding-top: 12px;
  margin-top: 4px;
}

.success {
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #eee;
  max-width: 500px;
  margin: 40px auto;
}

.success-icon {
  font-size: 60px;
  margin-bottom: 12px;
}

.success h1 {
  margin: 0 0 12px 0;
  color: #2c8c5a;
}

.order-id {
  font-size: 14px;
  color: #888;
  font-family: monospace;
}

.thanks {
  font-size: 15px;
  color: #444;
  margin: 12px 0 24px 0;
}
</style>