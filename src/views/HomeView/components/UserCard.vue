<script setup lang="ts">
interface Props {
  id: number
  name: string
}

import UserSubCard from './UserSubCard.vue'

defineProps<Props>()
defineEmits<{
  (e: 'deleteUser', id: number): () => void
}>()
</script>

<template>
  <li>
    ID: <strong>{{ id }}</strong
    >, Name: <strong> {{ name }}</strong>
  </li>
  <button @click="$emit('deleteUser', id)">delete</button>
  <UserSubCard />
</template>
