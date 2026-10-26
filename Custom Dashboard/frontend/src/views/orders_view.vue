<template>
  <div class="page-container">
    <div class="content-card">

      <!-- toaster notifi -->
      <hlx-alert-notification :notify="notification" :auto-close="true" />

      <div class="top-header">
        <h1 class="page-title">Customer Orders</h1>
        <p class="page-subtitle">View and manage customer orders and details</p>
      </div>
      
      <div class="navigation-bar">
        
        <!-- Left Side: Tabs -->
        <div class="tabs-area">
          <div class="tab" @click="router.push('/dashboard')">
            <img :src="dashboard_black_icon" class="tab-icon" alt="Dashboard" />
            <span>Dashboard</span>
          </div>
          <div class="tab active">
            <img :src="table_green_icon" class="tab-icon" alt="Table" />
            <span>Table</span>
          </div>
        </div>

        <!-- search & create ord -->
        <div v-if="orders.length > 0" class="actions-area">
          <hlx-search @search-key="search" :search-style="'style1'" />
          
          <hlx-button class="primary" @click="is_form_open = true">
            <span class="btn-content">
              <img src="../assets/create-order-icon.svg" alt="create" class="btn-icon">
              <span>Create Order</span>
            </span>
          </hlx-button>
        </div>

      </div>

      <!-- table content -->
      <div v-if="orders.length > 0" class="table-area" >
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
            <!-- stat Left S.no -->
            <hlx-table-head :width="60" align="center" fixed="left">S.no</hlx-table-head>
            
            <!-- column -->
            <hlx-table-head :width="120">Customer ID</hlx-table-head>
            <hlx-table-head :width="150">Customer name</hlx-table-head>
            <hlx-table-head :width="200">Email id</hlx-table-head>
            <hlx-table-head :width="150">Phone number</hlx-table-head>
            <hlx-table-head :width="250">Address</hlx-table-head>
            <hlx-table-head :width="120">Order ID</hlx-table-head>
            <hlx-table-head :width="180">Order date</hlx-table-head>
            <hlx-table-head :width="220">Product</hlx-table-head>
            <hlx-table-head :width="100">Quantity</hlx-table-head>
            <hlx-table-head :width="120">Unit price</hlx-table-head>
            <hlx-table-head :width="130">Total amount</hlx-table-head>
            <hlx-table-head :width="130">Status</hlx-table-head>
            <hlx-table-head :width="180">Created by</hlx-table-head>
            
            <!-- stat options -->
            <hlx-table-head :width="60" align="center" fixed="right"></hlx-table-head>
          </template>

          <template #tbody>
            <tr v-for="(order, index) in pagination_orders" :key="order._id">
              
              <!-- pagi -->
              <hlx-table-cell align="center" fixed="left">
                {{ (current_page - 1) * rows_per_page + index + 1 }}
              </hlx-table-cell>
              
              <!-- SCROLLABLE DATA -->
              <hlx-table-cell>CUST-{{ String((current_page - 1) * rows_per_page + index + 1).padStart(4, '0') }}</hlx-table-cell>
              <hlx-table-cell>{{ order.first_name }} {{ order.last_name }}</hlx-table-cell>
              <hlx-table-cell>{{ order.email }}</hlx-table-cell>
              <hlx-table-cell>{{ typeof order.phone === 'object' ? (order.phone.number || JSON.stringify(order.phone)) : order.phone }}</hlx-table-cell>
              <hlx-table-cell>
                {{ order.address }}, {{ order.city }}, {{ order.state }}, {{ order.postal_code }}, {{ order.country }}
              </hlx-table-cell>
              <hlx-table-cell>ORD-{{ String((current_page - 1) * rows_per_page + index + 1).padStart(4, '0') }}</hlx-table-cell>
              <hlx-table-cell>
                {{ new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) }} 
                {{ new Date(order.createdAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }) }}
              </hlx-table-cell>
              <hlx-table-cell>{{ order.product }}</hlx-table-cell>
              <hlx-table-cell align="center">{{ order.quantity }}</hlx-table-cell>
              <hlx-table-cell align="center">$ {{ Number(order.unit_price).toFixed(2) }}</hlx-table-cell>
              <hlx-table-cell align="center">$ {{ Number(order.total_amount).toFixed(2) }}</hlx-table-cell>
              <hlx-table-cell>{{ order.status }}</hlx-table-cell>
              <hlx-table-cell>{{ order.created_by }}</hlx-table-cell>

              <!-- option -->
              <hlx-table-cell align="center" fixed="right">
                <div class="cell-wrapper">
                  <div class="action-icon" @click="toggle_menu(index)">⋮</div>
                  
                  <div v-if="active_menu_index === index" class="menu-wrapper">
                    <hlx-context-menu
                      :options="menu_options"
                      :data="order._id"
                      :show="true"
                      @chosen="handle_menu_choice"
                    />
                  </div>
                </div>
              </hlx-table-cell>            
            </tr>
            
            <tr v-if="filteredOrders.length === 0">
              <hlx-table-cell colspan="15" align="center" style="padding: 20px; color: #6b7280;">
                No orders found matching "{{ search_key }}"
              </hlx-table-cell>
            </tr>
          </template>
        </hlx-table>
      </div>

      <!-- empty state -->
      <div v-else-if="orders.length === 0" class="empty-state-area">
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

      <!-- pagination footer -->
      <div v-if="orders.length > 0" class="action-area">
        <hlx-pagination
          :total="filteredOrders.length"
          :background="false"
          @current-page="show_page"
          @updated:rows-per-page="rows_per_page = Number($event); current_page = 1"
          :rows-per-page-list="['5', '10', '15']" 
          enable-rows-per-page
          enable-go-to
        />
      </div>

      <!-- modals  -->
      <order_form 
        v-if="is_form_open" 
        @close="is_form_open=false" 
        @saved="handle_order_saved" 
      />

      <order_form 
        v-if="is_edit_open" 
        :key="selected_order ? selected_order._id : 'new'"
        :edit_data="selected_order"
        @close="is_edit_open = false" 
        @saved="handle_edit_saved" 
      />

      <delete_modal 
        v-if="is_delete_open" 
        :order_id="'ORD-' + (selected_order ? String(orders.indexOf(selected_order) + 1).padStart(4, '0') : '')"
        @close="is_delete_open = false"
        @confirm="confirm_delete"
      />

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import dashboard_black_icon from '../assets/dashborad-icon-black.svg' 
import table_green_icon from '../assets/table-icon-green.svg'

// Components
import order_form from '../components/order_form.vue'
import delete_modal from '../components/delete_modal.vue'

const router = useRouter()

const is_form_open = ref(false)
const is_edit_open = ref(false)
const is_delete_open = ref(false)
const selected_order = ref(null)
const orders = ref([])
const search_key = ref('')
const notification = ref({})

// Pagination
const current_page = ref(1)
const rows_per_page = ref(5)

const show_page = (page) => {
  current_page.value = page
}

// Table Columns Config
const columns = [
  { name: 'S.no' }, { name: 'Customer ID' }, { name: 'Customer name' },
  { name: 'Email id' }, { name: 'Phone number' }, { name: 'Address' },
  { name: 'Order ID' }, { name: 'Order date' }, { name: 'Product' },
  { name: 'Quantity' }, { name: 'Unit price' }, { name: 'Total amount' },
  { name: 'Status' }, { name: 'Created by' }, { name: 'Actions' }
]

// Menu Options
const menu_options = [
  { label: 'Edit', icon: 'icon-edit-regular' },
  { label: 'Delete', icon: 'icon-trash-regular' }
]

const active_menu_index = ref(-1)

const toggle_menu = (index) => {
  if (active_menu_index.value === index) {
    active_menu_index.value = -1
  } else {
    active_menu_index.value = index 
  }
}

const handle_menu_choice = (action) => {
  const clicked_index = active_menu_index.value
  const order = pagination_orders.value[clicked_index]
  
  active_menu_index.value = -1 
  selected_order.value = order

  if (action === 'Edit') {
    is_edit_open.value = false 
    setTimeout(() => {
      is_edit_open.value = true
    }, 50)
  } 
  else if (action === 'Delete') {
    is_delete_open.value = false
    setTimeout(() => {
      is_delete_open.value = true
    }, 50)
  }
}

const confirm_delete = async () => {
  if (!selected_order.value) return

  try {
    await axios.delete(`http://localhost:3000/api/orders/${selected_order.value._id}`)
    is_delete_open.value= false
    fetch_orders()
    push_notification('Order deleted successfully')
  } catch (err) {
    console.log('Failed to delete:', err)
    alert('Failed to delete the order.')
  }
}

//  get data 
const fetch_orders= async () => {
  try {
    const response=await axios.get('http://localhost:3000/api/orders')
    orders.value=response.data
  } catch (err) {
    console.error("Failed to fetch orders:", err)
  }
}

const search=(key)=> {
  search_key.value=key
  current_page.value=1
}

const push_notification=(message) => {
  notification.value={ type: 'success', message: message }
}

//  filter 
const filteredOrders=computed(() => {
  if (!search_key.value) return orders.value

  const key=search_key.value.toLowerCase()

  return orders.value.filter((order) => { 
    const fullName=`${order.first_name} ${order.last_name}`.toLowerCase()
    const email =(order.email || '').toLowerCase()
    const product=(order.product || '').toLowerCase()
    const status= (order.status || '').toLowerCase()
    const created_by=(order.created_by || '').toLowerCase()
    
    let phoneString = '' 
    if (typeof order.phone === 'object' && order.phone !== null) {
      phoneString=`${order.phone.country_code || ''} ${order.phone.number || ''}`.toLowerCase()
    } else {
      phoneString = String(order.phone || '').toLowerCase()
    }

    return (
      fullName.includes(key) || 
      email.includes(key) || 
      phoneString.includes(key) ||
      product.includes(key) ||
      status.includes(key) ||
      created_by.includes(key)
    )
  })
})

const pagination_orders=computed(()=> {
  const start=(current_page.value - 1) * rows_per_page.value
  const end=start + rows_per_page.value
  return filteredOrders.value.slice(start, end)
})

const handle_order_saved=()=> {
  is_form_open.value=false
  fetch_orders()
  push_notification('Order created successfully')
}

const handle_edit_saved=()=> {
  is_edit_open.value=false
  fetch_orders()
  push_notification('Order updated successfully')
}

onMounted(()=> {
  fetch_orders()
})
</script>

<style scoped>
/* laout */
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

.top-header {
  margin-bottom: 10px;
}

.page-title {
  font-family: 'Quicksand', sans-serif;
  font-size: 24px;
  color: #111827;
  margin: 0 0 8px 0;
  font-weight: 600;
}

.page-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* Nav */
.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
}

.tabs-area {
  display: flex;
  gap: 32px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  transition: all 0.2s;
}

.tab.active {
  color: #54BD95;
  border-bottom-color: #54BD95;
}

.tab-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.actions-area {
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 8px;
}

/* Empty State */
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
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 8px 0;
}

.empty-text {
  font-family: 'Open Sans', sans-serif;
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

.btn-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

/* Table Area */
.table-area {
  flex: 1;
  overflow: visible !important;
}

.action-area {
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
  margin-top: 16px;
  border-top: 1px solid #e5e7eb;
}

/* Menu and Icon */
.cell-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-wrapper {
  position: absolute;
  top: 0%;
  right: 150px;
  transform: translateY(-50%);
  z-index: 100;
}

.action-icon {
  font-size: 20px;
  font-weight: bold;
  color: #374151;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.2s;
  user-select: none;
}

.action-icon:hover {
  background-color: #e6f9f0;
  color: #10b981;
}

/* Context Menu Overrides */
:deep(.hlx-context-menu) {
  border-radius: 8px !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
  padding: 8px 0 !important;
  background: white !important;
  border: 1px solid #e5e7eb !important;
  min-width: 120px;
}

:deep(.hlx-context-menu-item) {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px !important;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px !important;
  color: #4b5563 !important;
  cursor: pointer;
}

:deep(.hlx-context-menu-item:hover) {
  background-color: #f3f4f6 !important;
  color: #111827 !important;
}
</style>