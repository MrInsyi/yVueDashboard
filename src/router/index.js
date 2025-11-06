import { createRouter, createWebHistory } from 'vue-router'
import DashboardHome from '../pages/DashboardHome.vue'
import DefectDaily from '../pages/DefectDaily.vue'

const routes = [
  { path: '/', name: 'home', component: DashboardHome },
  { path: '/defects', name: 'defects', component: DefectDaily },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
