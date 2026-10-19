<script setup>
import { defineAsyncComponent } from "vue"

const Product_grid_async = defineAsyncComponent(() =>
  import("./product_grid_async.vue")
)
</script>

<template>
  <Suspense>
    <template #default>
      <Product_grid_async />
    </template>

    <template #fallback>
      <div class="loading">
        <p>Loading products... ⏳</p>
      </div>
    </template>
  </Suspense>
</template>

<style scoped>

    .loading {
    text-align: center;
    padding: 40px;
    color: #888;
    font-size: 15px;
    }

</style>