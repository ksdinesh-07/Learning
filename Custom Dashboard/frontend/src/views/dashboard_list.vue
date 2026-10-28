<template>
  <div class="page-container">
    <div class="content-card">

      <!-- Top Header -->
      <div class="top-header">
        <div class="header-left">
          <h1 class="page-title">Customer Orders</h1>
          <p class="page-subtitle">View and manage customer orders and details</p>
        </div>
        
        <div class="header-right">
          <div class="top-actions">
            
            <!-- Custom Dashboard Dropdown -->
            <div class="custom-dropdown-container" ref="dashboardDropdownRef">
              <div class="custom-dropdown-trigger" @click="toggle_dashboard_dropdown">
                <span class="dropdown-selected-text">
                  {{ active_dashboard_name }}
                </span>
                <span class="dropdown-arrow"><img src="../assets/down-arrow.svg" alt=""></span>
              </div>
              
              <div v-if="is_dashboard_dropdown_open" class="custom-dropdown-menu">
                <div 
                  v-for="dashboard in saved_dashboards" 
                  :key="dashboard._id"
                  class="custom-dropdown-item"
                  :class="{ active: dashboard._id === active_dashboard_id }"
                  @click="select_dashboard(dashboard._id)"
                >
                  <span class="item-name">{{ dashboard.name || 'Untitled Dashboard' }}</span>
                  
                  <div class="item-actions">
                    <button class="action-icon-btn" @click.stop="go_to_edit(dashboard._id)" title="Edit">
                      <img src="../assets/setting..svg" alt="Edit" class="action-icon" />
                    </button>
                    <button class="action-icon-btn delete" @click.stop="open_delete_modal(dashboard)" title="Delete">
                      <img src="../assets/delete-iocn.svg.svg" alt="Delete" class="action-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Configure Button -->
            <button class="configure-btn" @click="router.push('/dashboard/configure')">
              <img src="../assets/setting..svg" alt="Settings" class="btn-icon" />
              Configure dashboard
            </button>
          </div>
        </div>
      </div>
      
      <!-- Navigation Bar + Filter -->
      <div class="navigation-bar">
        <div class="tabs-area">
          <router-link to="/dashboard" class="tab">
            <img src="../assets/dashborad-icon-black.svg" class="tab-icon icon-black" alt="Dashboard" />
            <img src="../assets/dashboard-green-icon.svg" class="tab-icon icon-green" alt="Dashboard" />
            <span>Dashboard</span>
          </router-link>

          <router-link to="/orders" class="tab">
            <img src="../assets/table-icon-black.svg" class="tab-icon icon-black" alt="Table" />
            <img src="../assets/table-icon-green.svg" class="tab-icon icon-green" alt="Table" />
            <span>Table</span>
          </router-link>
        </div>

        <!-- Calendar Filter -->
        <div class="filter-container" ref="filterContainer">
          <img 
            src="../assets/calender-icon.svg" 
            alt="calendar" 
            class="calendar-icon clickable" 
            @click="toggle_filter_dropdown"
          />
          <div class="filter-pill clickable" @click="toggle_filter_dropdown">
            <span>{{ selected_time_filter }}</span>
          </div>

          <div v-if="is_filter_open" class="filter-dropdown-menu">
            <div 
              v-for="option in time_options" 
              :key="option" 
              class="filter-option"
              :class="{ active: selected_time_filter === option }"
              @click="select_time_filter(option)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="is_loading" class="loading-state">
        <p>Loading dashboard...</p>
      </div>

      <!-- Empty State -->
      <div v-else-if="current_widgets.length === 0" class="empty-state-area">
        <div class="empty-content">
          <div class="icon-wrapper">
            <img src="../assets/line-chart-dots-square.svg" class="empty-icon" alt="Dashboard" />
          </div>
          <h2 class="empty-title">Dashboard Not Configured</h2>
          <p class="empty-text">Configure your dashboard to start viewing analytics</p>
          
          <button class="secondary-success-btn" @click="router.push('/dashboard/configure')">
            <img src="../assets/setting..svg" alt="">
            Configure dashboard
          </button>
        </div>
      </div>

      <!-- Grid Layout -->
      <div v-else class="dashboard-view-area">
        <div class="grid-container">
          <div 
            v-for="widget in current_widgets" 
            :key="widget.id" 
            class="widget-card" 
            :class="{
              'is-kpi': widget.type === 'kpi',
              'is-chart': widget.type === 'pie' || widget.type === 'bar' || widget.type === 'line' || widget.type === 'scatter' || widget.type === 'area',
              'is-table': widget.type === 'table'
            }"
            :style="{ 
              gridColumnStart: widget.x + 1, 
              gridColumnEnd: widget.x + widget.w + 1, 
              gridRowStart: widget.y + 1, 
              gridRowEnd: widget.y + widget.h + 1 
            }"
          >
            <div class="widget-header">
              <span class="widget-title">{{ widget.title }}</span>
            </div>
            
            <div class="widget-body">
              <widget_renderer 
                :key="widget.key || widget.id" 
                :widget="widget" 
                :timeFilter="selected_time_filter" 
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Modal -->
      <div v-if="is_delete_modal_open" class="modal-overlay">
        <div class="custom-modal">
          <div class="custom-modal-header">
            <h3>Delete Dashboard</h3>
            <button class="close-btn" @click="is_delete_modal_open = false">✕</button>
          </div>
          <div class="custom-modal-body">
            <p>Are you sure you want to delete <strong>{{ dashboard_to_delete_name }}</strong>? This action cannot be undone.</p>
          </div>
          <div class="custom-modal-footer">
            <button class="cancel-btn" @click="is_delete_modal_open = false">Cancel</button>
            <button class="delete-confirm-btn" @click="confirm_delete">Delete</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import widget_renderer from '../components/widget_renderer.vue'

const router=useRouter()

const is_loading=ref(true)
const saved_dashboards=ref([])
const active_dashboard_id=ref(null)
const is_delete_modal_open=ref(false)
const dashboard_to_delete_id=ref(null)
const dashboard_to_delete_name=ref('')

// Dropdown State
const is_dashboard_dropdown_open=ref(false)
const dashboardDropdownRef=ref(null)

// Filter State
const is_filter_open=ref(false)
const filterContainer=ref(null)
const selected_time_filter=ref('Last 3 Months')

const time_options=[
  'Last 7 Days',
  'Last 30 Days',
  'Last 3 Months',
  'Last 90 Days',
  'All time'
]

const toggle_dashboard_dropdown=()=>{
  is_dashboard_dropdown_open.value = !is_dashboard_dropdown_open.value
}

const select_dashboard=(id)=>{
  active_dashboard_id.value=id
  is_dashboard_dropdown_open.value=false
}

const toggle_filter_dropdown =()=>{
  is_filter_open.value=!is_filter_open.value
}

const select_time_filter =(option)=>{
  selected_time_filter.value=option
  is_filter_open.value=false
}

const handle_click_outside=(event)=>{
  if(dashboardDropdownRef.value && !dashboardDropdownRef.value.contains(event.target)) {
    is_dashboard_dropdown_open.value = false
  }
  if(filterContainer.value && !filterContainer.value.contains(event.target)) {
    is_filter_open.value = false
  }
}

const current_dashboard=computed(() => {
  return saved_dashboards.value.find(d => d._id === active_dashboard_id.value) || null
})

const active_dashboard_name=computed(()=>{
  return current_dashboard.value ? (current_dashboard.value.name || 'Untitled Dashboard') : 'Select Dashboard'
})

const current_widgets=computed(()=>{
  return current_dashboard.value ? (current_dashboard.value.widgets || []) : []
})

onMounted(async()=>{
  document.addEventListener('click', handle_click_outside)
  
  try{
    const res = await axios.get('http://localhost:3000/api/dashboard') 
    let fetched_data = res.data;
    if (Array.isArray(fetched_data)) {
      saved_dashboards.value = fetched_data;
    } else if (fetched_data && fetched_data._id) {
      saved_dashboards.value = [fetched_data];
    } else {
      saved_dashboards.value = [];
    }

    if (saved_dashboards.value.length > 0) {
      active_dashboard_id.value = saved_dashboards.value[0]._id;
    }
  }catch (error) {
    console.error("Failed to load dashboards:", error)
  }finally {
    is_loading.value = false
  }
})

onUnmounted(()=>{
  document.removeEventListener('click', handle_click_outside)
})

const go_to_edit=(id)=> {
  router.push(`/dashboard/configure?id=${id}`)
}

const open_delete_modal=(dashboard)=> {
  dashboard_to_delete_id.value=dashboard._id
  dashboard_to_delete_name.value=dashboard.name || 'Untitled Dashboard'
  is_delete_modal_open.value=true
}

const confirm_delete=async()=>{
  try {
    await axios.delete(`http://localhost:3000/api/dashboard/${dashboard_to_delete_id.value}`)
    saved_dashboards.value = saved_dashboards.value.filter(d => d._id !== dashboard_to_delete_id.value)
    if(saved_dashboards.value.length > 0) {
      active_dashboard_id.value = saved_dashboards.value[0]._id
    } 
    else{
      active_dashboard_id.value = null
    }
    is_delete_modal_open.value = false
  } catch (error) {
    console.error("Failed to delete dashboard:", error)
    alert("Failed to delete dashboard.")
  }
}
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
  padding: 30px 40px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  flex-direction: column;
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

.header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.custom-dropdown-container {
  position: relative;
}

.custom-dropdown-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 8px 12px;
  background: white;
  width: 180px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #4b5563;
  transition: border-color 0.2s;
}

.custom-dropdown-trigger:hover {
  border-color: #54bd95;
}

.dropdown-arrow {
  font-size: 10px;
  color: #9ca3af;
}

.custom-dropdown-menu {
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 200;
  overflow: hidden;
  padding: 4px 0;
}

.custom-dropdown-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  cursor: pointer;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #4b5563;
  transition: background 0.2s;
}

.custom-dropdown-item:hover {
  background-color: #f9fafb;
}

.custom-dropdown-item.active {
  background-color: #ecfdf5;
  color: #10b981;
  font-weight: 600;
}

.item-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-actions {
  display: flex;
  gap: 4px;
  opacity: 0;
  transition: opacity 0.2s;
}

.custom-dropdown-item:hover .item-actions,
.custom-dropdown-item.active .item-actions {
  opacity: 1;
}

.action-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.action-icon-btn:hover {
  background-color: #e5e7eb;
}

.action-icon-btn.delete:hover {
  background-color: #fee2e2;
}

.action-icon {
  width: 14px;
  height: 14px;
  object-fit: contain;
}

.configure-btn {
  background-color: white;
  color: #54bd95;
  border: 1px solid #54bd95;
  border-radius: 6px;
  padding: 8px 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.configure-btn:hover {
  background-color: #ecfdf5;
}

.configure-btn .btn-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.navigation-bar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 24px;
  flex-shrink: 0;
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
  text-decoration: none;
}

.tab.router-link-active {
  color: #54BD95;
  border-bottom-color: #54BD95;
}

.tab-icon {
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.icon-green { display: none; }
.icon-black { display: block; }
.tab.router-link-active .icon-green { display: block; }
.tab.router-link-active .icon-black { display: none; }

.filter-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 4px;
}

.clickable {
  cursor: pointer;
  user-select: none;
}

.calendar-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.calendar-icon:hover {
  opacity: 1;
}

.filter-pill {
  background-color: #f3f4f6;
  border-radius: 8px;
  padding: 0 16px;
  height: 36px;
  display: flex;
  align-items: center;
  transition: background 0.2s;
}

.filter-pill:hover {
  background-color: #e5e7eb;
}

.filter-pill span {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #4b5563;
  font-weight: 500;
}

.filter-dropdown-menu {
  position: absolute;
  top: 45px;
  right: 0;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 100;
  overflow: hidden;
  padding: 4px 0;
}

.filter-option {
  padding: 10px 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  color: #4b5563;
  cursor: pointer;
  transition: background 0.2s;
}

.filter-option:hover {
  background-color: #f9fafb;
  color: #111827;
}

.filter-option.active {
  background-color: #ecfdf5;
  color: #10b981;
  font-weight: 600;
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
  border-radius: 16px;
  margin-bottom: 20px;
}

.empty-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.empty-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 8px 0;
}

.empty-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #6b7280;
  margin: 0 0 24px 0;
}

.secondary-success-btn {
  background-color: white;
  color: #10b981;
  border: 1px solid #10b981;
  border-radius: 6px;
  padding: 10px 20px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}
.secondary-success-btn:hover { 
  background-color: #ecfdf5; 
}

.dashboard-view-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  min-height: 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
  gap: 6px;
  width: 100%;
  height: 100%;
}

.widget-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  overflow: hidden;
  z-index: 10;
  min-height: 0; 
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border-bottom: 1px solid #f3f4f6;
  background: white;
}

.widget-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  color: #6b7280;
}

.widget-body {
  flex: 1;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.loading-state {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b7280;
  font-family: 'Open Sans', sans-serif;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.custom-modal {
  background: white;
  width: 450px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
}

.custom-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
}

.custom-modal-header h3 {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #9ca3af;
}

.custom-modal-body {
  padding: 24px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #374151;
}

.custom-modal-body p {
  margin: 0;
}

.custom-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid #eee;
  background: #fafafa;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.cancel-btn {
  background-color: white;
  color: #4b5563;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 8px 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.cancel-btn:hover { 
  background-color: #f3f4f6; 
}

.delete-confirm-btn {
  background-color: #ef4444;
  color: white;
  border: 1px solid #ef4444;
  border-radius: 6px;
  padding: 8px 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}
.delete-confirm-btn:hover { 
  background-color: #dc2626; 
}

@media (max-width: 1024px) {
  .content-card {
    padding: 20px;
  }

  .top-header {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .navigation-bar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }

  .grid-container {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important; 
    grid-template-rows: auto !important;
    gap: 16px;
    align-content: start;
    height: auto !important;
  }

  /* Reset all widgets to default flow */
  .widget-card {
    grid-column: auto !important;
    grid-row: auto !important;
    min-height: 110px; 
  }

  /* Force Tables and Charts to span full width (2 columns) */
  .widget-card.is-table,
  .widget-card.is-chart {
    grid-column: span 2 !important;
    min-height: 350px; 
  }

  .widget-card.is-table .widget-body,
  .widget-card.is-chart .widget-body {
    min-height: 300px;
  }

  .widget-body {
    padding: 16px;
  }
}

/* Mobile Breakpoint */
@media (max-width: 600px) {
  .content-card {
    padding: 16px 12px;
  }

  .top-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .header-right {
    width: 100%;
    align-items: stretch;
    margin-top: 12px;
  }

  .top-actions {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }

  .custom-dropdown-container {
    width: 100%;
  }

  .custom-dropdown-trigger {
    width: 100%;
  }

  .configure-btn {
    justify-content: center;
    width: 100%;
  }

  .tabs-area {
    gap: 16px;
  }

  .tab {
    font-size: 13px;
  }

  .filter-container {
    gap: 6px;
  }
  
  .filter-pill {
    padding: 0 10px;
    height: 32px;
  }

  .filter-pill span {
    font-size: 13px;
  }

  .grid-container {
    display: flex !important;
    flex-direction: column !important;
    gap: 16px !important;
    height: auto !important;
  }

  .widget-card {
    width: 100% !important;
    grid-column: unset !important;
    grid-row: unset !important;
    min-height: 100px !important;
  }

\  .widget-card.is-table,
  .widget-card.is-chart {
    min-height: 350px !important;
  }
  
  .widget-card.is-table .widget-body,
  .widget-card.is-chart .widget-body {
    min-height: 300px !important;
  }

  .widget-title {
    font-size: 13px;
  }
  
  .custom-modal {
    width: 90%;
  }
}
</style>