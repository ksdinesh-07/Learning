<template>

    <div class="home">
        <h1>E-com</h1>
        <p class="tag_line"Discover our products></p>
        <product_grid_page />
    </div>

</template>

<script setup >

    import product_grid_page from '@/components/product_grid_page.vue';

</script>

<style scoped>

    .home {
    padding: 10px 0;
    }

    h1 {
    margin: 0 0 4px 0;
    font-size: 26px;
    }

    .tag_line {
    color: #888;
    margin: 0 0 20px 0;
    font-size: 14px;
    }

</style>