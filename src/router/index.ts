import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import Builder from '@/pages/Builder.vue'
import ProgressTracker from '@/features/ui/organisms/ProgressTracker.vue'
import Index from '@/features/profile/index.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/builder',
    name: 'builder',
    component: Builder,
    children: [
      { path: '', name: 'builder', component: ProgressTracker },
      { path: 'personal-information', name: 'personal-information', component: Index }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export { router }
