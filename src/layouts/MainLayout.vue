<script setup lang="ts">
type NavLink = { path: string; label: string; meta: { requiresAdmin: boolean } }

import AuthButton from '@/components/AuthButton.vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

const navLinks: NavLink[] = [
  { path: '/', label: 'Home', meta: { requiresAdmin: false } },
  { path: '/posts', label: 'Posts', meta: { requiresAdmin: true } }
]

const checkAccess = (navLink: NavLink) => {
  if (navLink.meta.requiresAdmin && !authStore.user?.isAdmin) {
    return false
  } else {
    return true
  }
}
</script>

<template>
  <header>
    <h1>Main Layout</h1>
    <nav>
      <template v-for="navLink in navLinks" :key="navLink.path">
        <RouterLink :to="navLink.path" active-class="active-nav" v-if="checkAccess(navLink)">
          {{ navLink.label }}
        </RouterLink>
      </template>

      <AuthButton />
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <p>Footer</p>
  </footer>
</template>

<style scoped>
a {
  color: initial;
  margin-right: 1rem;
  text-decoration: none;
  font-size: large;
}
.active-nav {
  font-weight: bold;
  color: rgb(42, 165, 52);
}
main {
  padding: 2rem;
}
footer {
  background-color: antiquewhite;
  padding: 1rem;
}
</style>
