<script setup lang="ts">
interface Props {
  people: Person[]
}

import UserCard from './UserCard.vue'
import { type Person } from '../HomeView.vue'

defineProps<Props>()
defineEmits<{
  (e: 'deleteUser', id: number): () => void
}>()
</script>

<template>
  <h2>User List</h2>
  <template v-if="people.length">
    <UserCard
      v-for="person in people"
      :key="person.id"
      :id="person.id"
      :name="person.name"
      @delete-user="$emit('deleteUser', person.id)"
    />
  </template>
  <p v-else>No User!</p>
</template>
