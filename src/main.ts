//import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import ReviewBooksView from './ReviewBooksView.vue'
import Home from './Main.vue'
import App from './App.vue'

const routes = [
  { path: '/review/books', component: ReviewBooksView },
  { path: '/', component: Home }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.PROD ? "/gsk-archive-input-form" : "/"),
  routes
})

createApp(App).use(router).mount('#app')
