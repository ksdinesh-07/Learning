<!-- frontend/src/views/OrdersView.vue -->
<template>
  <div class="page-container">
    <header class="page-header">
      <div>
        <h2>Customer Orders</h2>
        <p>View and manage customer orders and details</p>
      </div>
    </header>

    <!-- EMPTY STATE -->
    <div v-if="orders.length === 0 && !isFormOpen" class="empty-state">
      <div class="empty-icon">📋</div>
      <h3>No Orders Yet</h3>
      <p>Click Create Order and enter your order information</p>
      <hlx-button class="primary" @click="isFormOpen = true">
        + Create Order
      </hlx-button>
    </div>

    <!-- FORM MODAL -->
    <order_form 
      v-if="isFormOpen" 
      @close="isFormOpen = false" 
      @saved="handleOrderSaved" 
    />

    <!-- ORDER LIST -->
    <div v-if="orders.length > 0 && !isFormOpen" class="table-container">
      <div class="table-header">
        <h3>All Orders</h3>
        <hlx-button class="primary" @click="isFormOpen = true">+ Create Order</hlx-button>
      </div>
      <table class="simple-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Product</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order._id">
            <td>{{ order.firstName }} {{ order.lastName }}</td>
            <td>{{ order.product }}</td>
            <td>${{ order.totalAmount.toFixed(2) }}</td>
            <td>{{ order.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import order_form from '../components/order_form.vue' // Ensure this path is correct

const isFormOpen = ref(false)
const orders = ref([])

const fetchOrders = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/orders')
    orders.value = response.data
  } catch (error) {
    console.error('Failed to fetch orders:', error)
  }
}

const handleOrderSaved = () => {
  isFormOpen.value = false
  fetchOrders() // Refresh list after saving
}

onMounted(() => {
  fetchOrders()
})
</script>

<style scoped>
.page-container {
  padding: 24px;
}
.page-header {
  margin-bottom: 24px;
}
.page-header h2 {
  margin: 0;
  font-size: 22px;
}
.page-header p {
  margin: 4px 0 0;
  color: #6b7280;
  font-size: 14px;
}
.empty-state {
  text-align: center;
  margin-top: 100px;
  background: white;
  padding: 60px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
}
.empty-state h3 {
  margin: 0 0 8px;
}
.empty-state p {
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 24px;
}
.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 24px;
}
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.simple-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}
.simple-table th, .simple-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
}
.simple-table th {
  background: #f9fafb;
  font-weight: 500;
  color: #374151;
}
</style>