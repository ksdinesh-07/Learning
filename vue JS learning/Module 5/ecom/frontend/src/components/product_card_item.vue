<template>
  <div class="card">
    <div class="badge-area">
      <slot name="badge">
        <span v-if="product.discount" class="discount-badge">
          {{ product.discount }}% off
        </span>
      </slot>
    </div>

    <RouterLink :to="`/product/${product.id}`" class="card-link">
      <img :src="product.image_url" alt="" />
      <h2>{{ product.product_name }}</h2>
    </RouterLink>

    <p class="category">{{ product.category }}</p>

    <p class="price">
      <slot name="price" :price="product.price" :discount="product.discount">
        ₹{{ product.price }}
        <span v-if="product.discount" class="discount">
          {{ product.discount }}% off
        </span>
      </slot>
    </p>

    <p class="rating">⭐ {{ product.rating }}</p>
    <p class="desc">{{ product.description }}</p>

    <div class="actions">
      <slot name="actions">
        <button class="add-btn" @click="handle_add_click">Add to Cart</button>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(["add-to-cart"])

function handle_add_click() {
  emit("add-to-cart", props.product.id)
}
</script>

<style scoped>
.card {
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.badge-area {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}

.discount-badge {
  background: #b71c1c;
  color: #ffffff;
  font-size: 11px;
  padding: 3px 8px;
  border-radius: 12px;
  font-weight: bold;
}

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card-link img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  transition: transform 0.2s;
}

.card-link:hover img {
  transform: scale(1.03);
}

.card-link h2 {
  margin: 6px 0 0 0;
  font-size: 16px;
  color: #333;
}

.card-link:hover h2 {
  color: #1f6e47;
}

.category {
  text-transform: uppercase;
  font-size: 11px;
  color: #555;
  margin: 0;
}

.price {
  font-weight: bold;
  margin: 0;
}

.discount {
  color: #b71c1c;
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

.actions {
  margin-top: auto;
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