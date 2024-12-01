<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
</script>

<template>
  <h3 v-if="authStore.user">Welcome {{ authStore.user?.username }}</h3>
  <button v-if="authStore.user" @click="authStore.handleLogout">Logout</button>
</template>
