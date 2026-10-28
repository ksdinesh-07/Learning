<template>
  <div class="page-container">
    <div class="content-card">

      <!-- toast notification -->
      <hlx-alert-notification :notify="notification" :auto-close="true" />

      <!-- header area -->
      <div class="header-area">
        <hlx-button @click="handle_back" class="back-btn">
          <img src="../assets/arrow-left-regular.svg" alt="back">
        </hlx-button>
        
        <div>
          <h1 class="page-title">Configure dashboard</h1>
          <p class="page-subtitle">Configure your dashboard to start viewing analytics</p>
        </div>
      </div>

      <!-- main content layout -->
      <div class="builder-layout">
        
        <!-- left sidebar -->
        <div class="sidebar">
          <div class="section">
            <label class="section-label">Show data for</label>
            <hlx-select 
              v-model:value="selected_time" 
              :options="time_options" 
              :label="'name'" 
              :prop-value="'value'" 
              placeholder-value="All time" 
              :label-animation="true" 
            />
          </div>

          <div class="section">
            <label class="section-label">Widget library</label>
            <p class="hint-text">Drag and drop your canvas</p>
            
            <!-- charts category -->
            <div class="accordion">
              <div class="accordion-header" @click="toggle_category('charts')">
                <span>Charts</span>
                <img src="../assets/up-arrow.svg" alt="uparrow" :class="{ 'rotate': open_categories.charts }" class="arrow-icon">
              </div>
              <div v-show="open_categories.charts" class="accordion-content">
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'bar')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/bar-chart-icon.svg" alt=""></div>
                  <span>Bar Chart</span>
                </div>
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'line')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/line-chart-icon.svg" alt=""></div>
                  <span>Line Chart</span>
                </div>
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'pie')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/pie-chart-icon.svg" alt=""></div>
                  <span>Pie Chart</span>
                </div>
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'area')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/area-chart-icon.svg" alt=""></div>
                  <span>Area Chart</span>
                </div>
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'scatter')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/scatter-plot-icon.svg" alt=""></div>
                  <span>Scatter Plot</span>
                </div>
              </div>
            </div>

            <!-- tables category -->
            <div class="accordion">
              <div class="accordion-header" @click="toggle_category('tables')">
                <span>Tables</span>
                <img src="../assets/up-arrow.svg" alt="uparrow" :class="{ 'rotate': open_categories.tables }" class="arrow-icon">
              </div>
              <div v-show="open_categories.tables" class="accordion-content">
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'table')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/table-icon.svg" alt=""></div>
                  <span>Table</span>
                </div>
              </div>
            </div>

            <!-- kpis category -->
            <div class="accordion">
              <div class="accordion-header" @click="toggle_category('kpis')">
                <span>KPIs</span>
                <img src="../assets/up-arrow.svg" alt="uparrow" :class="{ 'rotate': open_categories.kpis }" class="arrow-icon">
              </div>
              <div v-show="open_categories.kpis" class="accordion-content">
                <div class="widget-item" draggable="true" @dragstart="on_drag_start($event, 'kpi')">
                  <span class="drag-handle"><img src="../assets//dragable.svg" alt="drag"></span>
                  <div class="widget-icon-bg"><img src="../assets/kpi-card-icon.svg" alt=""></div>
                  <span>KPI Value</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- right canvas (14x14 grid) -->
        <div class="canvas-area" @dragover.prevent="on_drag_over" @dragleave="on_drag_leave" @drop="on_drop">
          <div class="grid-container" ref="gridContainer">
            
            <div v-for="n in 196" :key="'bg-'+n" class="grid-cell"></div>

            <!-- drag preview -->
            <div 
              v-if="drag_preview" 
              class="drag-preview" 
              :style="{ 
                gridColumnStart: drag_preview.x + 1, 
                gridColumnEnd: drag_preview.x + drag_preview.w + 1, 
                gridRowStart: drag_preview.y + 1, 
                gridRowEnd: drag_preview.y + drag_preview.h + 1 
              }"
            >
              <div class="preview-content">
                <img src="../assets/dragable.svg" class="drag-icon" alt="drag">
                <span class="preview-text">{{ get_name_for_type(dragged_type) }}</span>
              </div>
            </div>

            <!-- final widgets -->
            <div 
              v-for="widget in widgets" 
              :key="widget.id" 
              class="widget-card" 
              :style="{ 
                gridColumnStart: widget.x + 1, 
                gridColumnEnd: widget.x + widget.w + 1, 
                gridRowStart: widget.y + 1, 
                gridRowEnd: widget.y + widget.h + 1 
              }" 
              draggable="true" 
              @dragstart="on_widget_drag_start($event, widget)"
            >
              <div class="widget-header">
                <span class="widget-title">{{ widget.title }}</span>
                <div class="widget-actions">
                  <button class="action-btn delete" draggable="false" @mousedown.stop @click.stop="open_delete(widget)" title="Delete">
                    <img src="../assets/delete-iocn.svg.svg" alt="delete">
                  </button>
                  <button class="action-btn settings" draggable="false" @mousedown.stop @click.stop="open_config(widget)" title="Settings">
                    <img src="../assets/setting..svg" alt="settings">
                  </button>
                </div>
              </div>
              
              <div class="widget-body">
                <widget_renderer 
                  :key="widget.key || widget.id" 
                  :widget="widget" 
                  :timeFilter="selected_time" 
                />
                <img src="../assets/dragable.svg" class="widget-drag-icon" alt="drag">
              </div>              
            </div>
          </div>
        </div>
      </div>

      <!-- footer actions -->
      <div class="footer-actions">
        <hlx-button @click="handle_back">Cancel</hlx-button>
        <hlx-button class="primary" @click="open_save_modal">Save</hlx-button>
      </div>

      <!-- delete modal -->
      <div v-if="is_delete_open" class="modal-overlay">
        <div class="custom-modal">
          <div class="custom-modal-header">
            <h3>Delete</h3>
            <button class="close-btn" @click="is_delete_open = false">
              <img src="../assets/close.svg" alt="close">
            </button>
          </div>
          <div class="custom-modal-body">
            <p>Are you sure you want to delete the <strong>{{ widget_to_delete?.title }}</strong> widget?</p>
          </div>
          <div class="custom-modal-footer">
            <hlx-button @click.native="is_delete_open = false">Cancel</hlx-button>
            <hlx-button class="primary" @click.native="confirm_delete">Delete</hlx-button>
          </div>
        </div>
      </div>

      <!-- unsaved changes modal -->
      <div v-if="is_unsaved_open" class="modal-overlay">
        <div class="custom-modal">
          <div class="custom-modal-header">
            <h3>Unsaved changes</h3>
            <button class="close-btn" @click="is_unsaved_open = false">
              <img src="../assets/close.svg" alt="close">
            </button>
          </div>
          <div class="custom-modal-body">
            <p>Do you want to save your changes before navigating away?</p>
          </div>
          <div class="custom-modal-footer unsaved-footer">
            <hlx-button @click.native="discard_changes" class="discard-btn">Discard</hlx-button>
            <hlx-button class="primary" @click.native="save_and_leave">Save</hlx-button>
          </div>
        </div>
      </div>

      <!-- save dashboard modal -->
      <div v-if="is_save_modal_open" class="modal-overlay">
        <div class="custom-modal">
          <div class="custom-modal-header">
            <h3>Save Dashboard</h3>
            <button class="close-btn" @click="is_save_modal_open = false">
              <img src="../assets/close.svg" alt="close">
            </button>
          </div>
          <div class="custom-modal-body">
            <p style="margin-bottom: 16px;">Give your dashboard a name so you can easily find it later.</p>
            <hlx-input 
              v-model:value="dashboard_name" 
              placeholder-value="e.g. Sales Overview 2026"
              :label-animation="true"
            />
          </div>
          <div class="custom-modal-footer">
            <hlx-button @click.native="is_save_modal_open = false">Cancel</hlx-button>
            <hlx-button class="primary" @click.native="confirm_save">Save Dashboard</hlx-button>
          </div>
        </div>
      </div>

      <!-- widget config panel -->
      <widget_config_panel 
        v-if="is_config_open && active_widget" 
        :widget="active_widget" 
        @close="is_config_open = false"
        @save="save_config"
      />

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

import widget_config_panel from '../components/widget_config_panel.vue'
import widget_renderer from '../components/widget_renderer.vue'

const router = useRouter()
const route = useRoute()
const gridContainer = ref(null)

//  toaster state 
const notification = ref({})

//  unsaved changes state 
const is_unsaved_open = ref(false)
const has_unsaved_changes = ref(false)

//  config state 
const is_config_open = ref(false)
const active_widget = ref(null)

//  save dashboard modal state 
const is_save_modal_open = ref(false)
const dashboard_name = ref('My Dashboard')
const editing_dashboard_id = ref(null)

const open_config = (widget) => {
  active_widget.value = JSON.parse(JSON.stringify(widget))
  is_config_open.value = true
}

const save_config = (updated_widget) => {
  const index = widgets.value.findIndex(w => w.id === updated_widget.id)
  
  if (index !== -1) {
    const original_x = widgets.value[index].x
    const original_y = widgets.value[index].y
    
    widgets.value[index] = { 
      ...updated_widget, 
      x: original_x, 
      y: original_y,
      key: Date.now() 
    }
  }
  
  is_config_open.value = false

  notification.value = {
    type: 'success',
    message: 'All set! Your widget settings have been updated!'
  }
}

//dragable state
let dragged_type=null
let dragged_widget=null
const widgets=ref([])
const drag_preview=ref(null) 

//delete state
const is_delete_open=ref(false)
const widget_to_delete=ref(null)

const get_name_for_type=(type)=>{
  const names={
    'bar': 'Bar Chart', 'line': 'Line Chart', 'pie': 'Pie Chart',
    'area': 'Area Chart', 'scatter': 'Scatter Plot', 'table': 'Table', 'kpi': 'KPI Value'
  }
  return names[type] || 'Widget'
}

//  drag logic 
const on_drag_start=(event, type)=>{
  dragged_type=type
  dragged_widget=null
  event.dataTransfer.effectAllowed='copy'
  event.dataTransfer.setData('text/plain', type)
}

const on_widget_drag_start=(event, widget) => {
  dragged_widget=widget
  dragged_type=widget.type
  event.dataTransfer.effectAllowed='move'
  event.dataTransfer.setData('text/plain', widget.id)
}

const on_drag_over=(event) => {
  if (!dragged_type || !gridContainer.value) return

  const grid_rect=gridContainer.value.getBoundingClientRect()
  const col_width=(grid_rect.width - (13 * 6)) / 14
  const row_height=(grid_rect.height - (13 * 6)) / 14

  const mouse_x=event.clientX - grid_rect.left
  const mouse_y=event.clientY - grid_rect.top

  let col=Math.floor(mouse_x / (col_width + 6))
  let row=Math.floor(mouse_y / (row_height + 6))

  if (col < 0) col=0
  if (row < 0) row=0

  let w=4, h=4
  if (dragged_type === 'table') { w=5; h=5 }
  if (dragged_type === 'kpi') { w=2; h=2 }

  if (col + w > 14) col=14 - w
  if (row + h > 14) row=14 - h

  drag_preview.value={ x: col, y: row, w: w, h: h }
}

const on_drag_leave=()=>{
  drag_preview.value=null
}

const on_drop=()=>{
  if (!dragged_type || !drag_preview.value) {
    dragged_type=null
    dragged_widget=null
    drag_preview.value=null
    return
  }

  const pos=drag_preview.value

  if(dragged_widget) {
    const index=widgets.value.findIndex(w => w.id === dragged_widget.id)
    if (index !== -1) {
      widgets.value[index].x = pos.x
      widgets.value[index].y = pos.y
      widgets.value[index].key = Date.now()
    }
  } 
  else {
    widgets.value.push({
      id: Date.now().toString(),
      type: dragged_type,
      title: get_name_for_type(dragged_type),
      w: pos.w,
      h: pos.h,
      x: pos.x,
      y: pos.y,
      metric: '',
      aggregation: '',
      data_format: 'number',
      precision: 0,
      table_columns: ['customer_name', 'product', 'total_amount'],
      table_sort: 'asc',
      table_pagination: 5,
      table_apply_filter: false,
      x_axis: '',
      y_axis: '',
      show_data_labels: false,
      chart_data: '',
      show_legend: true,
      font_size: 14,
      header_bg: '#D8D8D8',
      key: Date.now()
    })
  }
  
  dragged_type=null
  dragged_widget=null
  drag_preview.value=null
}

//  delete logic 
const open_delete=(widget) => {
  widget_to_delete.value=widget
  is_delete_open.value=true
}

const confirm_delete=()=>{
  widgets.value=widgets.value.filter(w => w.id !== widget_to_delete.value.id)
  is_delete_open.value =false
  widget_to_delete.value= null

  notification.value={
    type: 'success',
    message: 'Done! Your widget has been removed'
  }
}

//  unsaved changes logic 
watch(widgets, ()=>{
  has_unsaved_changes.value = true
}, { deep: true })

const handle_back=()=>{
  if (has_unsaved_changes.value) {
    is_unsaved_open.value = true
  } 
  else {
    router.push('/dashboard')
  }
}

const discard_changes=()=>{
  is_unsaved_open.value=false
  router.push('/dashboard')
}

const save_and_leave =()=> {
  is_unsaved_open.value=false
  has_unsaved_changes.value=false
  
  notification.value={
    type: 'success',
    message: 'All set! Your changes have been saved successfully!'
  }
  
  setTimeout(()=>{
    router.push('/dashboard')
  }, 1500)
}

//  other state 
const selected_time=ref('All time')
const time_options=[
  { name: 'All time', value: 'All time' },
  { name: 'Today', value: 'Today' },
  { name: 'Last 7 Days', value: 'Last 7 Days' },
  { name: 'Last 30 Days', value: 'Last 30 Days' },
  { name: 'Last 90 Days', value: 'Last 90 Days' }
]

const open_categories = reactive({
  charts: true,
  tables: true,
  kpis: true
})

const toggle_category = (category) => {
  open_categories[category] = !open_categories[category]
}

onMounted(async () => {
  const url_id = route.query.id;
  if (url_id) {
    editing_dashboard_id.value = url_id;
    try {
      const res = await axios.get('http://localhost:3000/api/dashboard');
      let dashboards = Array.isArray(res.data) ? res.data : [res.data];
      const found = dashboards.find(d => d._id === url_id);
      if (found) {
        widgets.value = found.widgets || [];
        dashboard_name.value = found.name || 'My Dashboard';
      }
    } catch (error) {
      console.error("Failed to load dashboard:", error);
    }
  }
});

//  save dashboard logic 
const open_save_modal = () => {
  is_save_modal_open.value = true;
}

const confirm_save = async () => {
  if (!dashboard_name.value.trim()) {
    alert("Please enter a dashboard name.");
    return;
  }

  try {
    await axios.post('http://localhost:3000/api/dashboard/save', {
      id: editing_dashboard_id.value,
      name: dashboard_name.value,
      widgets: widgets.value
    });
    
    has_unsaved_changes.value = false;
    is_save_modal_open.value = false;
    
    notification.value = {
      type: 'success',
      message: 'All set! Your dashboard has been saved!'
    };
    
    setTimeout(() => {
      router.push('/dashboard')
    }, 1500)
    
  } catch (error) {
    console.error("Failed to save dashboard:", error);
    notification.value = {
      type: 'error',
      message: 'Failed to save dashboard. Please try again.'
    };
  }
}
</script>

<style scoped>
/* page layout */
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
}

/* header */
.header-area {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 40px;
  border-bottom: 1px solid #e5e7eb;
}

.page-title {
  font-family: 'Quicksand', sans-serif;
  font-size: 20px;
  color: #111827;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.page-subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #6b7280;
  margin: 0;
}

/* builder layout */
.builder-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.sidebar {
  width: 280px;
  border-right: 1px solid #e5e7eb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  background-color: #ffffff;
}

.section-label {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 8px;
}

.hint-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  color: #9ca3af;
  margin: 0 0 12px 0;
}

.accordion {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: #fafafa;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
}

.arrow-icon {
  transition: transform 0.2s ease;
}

.arrow-icon.rotate {
  transform: rotate(180deg);
}

.accordion-content {
  padding: 6px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background: #ffffff;
}

.widget-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px;
  border-radius: 6px;
  cursor: grab;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #4b5563;
}

.widget-item:hover {
  background: #f3f4f6;
}

.drag-handle img {
  width: 12px;
}

.widget-icon-bg {
  width: 24px;
  height: 24px;
  background: #eef2f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* canvas grid */
.canvas-area {
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(14, 1fr);
  gap: 6px;
  width: 100%;
  height: 100%;
}

.grid-cell {
  background-color: #f3f4f6;
  border-radius: 4px;
}

/* drag preview */
.drag-preview {
  background-color: #d1fae5;
  border: 1px solid #10b981;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  pointer-events: none;
}

.preview-content {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
}

.preview-content .drag-icon {
  width: 20px;
  height: 20px;
}

.preview-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #065f46;
}

/* final widgets */
.widget-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  z-index: 10;
  cursor: grab;
}

.widget-card:active {
  cursor: grabbing;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border-bottom: 1px solid #f3f4f6;
  background: white;
  position: relative;
}

.widget-title {
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  color: #6b7280;
}

.widget-actions {
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.2s;
}

.widget-card:hover .widget-actions {
  opacity: 1;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.action-btn:hover {
  background-color: #f3f4f6;
}

.action-btn img {
  width: 16px;
  height: 16px;
}

.widget-body {
  flex: 1;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.widget-value {
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #111827;
}

.widget-drag-icon {
  width: 16px;
  height: 16px;
  opacity: 0;
  transition: opacity 0.2s;
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 5;
  pointer-events: none;
}

.widget-card:hover .widget-drag-icon {
  opacity: 0.5;
}

/* footer */
.footer-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 10px 40px;
  border-top: 1px solid #e5e7eb;
  background: #fafafa;
}

/* modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.custom-modal {
  background: white;
  width: 450px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn img {
  width: 14px;
  height: 14px;
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

.unsaved-footer {
  justify-content: flex-end;
  gap: 12px;
}

.discard-btn {
  color: #ef4444 !important;
  border-color: #ef4444 !important;
}
</style>