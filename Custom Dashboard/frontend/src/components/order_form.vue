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
        <h4 class="order-heading">Customer Information</h4>

        <div class="row">
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="first_name" 
                label-value="First name"
                :required="true"
                :label-animation="true"
                :custom-error="errors.first_name"
                :display-error="errors.first_name"
                :custom-error-message="errors.first_name ? 'Please fill the field' : ''"
              />
            </div>
          </div>
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="email" 
                label-value="Email id"
                :required="true"
                :label-animation="true"
                :custom-error="errors.email"
                :display-error="errors.email"
                :custom-error-message="errors.email ? 'Please fill the field' : ''"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="last_name" 
                label-value="Last name"
                :required="true"
                :label-animation="true"
                :custom-error="errors.last_name"
                :display-error="errors.last_name"
                :custom-error-message="errors.last_name ? 'Please fill the field' : ''"
              />
            </div>
          </div>
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="phone" 
                label-value="Phone number"
                :required="true"
                :label-animation="true"
                :custom-error="errors.phone"
                :display-error="errors.phone"
                :custom-error-message="errors.phone ? 'Please fill the field' : ''"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col full-width">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="address" 
                label-value="Street Address"
                :required="true"
                :label-animation="true"
                :custom-error="errors.address"
                :display-error="errors.address"
                :custom-error-message="errors.address ? 'Please fill the field' : ''"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="city" 
                label-value="City"
                :required="true"
                :label-animation="true"
                :custom-error="errors.city"
                :display-error="errors.city"
                :custom-error-message="errors.city ? 'Please fill the field' : ''"
              />
            </div>
          </div>
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="state" 
                label-value="State / Province"
                :required="true"
                :label-animation="true"
                :custom-error="errors.state"
                :display-error="errors.state"
                :custom-error-message="errors.state ? 'Please fill the field' : ''"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="postal_code" 
                label-value="Postal code"
                :required="true"
                :label-animation="true"
                :custom-error="errors.postal_code"
                :display-error="errors.postal_code"
                :custom-error-message="errors.postal_code ? 'Please fill the field' : ''"
              />
            </div>
          </div>
          <div class="col">
            <div class="field-wrapper">
              <!-- Select with manual error message -->
              <hlx-select 
                v-model:value="country"
                :options="countries"
                :label="'name'"
                :prop-value="'value'"
                placeholder-value="Country"
                :required="true"
                :label-animation="true"
                :error="errors.country"
              />
              <span class="manual-error" v-if="errors.country">Please fill the field</span>
            </div>
          </div>
        </div>

        <h4 class="order-heading">Order Information</h4>

        <div class="row">
          <div class="col full-width">
            <div class="field-wrapper">
              <hlx-select 
                v-model:value="product"
                :options="products"
                :label="'name'"
                :prop-value="'value'"
                placeholder-value="Choose product"
                :required="true"
                :label-animation="true"
                :error="errors.product"
              />
              <span class="manual-error" v-if="errors.product">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="quantity" 
                type="number"
                label-value="Quantity"
                :required="true"
                :label-animation="true"
                :custom-error="errors.quantity"
                :display-error="errors.quantity"
                :custom-error-message="errors.quantity ? 'Quantity must be at least 1' : ''"
              />
            </div>
          </div>
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                v-model:value="unit_price" 
                type="number"
                label-value="Unit price"
                :required="true"
                :label-animation="true"
                :custom-error="errors.unit_price"
                :display-error="errors.unit_price"
                :custom-error-message="errors.unit_price ? 'Please enter a valid unit price' : ''"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="field-wrapper">
              <hlx-input 
                :pre-val="'$ ' + total_amount.toFixed(2)" 
                label-value="Total amount"
                :required="true"
                :disabled="true"
                :label-animation="true"
              />
            </div>
          </div>
          <div class="col">
            <div class="field-wrapper">
              <hlx-select 
                v-model:value="status"
                :options="statuses"
                :label="'name'"
                :prop-value="'value'"
                placeholder-value="Status"
                :required="true"
                :label-animation="true"
                :error="errors.status"
              />
              <span class="manual-error" v-if="errors.status">Please fill the field</span>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col full-width">
            <div class="field-wrapper">
              <hlx-select 
                v-model:value="created_by"
                :options="users"
                :label="'name'"
                :prop-value="'value'"
                placeholder-value="Created by"
                :required="true"
                :label-animation="true"
                :error="errors.created_by"
              />
              <span class="manual-error" v-if="errors.created_by">Please fill the field</span>
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

const submit_form = async () => {
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
        if (props.edit_data) {
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
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  z-index: 1000;
  overflow: auto;
}

.modal-content {
  background: #fff;
  width: 720px;
  min-width: 0;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  border-radius: 5px;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  overflow: hidden;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 10px 14px;
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
  padding: 3px;
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
  gap: 0;
  padding: 6px 14px 0;
  overflow-y: auto;
  min-height: 0;
}

.form-body h4 {
  font-weight: 600;
  font-family: 'Quicksand', sans-serif;
  font-size: 14px;
  color: #333;
  margin: 2px 0 5px;
}

.row {
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 2px;
}

.col {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.full-width {
  flex: 1 1 100%;
  width: 100%;
}

.field-wrapper {
  min-height: 54px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.manual-error {
  color: #ff4d4f;
  font-size: 10px;
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  bottom: 2px;
  left: 0;
  z-index: 2;
}

.order-heading {
  margin-top: 2px !important;
  padding-bottom: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  margin-top: 0;
  padding: 8px 0;
  border-top: 1px solid #eee;
}

/* Add a little space above entered values */
:deep(hlx-input input) {
  padding-top: 3px !important;
  line-height: normal;
}

:deep(input::placeholder) {
  transform: translateY(2px);
}

:deep(hlx-input input) {
  padding-top: 6px !important;
  box-sizing: border-box;
}


:deep(.input-field.small input) {
  padding-top: 12px !important;
}


</style>
