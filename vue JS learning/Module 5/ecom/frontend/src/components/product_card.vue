<template>

  <div class="grid">

    <product_card_item
      v-for="item in products"
      :key="item.id"
      :product="item"
      @add-to-cart="emit('add-to-cart', $event)"
    >
      <!-- Named slot: custom badge -->
      <template #badge>
        <span v-if="item.stock === 0" class="out-of-stock">Out of stock</span>
        <span v-else-if="item.rating >= 4.5" class="top-rated">Top rated</span>
        <span v-else-if="item.discount" class="discount-badge">
          {{ item.discount }}% OFF
        </span>
      </template>

      <!-- Scoped slot: custom price display -->
      <template #price="{ price, discount }">
        <span class="price-tag">₹{{ price.toLocaleString("en-IN") }}</span>
        <span v-if="discount" class="save-tag">
          Save ₹{{ Math.round((price * discount) / 100) }}
        </span>
      </template>

      <!-- Named slot: custom actions -->
      <template #actions>
        <button class="add-btn" @click="emit('add-to-cart', item.id)">
          🛒 Add — ₹{{ item.price }}
        </button>
      </template>
      
    </product_card_item>
  </div>

</template>


<script setup>

    import product_card_item from './product_card_item.vue';
    import { onMounted, onActivated, onDeactivated } from "vue"

    onMounted(() => console.log("🟢 product_card MOUNTED"))
    onActivated(() => console.log("🟢 product_card ACTIVATED"))
    onDeactivated(() => console.log("🔴 product_card DEACTIVATED"))


    defineProps({
        products:{
            type:Array,
            required:true,
        }
    })

    const emit=defineEmits(['add-to-cart'])

    // function handle_add_click(){
    //     emit('add-to-cart',props.product.id)
    // }

</script>

<style scoped>

    .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 16px;
    }

    .top-rated {
    background: #8a4d00;
    color: #fff;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: bold;
    }

    .out-of-stock {
    background: #888;
    color: #fff;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: bold;
    }

    .discount-badge {
    background: #b71c1c;
    color: #fff;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: bold;
    }

    .price-tag {
    font-weight: bold;
    }

    .save-tag {
    color: #1f6e47;
    font-size: 12px;
    margin-left: 8px;
    }

    .add-btn {
    width: 100%;
    padding: 8px 12px;
    background: #1f6e47;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    }

    .add-btn:hover {
    background: #175437;
    }

</style>