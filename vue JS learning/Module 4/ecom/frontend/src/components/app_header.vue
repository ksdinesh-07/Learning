<template>

    <header class="header">
        <h1>E-com</h1>
        <button class="cart-badge" @click="open_cart">🛒 {{ total_items }} </button>
    </header>

</template>


<script setup >

    import {inject,computed} from 'vue'

    //collect the cart data feom the app.vue
    const cart=inject('cart')

    //get the cart open from the app.vue
    const cart_open=inject('cart_open')

    //total items
    const total_items=computed(()=>{
        let sum=0;
        for(let i=0;i<cart.items.length;i++){
            sum=sum+cart.items[i].quantity
        }
        return sum
    })

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
    margin-bottom: 16px;
    padding-bottom: 8px;
    }

    h1 {
    margin: 0;
    font-size: 22px;
    }

    .cart-badge {
    background: #010102;
    color: #fff;
    padding: 6px 12px;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    }

    .cart-badge:hover {
    background: #697acd;
    }


</style>