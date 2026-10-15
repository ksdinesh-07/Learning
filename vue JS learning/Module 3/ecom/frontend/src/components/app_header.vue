<template>

    <header class="header">
        <h1>E-com</h1>
        <div class="cart-badge" >{{ total_items }} </div>
    </header>

</template>


<script setup >

    import {inject,computed} from 'vue'

    //collect the cart data feom the app.vue
    const cart=inject('cart')

    //total items
    const total_items=computed(()=>{
        let sum=0;
        for(let i=0;i<cart.items.lemgth;i++){
            sum=sum+cart.items.quantity
        }
        return sum
    })

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
    background: #42b883;
    color: #fff;
    padding: 6px 12px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 14px;
    }

</style>