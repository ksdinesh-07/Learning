<template>

    <section class="content_card">

        <header class="card_header">
            <slot name="header" />
        </header>

        <div class="card_body">
            <slot />
        </div>

        <footer class="card_footer">
            <slot name="footer" />
        </footer>

    </section>

</template>


<script setup lang="ts">



</script>

<style scoped>

    .content_card {
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background-color: white;
    }

    .card_header {
    margin-bottom: 16px;
    }

    .card_body {
    margin-bottom: 16px;
    }

    .card_footer {
    padding-top: 12px;
    border-top: 1px solid #e5e7eb;
    }

</style>