<template>

  <div class="card">

        <img :src="product.image_url" :alt="product.product_name" />

        <h3>{{ product.product_name }}</h3>

        <p class="category">{{ product.category }}</p>

        <p class="price">
        ₹{{ product.price }}
        <span v-if="product.discount" class="discount">
            {{ product.discount }}% off
        </span>
        </p>

        <p class="rating">⭐ {{ product.rating }}</p>

        <p class="desc">{{ product.description }}</p>

        <button class="add-btn" @click="handle_add_click">Add to Cart</button>
        
  </div>
  
</template>

<script setup>

    const props=defineProps({
        product:{
            type:Object,
            required:true,
        }
    })

    const emit=defineEmits(['add-to-cart'])

    function handle_add_click(){
        emit('add-to-cart',props.product.id)
    }

</script>

<style scoped>

    .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 6px;
    }

    .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    }

    h3 {
    margin: 0;
    font-size: 16px;
    }

    .category {
    text-transform: uppercase;
    font-size: 11px;
    color: #888;
    margin: 0;
    }

    .price {
    font-weight: bold;
    margin: 0;
    }

    .discount {
    color: #d33;
    font-size: 12px;
    margin-left: 6px;
    }

    .rating {
    font-size: 13px;
    color: #555;
    margin: 0;
    }

    .desc {
    font-size: 12px;
    color: #666;
    margin: 0;
    }

</style>