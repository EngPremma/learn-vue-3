import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const LoginView = () => import('@/views/AuthView/LoginView.vue')
const HomeView = () => import('@/views/HomeView/HomeView.vue')
const PostListView = () => import('@/views/PostListView/PostListView.vue')
const PostDetailView = () => import('@/views/PostDetailView/PostDetailView.vue')
const NotFoundView = () => import('@/views/NotFoundView/NotFoundView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: LoginView,
    meta: {
      layout: AuthLayout,
      requiresAuth: true
    }
  },
  {
    path: '/',
    component: HomeView,
    meta: {
      layout: MainLayout,
      requiresAuth: true,
      isAdmin: false
    }
  },
  {
    path: '/posts',
    component: PostListView,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    beforeEnter: (_to, _from) => true,
    meta: {
      layout: MainLayout,
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/posts/:id',
    component: PostDetailView,
    props: true,
    meta: {
      layout: MainLayout,
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

import 'vue-router'
import type { DefineComponent } from 'vue'

// To ensure it is treated as a module, add at least one `export` statement
export {}

declare module 'vue-router' {
  interface RouteMeta {
    // is optional
    isAdmin?: boolean
    // must be declared by every route
    requiresAuth: boolean
    layout?: DefineComponent<object, object, never>
  }
}
