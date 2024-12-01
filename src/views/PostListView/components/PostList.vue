<script setup lang="ts">
export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref<Post[]>([])
const isLoading = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts.value = data
    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    console.log('error :>> ', error)
  }
})
</script>

<template>
  <h2>Posts</h2>
  <p v-show="isLoading">loading....</p>
  <li v-for="post in posts" :key="post.id">
    <RouterLink :to="`/posts/${post.id}`">
      {{ post.title }}
    </RouterLink>
  </li>
</template>
