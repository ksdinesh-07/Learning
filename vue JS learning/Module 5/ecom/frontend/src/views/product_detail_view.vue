<template>

      <div class="detail">
        <button class="back-btn" @click="go_back">← Back to products</button>

        <p v-if="loading">Loading product...</p>
        <p v-else-if="error" class="error">{{ error }}</p>

        <div v-else-if="product" class="product-layout">
        <div class="image-wrapper">
            <img :src="product.image_url" :alt="product.product_name" />
        </div>

        <div class="info">
            <p class="category">{{ product.category }}</p>
            <h1>{{ product.product_name }}</h1>

            <p class="rating">⭐ {{ product.rating }}</p>

            <p class="description">{{ product.description }}</p>

            <div class="price-row">
            <span class="price">₹{{ product.price }}</span>
            <span v-if="product.discount" class="discount">
                {{ product.discount }}% off
            </span>
            </div>

            <p class="stock" :class="{ out: product.stock === 0 }">
            {{ product.stock > 0 ? `${product.stock} in stock` : "Out of stock" }}
            </p>

            <div class="quantity-row">
            <span>Quantity:</span>
            <button @click="decrease_quantity">−</button>
            <span class="quantity">{{ quantity }}</span>
            <button @click="increase_quantity">+</button>
            </div>

            <button
            class="add-btn"
            :disabled="product.stock === 0"
            @click="add_to_cart"
            >
            {{ product.stock === 0 ? "Out of stock" : "Add to Cart" }}
            </button>
        </div>
        </div>

        <p v-else class="error">Product not found.</p>
    </div>

</template>


<script setup > 

    import {ref,computed,watch} from 'vue'
    import { useRouter,useRoute } from 'vue-router';
    import { use_fetch } from '@/composables/use_fetch.js';
    import { use_cart } from '@/composables/use_cart.js';


    const route=useRoute()
    const router=useRouter()
    const {add_product}=use_cart()

    //read the product from the url
    const product_id=computed(()=>Number(route.params.id))

    //fetch the product form the backend
    // const {data,loading,error} = use_fetch(  `http://localhost:3000/api/products/${product_id.value}`)
    const { data, loading, error } = use_fetch(`/api/products/${route.params.id}`)


    //product obj loaded(once)
    const product=computed(()=>{
        return data.value && data.value.data? data.value.data : null
    })

    //local quantity selector
    const quantity=ref(1)

    function increase_quantity(){
        quantity.value=quantity.value+1
    }

    function decrease_quantity(){
        if(quantity.value > 1){
            quantity.value=quantity.value - 1
        }
    }

    //add to cart
    function add_to_cart(){
        if(!product.value) return
        for (let i=0;i<quantity.value;i++){
            add_product(product.value)
        }
        //reset quantity after adding
        quantity.value=1
    }

    //back button
    function go_back(){
        router.push('/')
    }


</script>


<style scoped>

    .detail {
    padding: 10px 0;
    }

    .back-btn {
    background: none;
    border: none;
    color: #42b883;
    cursor: pointer;
    font-size: 14px;
    padding: 6px 0;
    margin-bottom: 16px;
    }

    .back-btn:hover {
    text-decoration: underline;
    }

    .error {
    color: #d33;
    }

    .product-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    }

    @media (max-width: 640px) {
    .product-layout {
        grid-template-columns: 1fr;
    }
    }

    .image-wrapper img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .info h1 {
    margin: 4px 0 12px 0;
    font-size: 24px;
    }

    .category {
    text-transform: uppercase;
    font-size: 12px;
    color: #888;
    margin: 0;
    }

    .rating {
    color: #555;
    font-size: 14px;
    margin: 8px 0;
    }

    .description {
    color: #444;
    line-height: 1.6;
    margin: 12px 0;
    }

    .price-row {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin: 16px 0 8px 0;
    }

    .price {
    font-size: 24px;
    font-weight: bold;
    }

    .discount {
    color: #d33;
    font-size: 14px;
    }

    .stock {
    font-size: 13px;
    color: #2c8c5a;
    margin: 4px 0 16px 0;
    }

    .stock.out {
    color: #d33;
    }

    .quantity-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
    font-size: 14px;
    }

    .quantity-row button {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    }

    .quantity {
    min-width: 24px;
    text-align: center;
    font-weight: bold;
    }

    .add-btn {
    padding: 12px 24px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    }

    .add-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    }

    .add-btn:hover:not(:disabled) {
    background: #369870;
    }

</style>