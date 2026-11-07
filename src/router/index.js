import { createRouter, createWebHashHistory } from 'vue-router'

// 引入所有頁面元件
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Apply from '../views/Apply.vue'
import Records from '../views/Records.vue'
import ParkingStatus from '../views/ParkingStatus.vue'
import Admin from '../views/Admin.vue'

const routes = [
  { path: '/', redirect: '/home' }, 
  { path: '/login', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  { path: '/apply', name: 'Apply', component: Apply },
  { path: '/records', name: 'Records', component: Records },
  { path: '/status', name: 'Status', component: ParkingStatus },
  { path: '/admin', name: 'Admin', component: Admin }
]

const router = createRouter({
  history: createWebHashHistory(), // 避開 GitHub Pages 重新整理 404 錯誤
  routes
})

export default router