<template>
  <div class="app">
    <app_header
      :title="page_title"
      :subtitle="page_subtitle"
    />

    <main class="app_content">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import app_header from './components/app_header.vue'

const page_title = 'SupportHub'
const page_subtitle = 'Customer Support Portal'
</script>

<style scoped>

	.app {
	min-height: 100vh;
	font-family: Arial, sans-serif;
	}

	.app_content {
	padding: 24px;
	}

</style>