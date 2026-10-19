<template>

  <div class="page">

    <app_header />
    <product_grid />
    <cart_drawer />

  </div>

</template>


<script setup>

  import product_grid from './components/product_grid.vue';
  import {reactive,provide,ref,watch} from 'vue'
  import app_header from './components/app_header.vue';
  import cart_drawer from './components/cart_drawer.vue';

  //load cart from localstorage if it exists
  const saved_cart=localStorage.getItem('cart')
  const initial_items=saved_cart?JSON.parse(saved_cart) : []

  //cart state from localstorage
  //cart -reactive object that all component can share
  const cart=reactive({
    items: initial_items
  })

  //is the cart drawer is open?
  const cart_open=ref(false)

  //watch the cart items and save
  watch(()=>cart.items,(new_items)=>{
    localStorage.setItem('cart',JSON.stringify(new_items))
    console.log("cart saved to localStorage",new_items),
    {deep:true}
  })


  provide('cart',cart)
  provide('cart_open',cart_open)

</script>

<style scoped>

  .page {
    padding: 20px;
    font-family: sans-serif;
    max-width: 1000px;
    margin: 0 auto;
  }

</style>