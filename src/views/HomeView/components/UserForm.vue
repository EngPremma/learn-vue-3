<script setup lang="ts">
const id = defineModel('id')
const name = defineModel('name')
const age = defineModel('age')

defineEmits<{
  (e: 'handleCreateUser'): () => void
  (e: 'clearForm'): () => void
}>()
</script>

<template>
  <h2>User Form</h2>
  <form @submit.prevent="$emit('handleCreateUser')">
    <label for="id">ID</label>
    <br />
    <input v-model.number="id" id="id" placeholder="212" required />
    <br />
    <label for="name">Name</label>
    <br />
    <input v-model.trim="name" id="name" placeholder="John Doe" required />
    <br />
    <label for="age">Age</label>
    <br />
    <input v-model.number="age" id="age" placeholder="John Doe" />
    <button type="submit">create</button>
  </form>
  <button @click="$emit('clearForm')">Clear form</button>
</template>

<style scoped>
input {
  margin-bottom: 1rem;
}
</style>
