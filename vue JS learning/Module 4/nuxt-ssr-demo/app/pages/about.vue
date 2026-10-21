<script setup>
useHead({
  title: "About — Nuxt SSR Demo",
  meta: [{ name: "description", content: "About this Nuxt demo." }]
})
</script>

<template>
  <div class="container">
    <h1>About</h1>
    <p>This page is <strong>prerendered at build time</strong> — it becomes a static HTML file.</p>
    <p>Since the content never changes, Nuxt generates it once during <code>npm run build</code>.</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>