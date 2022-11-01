import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from './components/Index.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

import VueMask from '@devindex/vue-mask'

import { createPinia } from 'pinia'

const pinia = createPinia()

const routes = [
    { path: '/', component: Index },
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})


const app = createApp(App)
app.use(VueMask)
app.use(pinia)
app.use(router)
app.mount('#app')
