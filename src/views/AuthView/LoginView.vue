<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
</script>

<template>
  <h2>login view</h2>
  <button @click="authStore.handleLogin">login</button>
</template>
