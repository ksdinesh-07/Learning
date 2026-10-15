<template>

  <div class="page">

    <app_header />
    <product_grid />

  </div>

</template>


<script setup>

  import product_grid from './components/product_grid.vue';
  import {reactive,provide} from 'vue'
  import app_header from './components/app_header.vue';
  import cart_drawer from './components/cart_drawer.vue';

  const cart=reactive({
    items:[]
  })

  provide('cart',cart)

</script>

<style scoped>

  .page {
    padding: 20px;
    font-family: sans-serif;
    max-width: 1000px;
    margin: 0 auto;
  }

</style>