import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/pages/home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/builder',
    component: async () => await import('@/pages/builder.vue'),
    children: [
      { path: '', name: 'builder', component: async () => await import('@/components/CvSection/ProgressTracker.vue') },
      { path: 'personal-information', name: 'personal-information', component: async () => await import('@/pages/personal-info.vue') },
      { path: 'contact-forms', name: 'contact-forms', component: async () => await import('@/pages/contact.vue') },
      { path: 'professional-profile', name: 'professional-profile', component: async () => await import('@/pages/professional-profile.vue') },
      { path: 'experience', name: 'experience', component: async () => await import('@/pages/experience.vue') },
      { path: 'education', name: 'education', component: async () => await import('@/pages/education.vue') },
      { path: 'knowledge', name: 'knowledge', component: async () => await import('@/pages/knowledge.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export { router }
