<template>
  <top/>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import top from '@/components/top.vue';
const store = useCounterStore()
</script>

<style scoped>
</style>
