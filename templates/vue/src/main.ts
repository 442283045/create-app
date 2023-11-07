import { createPinia } from 'pinia'
import 'virtual:uno.css'
import { createApp } from 'vue'
import './assets/main.css'

import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { routes as generatedRoutes } from 'vue-router/auto/routes'

import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  routes: setupLayouts(generatedRoutes),
  history: createWebHistory()
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
