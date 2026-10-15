<template>

    <header class="app_header">
        <h1>{{ props.title }}</h1>
        <p>{{ props.subtitle }}</p>
    </header>

    <!-- <button @click="request_title_change">
		Change title
	</button>
 -->

</template>

<script setup lang="ts" >

    const props=defineProps<{
        title:string
        subtitle:string
    }>()

    // const emit=defineEmits<{
    //     change_title:[new_title:string]
    // }>()

    // function request_title_change(){
    //     emit('change_title','SupportHub Dashboard')
    // }

</script>


<style scoped>

    .app_header {
    padding: 24px;
    background-color: #1f2937;
    color: white;
    }

    .app_header h1 {
    margin: 0;
    font-size: 28px;
    }

    .app_header p {
    margin: 8px 0 16px;
    color: #d1d5db;
    }

</style>
