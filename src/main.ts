import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import './style.css'

const $app = createApp(App)

const pinia = createPinia()

// use pinia
$app.use(pinia)

// use vue-router
$app.use(router)

$app.mount('#app')
