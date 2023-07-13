import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  {
    path: '/builder',
    name: 'builder',
    component: async () => await import('@/views/Builder.vue'),
    children: [
      { path: 'personal-information', name: 'personal-information', component: async () => await import('@/views/PersonalInfo.vue') },
      { path: 'contat-forms', name: 'contat-forms', component: async () => await import('@/views/ContactForms.vue') },
      { path: 'professional-profile', name: 'professional-profile', component: async () => await import('@/views/ProfessionalProfile.vue') },
      { path: 'experience', name: 'experience', component: async () => await import('@/views/Experience.vue') },
      { path: 'education', name: 'education', component: async () => await import('@/views/Education.vue') },
      { path: 'knowledge', name: 'knowledge', component: async () => await import('@/views/Knowledge.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export { router }
