<script setup>

    import { useRouter } from "vue-router"

    const router = useRouter()

    function go_home() {
    router.push("/")
    }

</script>

<template>

  <div class="not-found">
    <h1>404</h1>
    <p>Page not found</p>
    <button class="home-btn" @click="go_home">Go back to Home</button>
  </div>

</template>

<style scoped>

    .not-found {
    text-align: center;
    padding: 80px 20px;
    }
    h1 {
    font-size: 80px;
    margin: 0;
    color: #42b883;
    font-weight: bold;
    }
    p {
    font-size: 18px;
    color: #666;
    margin: 10px 0 30px 0;
    }
    .home-btn {
    padding: 12px 24px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
    }
    .home-btn:hover {
    background: #369870;
    }

</style>