<template>

    <header class="header">
        <div class="left">
            <RouterLink to="/" class="logo">E-com</RouterLink>
            <nav class="nav">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/cart" class="nav-link">Cart</RouterLink>
            </nav>
        </div>
        <button class="cart-badge" @click="open_cart">🛒 {{ total_items }} </button>
    </header>

</template>


<script setup >

    import {inject} from 'vue'
    import { use_cart } from '@/composables/use_cart.js'

    //collect the cart data feom the app.vue
    // const cart=inject('cart')

    //get the cart open from the app.vue
    const cart_open=inject('cart_open')
    const {total_items}=use_cart()

    //total items
    // const total_items=computed(()=>{
    //     let sum=0;
    //     for(let i=0;i<cart.items.length;i++){
    //         sum=sum+cart.items[i].quantity
    //     }
    //     return sum
    // })

    //called when the user click the card badge
    function open_cart(){
        cart_open.value=true
    }

</script>


<style scoped>

    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eee;
    margin-bottom: 20px;
    padding-bottom: 8px;
    }

    .left {
    display: flex;
    align-items: center;
    gap: 24px;
    }

    .logo {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    text-decoration: none;
    }

    .logo:hover {
    color: #42b883;
    }

    .nav {
    display: flex;
    gap: 16px;
    }

    .nav-link {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    padding: 6px 0;
    border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
    color: #42b883;
    }

    .nav-link.router-link-exact-active {
    color: #42b883;
    border-bottom-color: #42b883;
    font-weight: bold;
    }
    .cart-badge {
    background: #42b883;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    }

    .cart-badge:hover {
    background: #369870;
    }

</style>