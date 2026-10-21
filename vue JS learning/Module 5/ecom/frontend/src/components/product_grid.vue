<template>

    <div>
        <p v-if="loading">Loading products...</p>
        <p v-else-if="error">{{ error }}</p>

        <div v-else>

            <!-- view toggle -->
            <!-- <div class="view-toggle">
                <button :class="{active:current_view==='product_card'}" @click="set_view('card')">Grid</button>
                <button :class="{active:current_view==='product_list'}" @click="set_view('list')">list</button>
            </div> -->


            <!-- render the card view
            <div v-if="current_view==='card'" class="grid" >
                <product_card v-for="item in products" :key="item.id" :product="item" @add-to-cart="handle_add_to_cart" />
            </div>

            render the list view
                <product_list v-else :products="products" @add-to-cart="handle_add_to_cart" /> -->
        
            
            <div class="view-toggle">
                <button :class="{active:current_view===product_card}" @click="current_view=product_card">Grid</button>
                <button :class="{active:current_view===product_list}" @click="current_view=product_list">List</button>
            </div>

            <!-- demonstration of caching -->
            <p class="mount-info">Mount count: {{ mount_count }}</p>
            
            <!-- dynamic component rendering -->
            <KeepAlive>
                <component :is="current_view" :products="products" @add-to-cart="handle_add_to_cart" />
            </KeepAlive>

        </div>
    </div>

</template>


<script setup >

    import {ref,onMounted,inject,shallowRef,onActivated,onDeactivated, watch} from 'vue'
    import product_card from './product_card.vue';
    // import { use_view } from '@/composables/use_view.js';
    import product_list from './product_list.vue';
    //composobles
    import { use_fetch } from '../composables/use_fetch.js';
    import { use_cart } from "../composables/use_cart.js"    

    //fetch products from the backend
    // const {data,loading,error} =use_fetch('http://localhost:3000/api/products');
    const { data, loading, error } = use_fetch("/api/products")


    //extract the products
    const products=shallowRef([])   
    watch(data,(new_data)=>{
        if(new_data && new_data.data){
            products.value=new_data.data
        }
    })

    //current view
    const current_view=shallowRef(product_card)

    //cart
    const {add_product} =use_cart();

    //handler
    function handle_add_to_cart(product_id){
        let found=null;
        for (let i=0;i<products.value.length;i++){
            if(products.value[i].id===product_id){
                found=products.value[i]
                break
            }
        }
        if (found){
            add_product(found)
        }
    }

    
    //inject the shared cart
    // const cart=inject('cart')

    //get the view state and setter 
    // const {current_view,set_view} =use_view()



    // const products=ref([])
    // const loading=ref(true)
    // const error=ref("")

    // Counter to demonstrate KeepAlive caching
    const mount_count=ref(0)
    onMounted(() => {
        mount_count.value = mount_count.value + 1
    })

    // const cart_count=ref(0)

    // //cart state - an obj with an items array
    // const cart=reactive({
    //     items:[],
    // })


    //current view component that starts as the card view
    // const current_view=shallowRef(product_card)

    console.log("product_card =", product_card)
    console.log("product_list =", product_list)

    // onMounted(async()=>{
    //     mount_count.value=mount_count.value+1
    //     console.log('Product card Mounted',mount_count.value)
    //     try{    
    //         const response =await fetch('http://localhost:3000/api/products')
    //         const json=await response.json()
    //         products.value=json.data
    //     }catch(err){
    //         error.value='Failed to load products'
    //     }finally{
    //         loading.value=false
    //     }
    // })

    onActivated(()=>{
        console.log('Product card Activated')
    })

    onDeactivated(()=>{
        console.log("product card deactivated")
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
    // function handle_add_to_cart(product_id){
    //     if (!cart || !cart.items){
    //         console.error('Cart is unavailable')
    //         return
    //     }
    //     let find_product=null;
    //     for(let i=0;i<products.value.length;i++){
    //         if(products.value[i].id=== product_id){
    //             find_product=products.value[i]
    //             break
    //         }
    //     }

    //     if (find_product===null) return

    //     //check if the product is alrady in cart
    //     let existing_item=null
    //     for (let i=0;i< cart.items.length;i++){
    //         if (cart.items[i].product_id===product_id){
    //             existing_item=cart.items[i]
    //             break
    //         }
    //     }

    //     if (existing_item!=null){
    //         existing_item.quantity=existing_item.quantity + 1
    //     }else{
    //         cart.items.push({
    //             product_id:find_product.id,
    //             product_name:find_product.product_name,
    //             price:find_product.price,
    //             quantity:1,
    //         })
    //     }

    // }


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

.view-toggle {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.view-toggle button {
  padding: 6px 14px;
  border: 1px solid #666;
  background: #ffffff;
  color: #1a1a1a;
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
}

.view-toggle button.active {
  background: #0d3d24;         /* very dark green */
  color: #ffffff;
  border-color: #0d3d24;
  font-weight: 700;
}
    
    .mount-info {
    font-size: 12px;
    color: #888;
    margin-bottom: 12px;
    }

</style>