<template>
    
    <div class="cart-page">
        <h1>Your Cart</h1>

        <div class="empty" v-if="cart.items.length===0 ">
            <p>Your cart is empty</p>
            <button class="shop-btn" @click="go_to_shopping">Continue Shopping</button>
        </div>


    <div v-else  class="cart-content">

        <ul class="items">
            <li class="item" v-for="item in cart.items" :key="item.product_id">

                <div class="item-info">
                    <div class="item-name">{{item.product_name }}</div>
                    <div class="item-price">₹{{item.price }}</div>
                </div>

                <div class="item-controls">
                    <button @click="decrease(item.product_id)">−</button>
                    <span class="qty">{{ item.quantity }}</span>
                    <button @click="increase(item.product_id)">+</button>
                </div>

                <div class="item-total">₹{{ item.price * item.quantity }}</div>

                <button class="remove-btn" @click="remove_product(item.product_id)"title="Remove item">🗑</button>

            </li>
        </ul>

        <div class="summary">

            <div class="summary-row">
                <span>Items</span> <span>{{ total_items }}</span>
            </div>
            
            <div class="summary-row total">
                <span>Total</span> <span>₹{{ total_price }}</span>
            </div>
           
            <button class="checkout-btn" @click="go_to_checkout">Proceed to Checkout</button>
            <button class="continue-btn" @click="go_to_shopping">Continue Shopping</button>

        </div>

    </div>

    </div>


</template>

<script setup>

    import { useRouter } from 'vue-router';
    import { use_cart } from '@/composables/use_cart.js';

    const router=useRouter();

    const { cart, total_items, total_price, increase, decrease, remove_product } = use_cart()

    function go_to_checkout(){
        router.push('/checkout')
    }

    function go_to_shopping(){
        router.push('/')
    }

</script>

<style scoped>

    .cart-page {
    padding: 10px 0;
    }

    h1 {
    margin: 0 0 20px 0;
    font-size: 26px;
    }

    .empty {
    text-align: center;
    padding: 60px 20px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #eee;
    }

    .empty p {
    color: #888;
    margin-bottom: 20px;
    }

    .shop-btn,
    .continue-btn {
    padding: 10px 20px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    }

    .shop-btn:hover,
    .continue-btn:hover {
    background: #369870;
    }

    .cart-content {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 24px;
    }

    @media (max-width: 720px) {
    .cart-content {
        grid-template-columns: 1fr;
    }
    }

    .items {
    list-style: none;
    padding: 0;
    margin: 0;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #eee;
    }

    .item {
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    gap: 16px;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #f0f0f0;
    }

    .item:last-child {
    border-bottom: none;
    }

    .item-name {
    font-weight: bold;
    font-size: 15px;
    }

    .item-price {
    font-size: 12px;
    color: #555;
    margin-top: 2px;
    }

    .item-controls {
    display: flex;
    align-items: center;
    gap: 8px;
    }

    .item-controls button {
    width: 28px;
    height: 28px;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    }

    .qty {
    min-width: 24px;
    text-align: center;
    font-weight: bold;
    }

    .item-total {
    font-weight: bold;
    font-size: 15px;
    min-width: 70px;
    text-align: right;
    }

    .remove-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    opacity: 0.6;
    }

    .remove-btn:hover {
    opacity: 1;
    }

    .summary {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 20px;
    height: fit-content;
    }

    .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    }

    .summary-row.total {
    font-size: 18px;
    font-weight: bold;
    border-top: 1px solid #eee;
    padding-top: 12px;
    margin-top: 12px;
    margin-bottom: 20px;
    }

    .checkout-btn {
    width: 100%;
    padding: 12px;
    background: #226e47;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 8px;
    }

    .checkout-btn:hover {
    background: #226e47;
    }

    .continue-btn {
    width: 100%;
    padding: 10px;
    background: #fff;
    color: #2c8c5a;
    border: 1px solid #42b883;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    }

    .continue-btn:hover {
    background: #f0f8f4;
    }

</style>