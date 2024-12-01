<script setup lang="ts">
import axios from 'axios'
import { ref, watchEffect } from 'vue'

import { type Post } from '@/views/PostListView/components/PostList.vue'

const props = defineProps<{ id: string }>()
const post = ref<Post | null>(null)
const isLoading = ref(true)

watchEffect(async () => {
  try {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
    post.value = data
    isLoading.value = false
  } catch (error) {
    console.log('error :>> ', error)
    isLoading.value = false
  }
})
</script>

<template>
  <p v-if="$route.meta.requiresAuth">requires auth</p>
  {{ $route.params.id }}
  <p>{{ id }}</p>
  <p v-if="isLoading">Loading...</p>
  <template v-else>
    <h1>{{ post?.title.toUpperCase() }}</h1>
    <h2>Post ID: {{ post?.id }}</h2>
    <p>{{ post?.body }}</p>
  </template>
</template>
