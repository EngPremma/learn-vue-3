import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router/mainRouter'
import { useAuthStore } from './stores/authStore'

const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(pinia)

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.user && to.path !== '/login') {
    return '/login'
  }

  if (to.meta.isAdmin && !authStore.user?.isAdmin) {
    return false
  }

  if (authStore.user && to.path === '/login') {
    return '/'
  }
})

app.config.errorHandler = (err, vm, info) => {
  console.error('Error:', err)
  console.error('Vue component:', vm)
  console.error('Additional info:', info)
}

app.mount('#app')
