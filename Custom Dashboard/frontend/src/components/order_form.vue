<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ props.edit_data ? 'Edit order' : 'Create order' }}</h3>        
        <button class="close-btn" @click="emit('close')">
          <img src="../assets/close.svg" alt="close" class="close-icon">
        </button>
      </div>

      <div class="form-body">
        <h4>Customer Information</h4>

        <div class="row">
          <div class="col">
            <div class="input-group">
              <label>First name *</label>
              <input 
                v-model="first_name" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.first_name }"
              />
              <span class="error-text" :class="{ 'has-error': errors.first_name }">Please fill the field</span>
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <label>Email id *</label>
              <input 
                v-model="email" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.email }"
              />
              <span class="error-text" :class="{ 'has-error': errors.email }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="input-group">
              <label>Last name *</label>
              <input 
                v-model="last_name" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.last_name }"
              />
              <span class="error-text" :class="{ 'has-error': errors.last_name }">Please fill the field</span>
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <label>Phone number *</label>
              <input 
                v-model="phone" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.phone }"
              />
              <span class="error-text" :class="{ 'has-error': errors.phone }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col full-width">
            <div class="input-group">
              <label>Street Address *</label>
              <input 
                v-model="address" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.address }"
              />
              <span class="error-text" :class="{ 'has-error': errors.address }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="input-group">
              <label>City *</label>
              <input 
                v-model="city" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.city }"
              />
              <span class="error-text" :class="{ 'has-error': errors.city }">Please fill the field</span>
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <label>State / Province *</label>
              <input 
                v-model="state" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.state }"
              />
              <span class="error-text" :class="{ 'has-error': errors.state }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="input-group">
              <label>Postal code *</label>
              <input 
                v-model="postal_code" 
                type="text" 
                class="custom-input" 
                :class="{ 'has-error': errors.postal_code }"
              />
              <span class="error-text" :class="{ 'has-error': errors.postal_code }">Please fill the field</span>
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <label>Country *</label>
              <select v-model="country" class="custom-input" :class="{ 'has-error': errors.country }">
                <option value="" disabled>Select Country</option>
                <option v-for="c in countries" :key="c.value" :value="c.value">{{ c.name }}</option>
              </select>
              <span class="error-text" :class="{ 'has-error': errors.country }">Please fill the field</span>
            </div>
          </div>
        </div>

        <h4 class="order-heading">Order Information</h4>

        <div class="row">
          <div class="col full-width">
            <div class="input-group">
              <label>Choose product *</label>
              <select v-model="product" class="custom-input" :class="{ 'has-error': errors.product }">
                <option value="" disabled>Select Product</option>
                <option v-for="p in products" :key="p.value" :value="p.value">{{ p.name }}</option>
              </select>
              <span class="error-text" :class="{ 'has-error': errors.product }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="input-group">
              <label>Quantity *</label>
              <input 
                v-model="quantity" 
                type="number" 
                class="custom-input" 
                :class="{ 'has-error': errors.quantity }"
              />
              <span class="error-text" :class="{ 'has-error': errors.quantity }">Quantity must be at least 1</span>
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <label>Unit price *</label>
              <input 
                v-model="unit_price" 
                type="number" 
                class="custom-input" 
                :class="{ 'has-error': errors.unit_price }"
              />
              <span class="error-text" :class="{ 'has-error': errors.unit_price }">Please enter a valid unit price</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="input-group">
              <label>Total amount *</label>
              <input 
                type="text" 
                :value="'$ ' + total_amount.toFixed(2)" 
                disabled 
                class="custom-input readonly-input"
              />
              <span class="error-text"></span>
            </div>
          </div>
          <div class="col">
            <div class="input-group">
              <label>Status *</label>
              <select v-model="status" class="custom-input" :class="{ 'has-error': errors.status }">
                <option value="" disabled>Select Status</option>
                <option v-for="s in statuses" :key="s.value" :value="s.value">{{ s.name }}</option>
              </select>
              <span class="error-text" :class="{ 'has-error': errors.status }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col full-width">
            <div class="input-group">
              <label>Created by *</label>
              <select v-model="created_by" class="custom-input" :class="{ 'has-error': errors.created_by }">
                <option value="" disabled>Select User</option>
                <option v-for="u in users" :key="u.value" :value="u.value">{{ u.name }}</option>
              </select>
              <span class="error-text" :class="{ 'has-error': errors.created_by }">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <hlx-button @click.native="emit('close')">Cancel</hlx-button>
          <hlx-button class="primary" @click.native="submit_form">
            {{ props.edit_data ? 'Save' : 'Submit' }}
          </hlx-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const props = defineProps({
  edit_data: { type: Object, default: null }
})

const emit = defineEmits(['close', 'saved'])

const first_name = ref(props.edit_data?.first_name || '')
const last_name = ref(props.edit_data?.last_name || '')
const email = ref(props.edit_data?.email || '')
const phone = ref(props.edit_data?.phone || '')
const address = ref(props.edit_data?.address || '')
const city = ref(props.edit_data?.city || '')
const state = ref(props.edit_data?.state || '')
const postal_code = ref(props.edit_data?.postal_code || '')
const quantity = ref(props.edit_data?.quantity || 1)
const unit_price = ref(props.edit_data?.unit_price || 0)
const country = ref(props.edit_data?.country || '')
const product = ref(props.edit_data?.product || '')
const status = ref(props.edit_data?.status || '')
const created_by = ref(props.edit_data?.created_by || '')
const has_submitted = ref(false)

const errors = ref({
    first_name: false, last_name: false, email: false, phone: false,
    address: false, city: false, state: false, postal_code: false,
    country: false, product: false, quantity: false, unit_price: false,
    status: false, created_by: false
})

const countries = [
    { name: 'United States', value: 'United States' },
    { name: 'Canada', value: 'Canada' },
    { name: 'Australia', value: 'Australia' },
    { name: 'Singapore', value: 'Singapore' },
    { name: 'Hong Kong', value: 'Hong Kong' }
]

const products = [
    { name: 'VoIP Corporate Package', value: 'VoIP Corporate Package' },
    { name: 'Business Internet 500 Mbps', value: 'Business Internet 500 Mbps' },
    { name: 'Fiber Internet 1 Gbps', value: 'Fiber Internet 1 Gbps' },
    { name: '5G Unlimited Mobile Plan', value: '5G Unlimited Mobile Plan' },
    { name: 'Fiber Internet 300 Mbps', value: 'Fiber Internet 300 Mbps' }
]

const statuses = [
    { name: 'Pending', value: 'Pending' },
    { name: 'In Progress', value: 'In Progress' },
    { name: 'Completed', value: 'Completed' }
]

const users = [
    { name: 'Mr. Michael Harris', value: 'Mr. Michael Harris' },
    { name: 'Mr. Ryan Cooper', value: 'Mr. Ryan Cooper' },
    { name: 'Ms. Olivia Carter', value: 'Ms. Olivia Carter' },
    { name: 'Mr. Lucas Martin', value: 'Mr. Lucas Martin' },
    { name: 'Jordan Ray', value: 'Jordan Ray' }
]

const total_amount = computed(() => {
    return (Number(quantity.value) || 0) * (Number(unit_price.value) || 0)
})

const validate_form = () => {
    let has_error = false
    Object.keys(errors.value).forEach(key => errors.value[key] = false)

    if (!first_name.value) { errors.value.first_name = true; has_error = true }
    if (!last_name.value) { errors.value.last_name = true; has_error = true }
    if (!email.value) { errors.value.email = true; has_error = true }
    if (!phone.value) { errors.value.phone = true; has_error = true }
    if (!address.value) { errors.value.address = true; has_error = true }
    if (!city.value) { errors.value.city = true; has_error = true }
    if (!state.value) { errors.value.state = true; has_error = true }
    if (!postal_code.value) { errors.value.postal_code = true; has_error = true }
    if (!country.value) { errors.value.country = true; has_error = true }
    if (!product.value) { errors.value.product = true; has_error = true }
    if (!quantity.value || quantity.value < 1) { errors.value.quantity = true; has_error = true }
    if (!unit_price.value || unit_price.value <= 0) { errors.value.unit_price = true; has_error = true }
    if (!status.value) { errors.value.status = true; has_error = true }
    if (!created_by.value) { errors.value.created_by = true; has_error = true }

    return has_error
}

const submit_form = async()=>{
    has_submitted.value = true
    if (validate_form()) return

    const payload = {
        first_name: first_name.value,
        last_name: last_name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        city: city.value,
        state: state.value,
        postal_code: postal_code.value,
        country: country.value,
        product: product.value,
        quantity: Number(quantity.value),
        unit_price: Number(unit_price.value),
        status: status.value,
        created_by: created_by.value,
        total_amount: total_amount.value
    }

    try {
      if (props.edit_data){
        await axios.put(`http://localhost:3000/api/orders/${props.edit_data._id}`, payload)
      } else {
        await axios.post('http://localhost:3000/api/orders', payload)
      }
      emit('saved')
    } catch (error) {
        console.error('Error', error)
        alert('Failed to save order.')
    }
}
</script>

<style scoped>

.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden; 
}

.modal-content {
  background: white;
  width: 680px;           
  min-width: 680px;       
  max-width: 95vw;        
  height: auto;           
  border-radius: 8px;
  padding: 20px 24px;   
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  font-weight: 600;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
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

.close-icon {
  width: 14px;
  height: 14px;
}

.form-body {
  display: flex;
  flex-direction: column;
  gap: 4px; 
}

.form-body h4 {
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  color: #333;
  margin: 0;
  margin-top: 6px; 
  margin-bottom: 4px;
}

.row {
  display: flex;
  gap: 16px; 
  width: 100%;
  align-items: flex-start;
}

.col {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.full-width {
  flex: 100%;
}

.input-group {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px; 
}

.input-group label {
  position: absolute;
  top: -8px; 
  left: 10px;
  background-color: white;
  padding: 0 4px;
  font-size: 11px;
  color: #6b7280;
  font-family: 'Open Sans', sans-serif;
  z-index: 10;
}

.custom-input {
  height: 36px; 
  padding: 0 12px;
  border: 1px solid #d1d5db;
  border-radius: 5px;
  font-size: 13px;
  font-family: 'Open Sans', sans-serif;
  color: #333;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s;
  background-color: white;
  padding-top: 2px; 
}

.custom-input:focus {
  border-color: #54BD95;
}

.custom-input.has-error {
  border-color: #ff4d4f;
}

.readonly-input {
  background: #f9fafb;
  color: #666;
}

/* error */
.error-text {
  color: #ff4d4f;
  font-size: 11px;
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  bottom: -16px; 
  left: 0;
  visibility: hidden; 
}

.error-text.has-error {
  visibility: visible; 
}

/* footer */
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px; 
  padding-top: 16px;
  border-top: 1px solid #eee;
}
</style>