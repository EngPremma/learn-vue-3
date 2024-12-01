<script setup lang="ts">
import { inject } from 'vue'
import type { Ref } from 'vue'

const { increment } = inject('count') as { count: Ref<number>; increment: () => void }
</script>

<template>
  <button @click="increment">increment</button>
</template>
