<template>

    <ul class="list">
        <li v-for="item in products" :key="item.id" class="row">

            <img :src="item.image_url" :alt="item.product_name" class="thumb" />
            
            <div class="info">
                <div class="name">{{ item.product_name }}</div>
                <div class="desc">{{ item.description }}</div>
            </div>

            <div class="meta">
                <span class="price">₹{{ item.price }}</span>
                <span class="rating">⭐{{ item.rating }} </span>
            </div>

            <button class="add-btn" @click="handle_add_click(item.id)">Add</button>

        </li>

    </ul>

</template>


<script setup>

    import { onMounted, onActivated, onDeactivated } from "vue"
    onMounted(() => console.log("🟡 product_list MOUNTED"))
    onActivated(() => console.log("🟡 product_list ACTIVATED"))
    onDeactivated(() => console.log("🔴 product_list DEACTIVATED"))

    defineProps({
        products:{
            type:Array,
            required:true,
        },
    })

    const emit=defineEmits(['add-to-cart'])

    function handle_add_click(product_id){
        emit('add-to-cart',product_id)
    }

</script>

<style scoped>

    .list {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    .row {
    display: grid;
    grid-template-columns: 80px 1fr auto auto;
    gap: 12px;
    align-items: center;
    padding: 12px;
    border-bottom: 1px solid #eee;
    }

    .thumb {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
    }

    .name {
    font-weight: bold;
    font-size: 15px;
    }

    .desc {
    font-size: 12px;
    color: #777;
    margin-top: 4px;
    }

    .meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 13px;
    }

    .price {
    font-weight: bold;
    }

    .rating {
    color: #555;
    }

    .add-btn {
    padding: 6px 14px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    }

    .add-btn:hover {
    background: #369870;
    }

</style>