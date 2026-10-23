<template>
  <div class="page-container">
    <div class="content-card">

      <!-- toaster notofication -->
      <hlx-alert-notification :notify="notification" :auto-close="true" />

      <!-- header -->
      <div class="header-area">
        <div>
          <h1 class="page-title">Customer Orders</h1>
          <p class="page-subtitle">View and manage customer orders and details</p>
        </div>

        <!-- search and create ordr btn -->
        <div v-if="active_tab==='table' && orders.length>0" class="header-actions" >
          <!-- FIXED: Changed 'style' to 'style1' -->
          <hlx-search @searchkey="search" :search-style="'style1'" />

          <hlx-button class="primary" @click="is_form_open=true" >
            <span class="btn-content">
              <img src="../assets/create-order-icon.svg" alt="create" class="btn-icon">
              <span>Create Order</span>
            </span>
          </hlx-button>
        </div>
      </div>
      
      <!-- navigation  -->
      <div class="tabs-area">
        <div class="tab" :class="{active: active_tab ==='dashboard'}" @click="active_tab = 'dashboard' ">
          <img :src="active_tab === 'dashboard' ? dashboard_green_icon : dashboard_black_icon " class="tab-icon" alt="Dashboard" />
          <span>Dashboard</span>
        </div>

        <div class="tab" :class="{active: active_tab ==='table'}" @click="active_tab = 'table' ">
          <img :src="active_tab === 'table' ? table_green_icon : table_black_icon " class="tab-icon" alt="Table" />
          <span>Table</span>
        </div>
      </div>

      <!-- table content -->
      <div v-if="active_tab==='table' && orders.length > 0" class="table-area" >
        <hlx-table 
          :column-count="columns.length"
          :border="['table','header','vertical','horizontal']"
          :bold-headers="false"
          :row-hover="true"
          theme="grey"
          :striped-rows="false"
          :height="500"
        >
          <template #thead>
            <hlx-table-head :width="60" align="center">S.no</hlx-table-head>
            <hlx-table-head :width="120">Customer ID</hlx-table-head>
            <hlx-table-head :width="150">Customer name</hlx-table-head>
            <hlx-table-head :width="200">Email id</hlx-table-head>
            <hlx-table-head :width="150">Phone number</hlx-table-head>
            <hlx-table-head :width="250">Address</hlx-table-head>
            <hlx-table-head :width="120">Order ID</hlx-table-head>
            <hlx-table-head :width="120">Order date</hlx-table-head>
            <hlx-table-head :width="50" align="center"></hlx-table-head>
          </template>

          <template #tbody>
            <tr v-for="(order, index) in filteredOrders" :key="order._id">
              <hlx-table-cell align="center">{{ index + 1 }}</hlx-table-cell>
              <hlx-table-cell>CUST-{{ String(index + 1).padStart(4, '0') }}</hlx-table-cell>
              <hlx-table-cell>{{ order.first_name }} {{ order.last_name }}</hlx-table-cell>
              <hlx-table-cell>{{ order.email }}</hlx-table-cell>
              <hlx-table-cell>{{ order.phone }}</hlx-table-cell>
              <hlx-table-cell>{{ order.address }}, {{ order.city }}, {{ order.state }}, {{ order.postal_code }}, {{ order.country }}</hlx-table-cell>
              <hlx-table-cell>ORD-{{ String(index + 1).padStart(4, '0') }}</hlx-table-cell>
              <hlx-table-cell>{{ new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }}</hlx-table-cell>
              <hlx-table-cell align="center" style="cursor: pointer;">⋮</hlx-table-cell>
            </tr>
            
            <!-- If search yields no results -->
            <tr v-if="filteredOrders.length === 0">
              <hlx-table-cell colspan="9" align="center" style="padding: 20px; color: #6b7280;">
                No orders found matching "{{ search_key }}"
              </hlx-table-cell>
            </tr>
          </template>
        </hlx-table>
      </div>

      <!-- empty state -->
      <div v-else-if="active_tab === 'table' && orders.length === 0" class="empty-state-area">
        <div class="empty-content">
          <div class="icon-wrapper">
            <img src="../assets/no-table-icon.svg" class="empty-icon" alt="No orders">
          </div>
          <h2 class="empty-title">No Orders Yet</h2>
          <p class="empty-text">Click Create Order and enter your order information</p>
          <hlx-button class="primary" @click="is_form_open = true">
            <span class="btn-content">
              <img src="../assets/create-order-icon.svg" alt="create order" class="btn-icon">
              <span>Create Order</span>
            </span>
          </hlx-button>
        </div>
      </div>

      <order_form v-if="is_form_open" @close="is_form_open=false" @saved="handle_order_saved" />

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import order_form from '../components/order_form.vue'

import dashboard_black_icon from '../assets/dashborad-icon-black.svg' 
import dashboard_green_icon from '../assets/dashboard-green-icon.svg'
import table_black_icon from '../assets/table-icon-black.svg'
import table_green_icon from '../assets/table-icon-green.svg'

const active_tab = ref('table')
const is_form_open = ref(false)
const orders = ref([])

const search_key = ref('')
const notification = ref({})

const columns = [
  { name: 'S.no' }, { name: 'Customer ID' }, { name: 'Customer name' },
  { name: 'Email id' }, { name: 'Phone number' }, { name: 'Address' },
  { name: 'Order ID' }, { name: 'Order date' }, { name: 'Actions' }
]

const fetch_orders = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/orders')
    orders.value = response.data
  } catch (err) {
    console.error("Failed to fetch orders:", err)
  }
}

const search = (key) => {
  search_key.value = key
}

const push_notification = (message) => {
  notification.value = { type: 'success', message: message }
}

const filteredOrders = computed(() => {
  if (!search_key.value) return orders.value
  const key = search_key.value.toLowerCase()
  return orders.value.filter((order) => {
    const fullName = `${order.first_name} ${order.last_name}`.toLowerCase()
    const email = order.email.toLowerCase()
    const orderId = `ORD-${String(orders.value.indexOf(order) + 1).padStart(4, '0')}`.toLowerCase()
    return fullName.includes(key) || email.includes(key) || orderId.includes(key)
  })
})

const handle_order_saved = () => {
  is_form_open.value = false
  fetch_orders()
  push_notification('Order created successfully')
}

onMounted(() => {
  fetch_orders()
})
</script>

<style scoped>
.page-container {
  background-color: #f3f4f6; 
  height: 100vh; 
  width: 100vw; 
  overflow: hidden; 
  display: flex; 
  box-sizing: border-box;
}

.content-card {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.header-area {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  min-height: 60px;
}

.header-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.page-title {
  font-family: 'Quicksand', sans-serif !important;
  font-size: 24px;
  color: #111827;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.page-subtitle {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

.tabs-area {
  display: flex;
  gap: 32px;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 40px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px;
  color: #6b7280; 
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px; 
  transition: all 0.2s;
}

.tab.active {
  color:#54BD95; 
  border-bottom-color: #54BD95;
}

.tab-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.empty-state-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.empty-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  background: #f3f4f6;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 16px;
}

.empty-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.empty-title {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
}

.empty-text {
  font-family: 'Open Sans', sans-serif !important;
  font-size: 13px;
  color: #6b7280;
  margin: 0 0 24px 0;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
</style>