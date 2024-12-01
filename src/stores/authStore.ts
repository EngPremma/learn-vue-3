import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useStorage } from '@vueuse/core'

type User = { id: number; username: string; isAdmin: boolean }

const userSample: User = { id: 23424234, username: 'Eng Premma', isAdmin: true }

export const useAuthStore = defineStore('auth', () => {
  const user = useStorage<User | null>('user', null, localStorage, {
    serializer: {
      write: (v: any) => JSON.stringify(v),
      read: (v: any) => v ? JSON.parse(v) : null
    }
  })

  const router = useRouter()

  const handleLogin = () => {
    user.value = userSample
    router.replace('/')
  }

  const handleLogout = () => {
    user.value = null
    router.replace('/login')
  }

  return { user, handleLogin, handleLogout }
})
