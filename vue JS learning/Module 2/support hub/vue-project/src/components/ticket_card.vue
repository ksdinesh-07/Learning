<template>

    <section class="ticket-card" >
        <h3>{{ ticket_title }}</h3>

        <slot name="status" :status="ticket_status">

            <p>status:{{ ticket_status }}</p>

        </slot>

    </section>

</template>


<script setup lang="ts">

    import {ref} from 'vue'

    const ticket_status=ref('open')
    const ticket_title=ref('login issue')

</script>

<style scoped>

    .ticket_card {
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background-color: white;
    }

    .ticket_card h3 {
    margin-top: 0;
    }

</style>