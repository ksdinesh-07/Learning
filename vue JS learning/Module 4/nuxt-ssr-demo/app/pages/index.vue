<script setup>
const products = [
  { id: 1, name: "Wireless Headphones", price: 1999, category: "Electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 599, category: "Clothing" },
  { id: 3, name: "Clean Code (Book)", price: 850, category: "Books" },
]

useHead({
  title: "Nuxt SSR Demo — Products",
  meta: [
    { name: "description", content: "SSR-rendered product catalog demo with Nuxt." }
  ]
})
</script>

<template>
  <div class="container">
    <h1>Product Catalog</h1>
    <p class="subtitle">This page is Server-Side Rendered (SSR).</p>

    <div class="grid">
      <div class="card" v-for="p in products" :key="p.id">
        <h2>{{ p.name }}</h2>
        <p class="category">{{ p.category }}</p>
        <p class="price">₹{{ p.price }}</p>
      </div>
    </div>

    <div class="proof">
      <h3>Proof of SSR</h3>
      <p>Right-click this page → <strong>View Page Source</strong>.</p>
      <p>You will see the product names in the HTML — rendered on the server.</p>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}
h1 {
  font-size: 32px;
  margin: 0 0 4px 0;
}
.subtitle {
  color: #666;
  margin: 0 0 32px 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
}
.card h2 {
  margin: 0 0 8px 0;
  font-size: 18px;
}
.category {
  color: #888;
  font-size: 12px;
  text-transform: uppercase;
  margin: 0;
}
.price {
  font-weight: bold;
  font-size: 18px;
  margin-top: 12px;
}
.proof {
  margin-top: 40px;
  padding: 20px;
  background: #f0f8f4;
  border-radius: 10px;
  border: 1px solid #cde8d8;
}
.proof h3 {
  margin-top: 0;
  color: #1f6e47;
}
</style>