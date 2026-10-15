<template>

    <section>
        <h3>Lifecycle Demo</h3>
        <p>{{ lifecycle_message }}</p>
    </section>

</template>

<script setup lang="ts">

    import {ref,onMounted,onUnmounted} from 'vue'

    const lifecycle_message=ref('component is being prepared')

    onMounted(()=>{
        lifecycle_message.value='Dashboard component is mounted'
        console.log('LifecycleDemo component mounted')
    })

    onUnmounted(()=>{
        console.log('LifecycleDemo component unmounted')
    })
</script>