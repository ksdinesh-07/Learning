<template>

    <section>
        <h3>{{ app_title }}</h3>
        <p>Here is your ticket summary. </p>
    </section>

</template>


<script setup lang="ts">

    //inject is a runtime function
    import {inject,type Ref} from 'vue'

    const app_title = inject<Ref<string>>('app_title')

</script>