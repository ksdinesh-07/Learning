<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/">Products</NuxtLink>
      <NuxtLink to="/about">about</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>


<style>

* { box-sizing: border-box; }
body { margin: 0; background: #f8f9fa; font-family: system-ui, sans-serif; }
.navbar {
  display: flex;
  gap: 24px;
  padding: 16px 40px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.navbar a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
}
.navbar a:hover,
.navbar a.router-link-active {
  color: #1f6e47;
}
</style>