<!-- frontend/src/views/dashboard_list.vue -->
<template>
  <div class="page-container">
    <div class="page-header">
      <h2>Dashboards</h2>
      <hlx-button class="primary" @click="isModalOpen = true">+ Create Dashboard</hlx-button>
    </div>

    <!-- Dashboard Table -->
    <div class="table-container">
      <table class="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dash in dashboards" :key="dash._id" @click="openDashboard(dash._id)">
            <td>
              <strong>{{ dash.title }}</strong>
              <div class="sub-text">• {{ dash.visibility }}</div>
            </td>
            <td>{{ dash.owner }}</td>
            <td>{{ new Date(dash.updatedAt).toLocaleDateString() }}</td>
          </tr>
          <tr v-if="dashboards.length === 0">
            <td colspan="3" class="empty-text">No dashboards found. Create one!</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create Dashboard Modal -->
    <div v-if="isModalOpen" class="modal-overlay">
      <div class="modal-content">
        <h3>Create New Dashboard</h3>
        
        <div class="form-group">
          <label>Dashboard Title *</label>
          <hlx-input v-model="newDash.title" placeholder="e.g. My Sales Dashboard" />
          <span v-if="error" class="error">{{ error }}</span>
        </div>

        <div class="form-group">
          <label>Description</label>
          <hlx-input v-model="newDash.description" placeholder="Optional description" />
        </div>

        <div class="modal-actions">
          <hlx-button @click="isModalOpen = false">Cancel</hlx-button>
          <hlx-button class="primary" @click="createDashboard">Create</hlx-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const dashboards = ref([])
const isModalOpen = ref(false)
const newDash = ref({ title: '', description: '' })
const error = ref('')

const fetchDashboards = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/dashboards')
    dashboards.value = res.data
  } catch (err) {
    console.error(err)
  }
}

const createDashboard = async () => {
  error.value = ''
  if (!newDash.value.title) {
    error.value = 'Title is required'
    return
  }

  try {
    const res = await axios.post('http://localhost:3000/api/dashboards', newDash.value)
    isModalOpen.value = false
    newDash.value = { title: '', description: '' }
    fetchDashboards()
    
    // We will uncomment this later when we build the Builder page
    // router.push(`/builder/${res.data._id}`) 
  } catch (err) {
    console.error(err)
  }
}

const openDashboard = (id) => {
  console.log('Open dashboard:', id)
  // Later: router.push(`/builder/${id}`)
}

onMounted(() => {
  fetchDashboards()
})
</script>

<style scoped>
.page-container { padding: 24px; }
.page-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
.table-container { background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden; }
.dashboard-table { width: 100%; border-collapse: collapse; text-align: left; }
.dashboard-table th { background: #f9fafb; padding: 16px; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-weight: 500; }
.dashboard-table td { padding: 16px; border-bottom: 1px solid #e5e7eb; cursor: pointer; }
.dashboard-table tr:hover { background: #f9fafb; }
.sub-text { font-size: 12px; color: #9ca3af; margin-top: 4px; }
.empty-text { text-align: center; color: #6b7280; padding: 40px !important; }
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 1000; }
.modal-content { background: white; padding: 24px; border-radius: 8px; width: 400px; }
.form-group { margin-bottom: 16px; display: flex; flex-direction: column; }
.form-group label { margin-bottom: 6px; font-size: 14px; }
.error { color: red; font-size: 12px; margin-top: 4px; }
.modal-actions { display: flex; justify-content: flex-end; gap: 12px; margin-top: 24px; }
</style>