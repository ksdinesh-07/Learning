<template>

  <div>

    <div class="view-toggle">

      <button :class="{ active: current_view === product_card }" @click="current_view = product_card">
        Grid
      </button>
      <button :class="{ active: current_view === product_list }" @click="current_view = product_list">
        List
      </button>

    </div>

    <KeepAlive>
      <component :is="current_view" :products="products" @add-to-cart="handle_add_to_cart"/>
    </KeepAlive>

  </div>

</template>


<script setup>

    import { shallowRef } from 'vue';
    import product_card from './product_card.vue';
    import product_list from './product_list.vue';
    import { use_cart } from '@/composables/use_cart.js';
    import { API_BASE } from "@/composables/use_fetch.js"

    //top level await - makes them await
    //suspense will wait for this to resolve before rendering
    // const response=await fetch('http://localhost:3000/api/products')
    // const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000"
    const response = await fetch(`${API_BASE}/api/products`)
    if(!response.ok){
        throw new Error(`HTTP ${response.status}`)
    }
    const json=await response.json()
    const products=shallowRef(json.data)

    //view toggle
    const current_view=shallowRef(product_card)

    //card
    const {add_product}=use_cart()

    function handle_add_to_cart(product_id){
        let found=null
        for (let i=0;i<products.value.length;i++){
            if(products.value[i].id===product_id){
                found=products.value[i]
                break
            }
        }
        if(found){
            add_product(found)
        }
    }

</script>

<style scoped>

    .view-toggle {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
    }

    .view-toggle button {
    padding: 6px 14px;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    }

    .view-toggle button.active {
    background: #42b883;
    color: #fff;
    border-color: #42b883;
    }

</style>