<template>
  <div class="page-container">
    <div class="content-card">

      <!-- Top Header -->
      <div class="top-header">
        <div>
          <h1 class="page-title">Customer Orders</h1>
          <p class="page-subtitle">View and manage customer orders and details</p>
        </div>
        
        <!-- Right Side Actions -->
        <div class="header-actions">
          
          <!-- Dashboard Selector & Icons -->
          <div v-if="saved_dashboards.length > 0" class="dashboard-controls">
            
            <!-- Dropdown (Using Halleyx Select) -->
            <hlx-select 
              v-model:value="active_dashboard_id"
              :options="saved_dashboards"
              :label="'name'"
              :prop-value="'_id'"
              placeholder-value="Select Dashboard"
              :label-animation="true"
              @update:value="load_selected_dashboard"
              class="dashboard-select"
            />

            <!-- Edit Icon -->
            <button class="action-icon-btn" @click="go_to_edit" title="Edit Dashboard">
              <img src="../assets/setting..svg" alt="Edit" class="action-icon" />
            </button>

            <!-- Delete Icon -->
            <button class="action-icon-btn delete" @click="open_delete_modal" title="Delete Dashboard">
              <img src="../assets/delete-iocn.svg.svg" alt="Delete" class="action-icon" />
            </button>
            
          </div>

          <!-- Configure Button (Standard HTML for Router) -->
          <button class="configure-btn" @click="router.push('/dashboard/configure')">
            <img src="../assets/setting..svg" alt="Settings" class="btn-icon" />
            Configure dashboard
          </button>

        </div>
      </div>
      
      <!-- Navigation Bar -->
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

      <!-- Dashboard View (14x14 Grid) -->
      <div v-else class="dashboard-view-area">
        
        <div class="grid-container">
          
          <div 
            v-for="widget in current_widgets" 
            :key="widget.id" 
            class="widget-card" 
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
                timeFilter="All time" 
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
            <p>Are you sure you want to delete <strong>{{ active_dashboard_name }}</strong>? This action cannot be undone.</p>
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import widget_renderer from '../components/widget_renderer.vue'

const router = useRouter()

const is_loading = ref(true)
const saved_dashboards = ref([])
const active_dashboard_id = ref(null)
const is_delete_modal_open = ref(false)

// Computed properties
const current_dashboard = computed(() => {
  return saved_dashboards.value.find(d => d._id === active_dashboard_id.value) || null
})

const active_dashboard_name = computed(() => {
  return current_dashboard.value ? (current_dashboard.value.name || 'Untitled Dashboard') : 'Untitled Dashboard'
})

const current_widgets = computed(() => {
  return current_dashboard.value ? (current_dashboard.value.widgets || []) : []
})

onMounted(async () => {
  try {
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
  } catch (error) {
    console.error("Failed to load dashboards:", error)
  } finally {
    is_loading.value = false
  }
})

const load_selected_dashboard = (new_id) => {
  active_dashboard_id.value = new_id
}

const go_to_edit = () => {
  router.push(`/dashboard/configure?id=${active_dashboard_id.value}`)
}

const open_delete_modal = () => {
  is_delete_modal_open.value = true
}

const confirm_delete = async () => {
  try {
    await axios.delete(`http://localhost:3000/api/dashboard/${active_dashboard_id.value}`)
    saved_dashboards.value = saved_dashboards.value.filter(d => d._id !== active_dashboard_id.value)
    
    if (saved_dashboards.value.length > 0) {
      active_dashboard_id.value = saved_dashboards.value[0]._id
    } else {
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
/* Main Layout (FIXED, NO SCROLL) */
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

/* Top Header */
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-shrink: 0;
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

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.dashboard-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dashboard-select {
  width: 200px;
}

.action-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.action-icon-btn:hover {
  background-color: #f3f4f6;
}

.action-icon-btn.delete:hover {
  background-color: #fee2e2;
}

.action-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

.configure-btn {
  background-color: white;
  color: #10b981;
  border: 1px solid #10b981;
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

/* Navigation Bar */
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
.secondary-success-btn:hover { background-color: #ecfdf5; }

/* Dashboard View (14x14 Grid) */
.dashboard-view-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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

/* Loading */
.loading-state {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #6b7280;
  font-family: 'Open Sans', sans-serif;
}

/* Modal */
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
.cancel-btn:hover { background-color: #f3f4f6; }

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
.delete-confirm-btn:hover { background-color: #dc2626; }
</style>