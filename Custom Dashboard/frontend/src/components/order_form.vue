<template>
  <div class="modal-overlay">
    <div class="modal-content">

      <!-- header -->
      <div class="modal-header">
        <h3>Create order</h3>
        <button class="close-btn" @click="$emit('close')">
          <img src="../assets/close.svg" alt="close" class="close-icon">
        </button>
      </div>

      <!-- form -->
      <div>
        <h4>Customer Information</h4>
        
        <div class="row">
          <div class="col" @input="first_name = $event.target.value">
            <hlx-input label-value="First name *" type="text" :label-animation="true" />
          </div>
          <div class="col" @input="email = $event.target.value">
            <hlx-input label-value="Email id *" type="text" :label-animation="true" />
          </div>
        </div>

        <div class="row">
          <div class="col" @input="last_name = $event.target.value">
            <hlx-input label-value="Last name *" type="text" :label-animation="true" />
          </div>
          <div class="col" @input="phone = $event.target.value">
            <hlx-input label-value="Phone number *" type="text" :label-animation="true" />
          </div>
        </div>

        <div class="row">
          <div class="col full-width" @input="address = $event.target.value">
            <hlx-input label-value="Street Address *" type="text" :label-animation="true" />
          </div>
        </div>

        <div class="row">
          <div class="col" @input="city = $event.target.value">
            <hlx-input label-value="City *" type="text" :label-animation="true" />
          </div>
          <div class="col" @input="state = $event.target.value">
            <hlx-input label-value="State / Province *" type="text" :label-animation="true" />
          </div>
        </div>

        <div class="row">
          <div class="col" @input="postal_code = $event.target.value">
            <hlx-input label-value="Postal code *" type="text" :label-animation="true" />
          </div>
          <div class="col">
            <!-- Dropdowns use v-model -->
            <hlx-select 
              v-model:name="country_name"
              v-model:value="country"
              :options="countries" 
              :label="'name'" 
              :prop-value="'value'"
              :placeholder-value="'Country *'" 
              :label-animation="true"
            />
          </div>
        </div>

        <h4 style="margin-top: 20px;">Order Information</h4>

        <div class="row">
          <div class="col full-width">
            <hlx-select 
              v-model:name="product_name"
              v-model:value="product"
              :options="products" 
              :label="'name'" 
              :prop-value="'value'"
              :placeholder-value="'Choose product *'" 
              :label-animation="true"
            />
          </div>
        </div>

        <div class="row">
          <div class="col" @input="quantity = $event.target.value">
            <hlx-input label-value="Quantity *" type="number" :label-animation="true" />
          </div>
          <div class="col" @input="unit_price = $event.target.value">
            <hlx-input label-value="Unit price *" type="number" :label-animation="true" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="readonly-wrapper">
              <label class="static-label">Total amount *</label>
              <!-- Auto calculation here -->
              <input type="text" :value="'$ ' + (Number(quantity) * Number(unit_price)).toFixed(2)" disabled class="readonly-input" />
            </div>
          </div>
          <div class="col">
            <hlx-select 
              v-model:name="status_name"
              v-model:value="status"
              :options="statuses" 
              :label="'name'" 
              :prop-value="'value'"
              :placeholder-value="'Status *'" 
              :label-animation="true"
            />
          </div>
        </div>

        <div class="row">
          <div class="col full-width">
            <hlx-select 
              v-model:name="created_by_name"
              v-model:value="created_by"
              :options="users" 
              :label="'name'" 
              :prop-value="'value'"
              :placeholder-value="'Created by * '"
              :label-animation="true"
            />
          </div>
        </div>

        <div class="form-actions">
          <hlx-button @click.native="$emit('close')">Cancel</hlx-button>
          <hlx-button class="primary" @click.native="submit_form">Submit</hlx-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const emit = defineEmits(['close', 'saved'])

const first_name = ref('')
const last_name = ref('')
const email = ref('')
const phone = ref('')
const address = ref('')
const city = ref('')
const state = ref('')
const postal_code = ref('')
const quantity = ref(1)
const unit_price = ref(90)

const country = ref('')
const country_name = ref('')
const product = ref('')
const product_name = ref('')
const status = ref('')
const status_name = ref('')
const created_by = ref('')
const created_by_name = ref('')

const countries = [
  { name: "United States", checked: false, disabled: false, value: "United States" },
  { name: "Canada", checked: false, disabled: false, value: "Canada" },
  { name: "Australia", checked: false, disabled: false, value: "Australia" },
  { name: "Singapore", checked: false, disabled: false, value: "Singapore" },
  { name: "Hong Kong", checked: false, disabled: false, value: "Hong Kong" }
]

const products = [
  { name: "VoIP Corporate Package", checked: false, disabled: false, value: "VoIP Corporate Package" },
  { name: "Business Internet 500 Mbps", checked: false, disabled: false, value: "Business Internet 500 Mbps" },
  { name: "Fiber Internet 1 Gbps", checked: false, disabled: false, value: "Fiber Internet 1 Gbps" },
  { name: "5G Unlimited Mobile Plan", checked: false, disabled: false, value: "5G Unlimited Mobile Plan" },
  { name: "Fiber Internet 300 Mbps", checked: false, disabled: false, value: "Fiber Internet 300 Mbps" }
]

const statuses = [
  { name: "Pending", checked: false, disabled: false, value: "Pending" },
  { name: "In Progress", checked: false, disabled: false, value: "In Progress" },
  { name: "Completed", checked: false, disabled: false, value: "Completed" }
]

const users = [
  { name: "Mr. Michael Harris", checked: false, disabled: false, value: "Mr. Michael Harris" },
  { name: "Mr. Ryan Cooper", checked: false, disabled: false, value: "Mr. Ryan Cooper" },
  { name: "Ms. Olivia Carter", checked: false, disabled: false, value: "Ms. Olivia Carter" },
  { name: "Mr. Lucas Martin", checked: false, disabled: false, value: "Mr. Lucas Martin" },
  { name: "Jordan Ray", checked: false, disabled: false, value: "Jordan Ray" }
]

const submit_form = async () => {
  const payload = {
    first_name: first_name.value,
    last_name: last_name.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    city: city.value,
    state: state.value,
    postal_code: postal_code.value,
    quantity: Number(quantity.value) || 1,
    unit_price: Number(unit_price.value) || 0,
    country: country.value,
    product: product.value,
    status: status.value,
    created_by: created_by.value,
    total_amount: (Number(quantity.value) * Number(unit_price.value)) || 0
  }

  console.log("Sending payload:", payload)

  // Validation
  if (!payload.first_name || !payload.last_name || !payload.email || !payload.country || !payload.product || !payload.status || !payload.created_by) {
    alert("Please fill in all required fields and select all dropdowns!");
    return;
  }

  try {
    await axios.post('http://localhost:3000/api/orders', payload)
    emit('saved')
  } catch (error) {
    console.error(error)
    alert('Failed to create order.')
  }
}
</script>

<style scoped>

.modal-overlay {
  position: fixed; top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5); 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  z-index: 1000;
}
.modal-content {
  background: white; 
  width: 100%; 
  max-width: 750px; 
  border-radius: 8px; 
  padding: 24px;
  max-height: 90vh;
  overflow-y: auto;
}
.modal-header { 
  display: flex; 
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 24px; 
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}
.modal-header h3 {
  margin: 0;
  font-family: 'Quicksand', sans-serif !important;
  font-size: 18px;
  color: #333;
}
h4 {
  font-family: 'Quicksand', sans-serif !important;
  font-size: 14px;
  color: #333;
  margin-bottom: 16px;
  margin-top: 0;
}
.close-btn { 
  background: none; 
  border: none; 
  cursor: pointer; 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
}
.close-icon {
  width: 16px;  
  height: 16px;
  object-fit: contain;
}
.row { 
  display: flex; 
  gap: 16px; 
  margin-bottom: 16px;
}
.col { 
  flex: 1; 
  display: flex;
  flex-direction: column;
}
.full-width {
  flex: 100%;
}
.readonly-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}
.static-label {
  position: absolute;
  top: -8px;
  left: 12px;
  background: white;
  padding: 0 4px;
  font-size: 11px;
  color: #999;
  z-index: 1;
}
.readonly-input {
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  background: #f9fafb;
  color: #333;
  font-family: 'Open Sans', sans-serif !important;
  font-size: 14px;
  outline: none;
}
:deep(.hlx-select) {
  color: #333333 !important;
}
:deep(.hlx-select .hlx-select-label),
:deep(.hlx-select label) {
  color: #6b7280 !important; 
  background: white !important;
  padding: 0 4px !important;
}
.form-actions { 
  display: flex; 
  justify-content: flex-end; 
  gap: 12px; 
  margin-top: 32px; 
  padding-top: 16px;
  border-top: 1px solid #eee;
}
</style>