<template>

    <div>
        <p v-if="loading">Loading products...</p>
        <p v-else-if="error">{{ error }}</p>

        <div v-else class="grid">
        <product_card
            v-for="item in products"
            :key="item.id"
            :product="item"
            @add-to-cart="handle_add_to_cart"
        />
        </div>
    </div>

</template>


<script setup >

    import {ref,onMounted,inject} from 'vue'
    import product_card from './product_card.vue';

    //inject the shared cart
    const cart=inject('cart')

    const products=ref([])
    const loading=ref(true)
    const error=ref("")

    // const cart_count=ref(0)

    // //cart state - an obj with an items array
    // const cart=reactive({
    //     items:[],
    // })


    onMounted(async()=>{
        try{    
            const response =await fetch('http://localhost:3000/api/products')
            const json=await response.json()
            products.value=json.data
        }catch(err){
            error.value='Failed to load products'
        }finally{
            loading.value=false
        }
    })

    // //total number of items 
    // const total_items=computed(()=>{
    //     let sum=0
    //     for (let i=0;i< cart.items.length;i++){
    //         sum=sum + cart.items[i].quantity
    //     }
    //     return sum
    // })

    // //total price
    // const total_price=computed(()=>{
    //     let sum=0
    //     for (let i=0;i<cart.items.length;i++){
    //         sum=sum+cart.items[i].price * cart.items[i].quantity
    //     }
    //     return sum
    // })

    //runs when child emits
    function handle_add_to_cart(product_id){
        let find_product=null;
        for(let i=0;i<products.value.length;i++){
            if(products.value[i].id=== product_id){
                find_product=products.value[i]
                break
            }
        }

        if (find_product===null) return

        //check if the product is alrady in cart
        let existing_item=null
        for (let i=0;i< cart.items.length;i++){
            if (cart.items[i].product_id===product_id){
                existing_item=cart.items[i]
                break
            }
        }

        if (existing_item!=null){
            existing_item.quantity=existing_item.quantity + 1
        }else{
            cart.items.push({
                product_id:find_product.id,
                product_name:find_product.product_name,
                price:find_product.price,
                quantity:1,
            })
        }

    }


</script>

<style scoped>

    .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    }

    /* .cart-bar {
    font-weight: bold;
    margin-bottom: 12px;
    font-size: 15px;
    padding: 10px 14px;
    background: #f0f8f4;
    border-radius: 6px;
    border: 1px solid #cde8d8;
    }

    .cart-list {
    margin: 0 0 16px 0;
    padding: 12px 20px;
    background: #fff;
    border-radius: 6px;
    border: 1px solid #eee;
    font-size: 14px;
    }

    .cart-list li {
    margin: 4px 0;
    } */

</style>