<script setup lang="ts">
export type Person = { id: number; name: string; age: number }

import { ref, provide } from 'vue'

import UserForm from './components/UserForm.vue'
import UserList from './components/UserList.vue'

const people = ref<Person[]>([{ id: 1111, name: 'Premma', age: 24 }])
const inputValue = ref<Person>({
  id: 0,
  name: '',
  age: 0
})

const count = ref(0)

const increment = () => {
  count.value++
}

provide('count', { count, increment })

const handleCreateUser = () => {
  if (inputValue.value.name === '' || inputValue.value.id === 0) return

  people.value.push(inputValue.value)

  clearForm()
}

const handleDeleteUser = (id: number) => {
  people.value = people.value.filter((person) => person.id !== id)
}

const clearForm = () => {
  inputValue.value = {
    id: 0,
    name: '',
    age: 0
  }
}
</script>

<template>
  <p>{{ count }}</p>
  <UserForm
    v-model:id="inputValue.id"
    v-model:name="inputValue.name"
    v-model:age="inputValue.age"
    @handle-create-user="handleCreateUser"
    @clear-form="clearForm"
  />
  <UserList :people="people" @delete-user="handleDeleteUser" />
</template>
