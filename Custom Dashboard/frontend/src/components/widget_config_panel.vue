<template>
  <div class="config-panel">
    <div class="config-header">
      <h3>Widget configuration</h3>
      <button class="close-config" @click="$emit('close')">✕</button>
    </div>
    
    <div class="config-tabs">
      <button 
        :class="['tab-btn', { active: active_tab === 'data' }]" 
        @click="active_tab = 'data'"
      >
        Data
      </button>
      <button 
        :class="['tab-btn', { active: active_tab === 'styling' }]" 
        @click="active_tab = 'styling'"
      >
        Styling
      </button>
    </div>

    <div class="config-body">
      
      <!-- DATA TAB -->
      <div v-show="active_tab === 'data'">
        
        <div class="input-group">
          <label>Widget title *</label>
          <input v-model="local_widget.title" type="text" class="custom-input" :class="{ 'has-error': errors.title }" />
          <span class="error-text" :class="{ 'has-error': errors.title }">Please fill the field</span>
        </div>

        <div class="input-group">
          <hlx-select 
            v-model:value="local_widget.type"
            :key="'type-' + local_widget.id"
            :options="widget_type_options"
            :label="'name'"
            :prop-value="'value'"
            placeholder-value="Widget type *"
            :label-animation="true"
          />
        </div>

        <div class="input-group">
          <label>Description</label>
          <textarea v-model="local_widget.description" class="custom-input textarea"></textarea>
        </div>

        <h4 class="config-section-title">Widget size</h4>
        <div class="row-group">
          <div class="input-group half">
            <label>Width (Cols) *</label>
            <input v-model.number="local_widget.w" type="number" class="custom-input" :class="{ 'has-error': errors.w }" />
          </div>
          <div class="input-group half">
            <label>Height (Rows) *</label>
            <input v-model.number="local_widget.h" type="number" class="custom-input" :class="{ 'has-error': errors.h }" />
          </div>
        </div>

        <h4 class="config-section-title">Data setting</h4>

        <!-- TABLE SETTINGS -->
        <template v-if="local_widget.type === 'table'">
          <div class="input-group">
            <hlx-multi-select
              :pre-value="local_widget.table_columns"
              :required="true"
              :options="column_options"
              :placeholder="'Choose columns *'"
              :label-animation="true"
              :prop-value="'value'"
              :label="'name'"
              @selected-array="(selected) => local_widget.table_columns = selected.map(item => item.value || item)"
            ></hlx-multi-select>
          </div>

          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.table_sort"
              :key="'sort-' + local_widget.id"
              :options="sort_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Sort by"
              :label-animation="true"
            />
          </div>

          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.table_pagination"
              :key="'page-' + local_widget.id"
              :options="pagination_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Pagination"
              :label-animation="true"
            />
          </div>

          <div class="input-group checkbox-group">
            <hlx-checkbox v-model:checked="local_widget.table_apply_filter" label="Apply filter (Pending)" />
          </div>
        </template>

        <!-- CHART SETTINGS -->
        <template v-else-if="['bar', 'line', 'area', 'scatter'].includes(local_widget.type)">
          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.x_axis"
              :key="'xaxis-' + local_widget.id"
              :options="axis_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Choose X - axis data"
              :label-animation="true"
            />
          </div>

          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.y_axis"
              :key="'yaxis-' + local_widget.id"
              :options="axis_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Choose Y - axis data"
              :label-animation="true"
            />
          </div>

          <div class="input-group checkbox-group">
            <hlx-checkbox v-model:checked="local_widget.show_data_labels" label="Show data label" />
          </div>
        </template>

        <!-- PIE CHART SETTINGS -->
        <template v-else-if="local_widget.type === 'pie'">
          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.chart_data"
              :key="'chartdata-' + local_widget.id"
              :options="chart_data_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Choose chart data *"
              :label-animation="true"
            />
          </div>
          <div class="input-group checkbox-group">
            <hlx-checkbox v-model:checked="local_widget.show_legend" label="Show legend" />
          </div>
        </template>

        <!-- KPI SETTINGS -->
        <template v-else-if="local_widget.type === 'kpi'">
          
          <!-- Select Metric -->
          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.metric"
              :key="'metric-' + local_widget.id"
              :options="metric_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Select metric *"
              :label-animation="true"
            />
          </div>

          <!-- Aggregation -->
          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.aggregation"
              :key="'agg-' + local_widget.id"
              :options="aggregation_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Aggregation *"
              :label-animation="true"
            />
          </div>

          <!-- Data Format -->
          <div class="input-group">
            <hlx-select 
              v-model:value="local_widget.data_format"
              :key="'format-' + local_widget.id"
              :options="format_options"
              :label="'name'"
              :prop-value="'value'"
              placeholder-value="Data format *"
              :label-animation="true"
            />
          </div>

          <!-- Decimal Precision -->
          <div class="input-group">
            <label>Decimal Precision *</label>
            <input v-model.number="local_widget.precision" type="number" class="custom-input" />
          </div>

        </template>

      </div>

      <!-- STYLING TAB -->
      <div v-show="active_tab === 'styling'">
        <div class="input-group">
          <label>Font size (px)</label>
          <input v-model.number="local_widget.font_size" type="number" class="custom-input" />
        </div>

        <div class="input-group">
          <label>Header background</label>
          <div class="color-picker-group">
            <input type="color" v-model="local_widget.header_bg" class="color-swatch" />
            <input type="text" v-model="local_widget.header_bg" class="custom-input" />
          </div>
        </div>
      </div>

    </div>

    <div class="config-footer">
      <hlx-button @click.native="$emit('close')">Cancel</hlx-button>
      <hlx-button class="primary" @click.native="save">Save</hlx-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  widget: { type: Object, required: true }
})

const emit = defineEmits(['close', 'save'])

const active_tab = ref('data')

const local_widget = ref({ 
  id: props.widget.id,
  title: props.widget.title || 'Untitled',
  type: props.widget.type || 'kpi', 
  description: props.widget.description || '',
  w: props.widget.w || 4,
  h: props.widget.h || 4,
  
  metric: props.widget.metric || '',
  aggregation: props.widget.aggregation || '',
  data_format: props.widget.data_format || 'number', // Default to 'number'
  precision: props.widget.precision !== undefined ? props.widget.precision : 0,
  
  table_columns: props.widget.table_columns || ['customer_name', 'product', 'total_amount'],
  table_sort: props.widget.table_sort || 'asc',
  table_pagination: props.widget.table_pagination || 5,
  table_apply_filter: props.widget.table_apply_filter || false,

  x_axis: props.widget.x_axis || '',
  y_axis: props.widget.y_axis || '',
  show_data_labels: props.widget.show_data_labels || false,

  chart_data: props.widget.chart_data || '',
  show_legend: props.widget.show_legend !== undefined ? props.widget.show_legend : true,

  font_size: props.widget.font_size || 14,
  header_bg: props.widget.header_bg || '#D8D8D8'
})

const errors = ref({
  title: false, w: false, h: false
})

const widget_type_options = [
  { name: 'KPI', value: 'kpi' },
  { name: 'Bar Chart', value: 'bar' },
  { name: 'Line Chart', value: 'line' },
  { name: 'Pie Chart', value: 'pie' },
  { name: 'Area Chart', value: 'area' },
  { name: 'Scatter Plot', value: 'scatter' },
  { name: 'Table', value: 'table' }
]

// ✅ UPDATED: All fields in Select Metric
const metric_options = [
  { name: 'Customer ID', value: 'customer_id' },
  { name: 'Customer name', value: 'customer_name' },
  { name: 'Email id', value: 'email_id' },
  { name: 'Address', value: 'address' },
  { name: 'Order date', value: 'order_date' },
  { name: 'Product', value: 'product' },
  { name: 'Created by', value: 'created_by' },
  { name: 'Status', value: 'status' },
  { name: 'Total amount', value: 'total_amount' },
  { name: 'Unit price', value: 'unit_price' },
  { name: 'Quantity', value: 'quantity' }
]

// ✅ UPDATED: Sum, Average, Count
const aggregation_options = [
  { name: 'Sum', value: 'sum' },
  { name: 'Average', value: 'average' },
  { name: 'Count', value: 'count' }
]

// ✅ UPDATED: Number, Currency
const format_options = [
  { name: 'Number', value: 'number' },
  { name: 'Currency', value: 'currency' }
]

const column_options = [
  { name: 'Customer ID', value: 'customer_id' },
  { name: 'Customer name', value: 'customer_name' },
  { name: 'Email id', value: 'email_id' },
  { name: 'Address', value: 'address' },
  { name: 'Order date', value: 'order_date' },
  { name: 'Product', value: 'product' },
  { name: 'Created by', value: 'created_by' },
  { name: 'Status', value: 'status' },
  { name: 'Total amount', value: 'total_amount' },
  { name: 'Unit price', value: 'unit_price' },
  { name: 'Quantity', value: 'quantity' }
]

const sort_options = [
  { name: 'Ascending', value: 'asc' },
  { name: 'Descending', value: 'desc' }
]

const pagination_options = [
  { name: '5', value: 5 },
  { name: '10', value: 10 },
  { name: '15', value: 15 }
]

const axis_options = [
  { name: 'Order date', value: 'createdAt' },
  { name: 'Product', value: 'product' },
  { name: 'Status', value: 'status' },
  { name: 'Total amount', value: 'total_amount' },
  { name: 'Unit price', value: 'unit_price' },
  { name: 'Quantity', value: 'quantity' }
]

const chart_data_options = [
  { name: 'Product', value: 'product' },
  { name: 'Quantity', value: 'quantity' },
  { name: 'Unit price', value: 'unit_price' },
  { name: 'Total amount', value: 'total_amount' },
  { name: 'Status', value: 'status' },
  { name: 'Created by', value: 'created_by' }
]

const save = () => {
  Object.keys(errors.value).forEach(key => errors.value[key] = false)
  let has_error = false

  if (!local_widget.value.title) { errors.value.title = true; has_error = true }
  if (!local_widget.value.w) { errors.value.w = true; has_error = true }
  if (!local_widget.value.h) { errors.value.h = true; has_error = true }

  if (has_error) return

  emit('save', local_widget.value)
}
</script>

<style scoped>
/* Config Panel Layout */
.config-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  border-left: 1px solid #e5e7eb;
  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  z-index: 100;
}

/* Config Header */
.config-header {
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.config-header h3 {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
}

.close-config {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #9ca3af;
}

/* Tabs */
.config-tabs {
  display: flex;
  padding: 10px 24px 0;
  border-bottom: 1px solid #e5e7eb;
  gap: 16px;
}

.tab-btn {
  background: none;
  border: none;
  padding: 10px 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #6b7280;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}

.tab-btn.active {
  color: #10b981;
  border-bottom: 2px solid #10b981;
}

/* Config Body */
.config-body {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.input-group {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 16px;
}

.row-group {
  display: flex;
  gap: 16px;
}

.row-group .half {
  flex: 1;
}

.config-section-title {
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: #374151;
  margin: 12px 0 4px 0;
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 8px;
}

.config-footer {
  padding: 16px 24px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: #fafafa;
}

/* Input Labels */
.input-group label {
  position: absolute;
  top: -8px;
  left: 10px;
  background: white;
  padding: 0 4px;
  font-size: 11px;
  color: #6b7280;
  font-family: 'Open Sans', sans-serif;
  z-index: 10;
}

/* Standard Inputs */
.custom-input {
  height: 40px;
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
}

.custom-input:focus {
  border-color: #10b981;
}

textarea.custom-input {
  height: 80px;
  padding: 10px 12px;
  resize: none;
}

.custom-input.has-error {
  border-color: #ff4d4f;
}

/* Checkbox Group */
.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.checkbox-group label {
  position: static;
  background: none;
  padding: 0;
  font-size: 14px;
  color: #374151;
}

/* Color Picker Group */
.color-picker-group {
  display: flex;
  gap: 8px;
}

.color-swatch {
  width: 44px;
  height: 40px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  padding: 0;
}

/* Error Text */
.error-text {
  color: #ff4d4f;
  font-size: 11px;
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  bottom: -18px;
  left: 0;
  visibility: hidden;
}

.error-text.has-error {
  visibility: visible;
}
</style>