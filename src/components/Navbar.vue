<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = [
  { path: '/home', label: '首頁' },
  { path: '/apply', label: '申請借用' },
  { path: '/records', label: '申請紀錄' },
  { path: '/status', label: '車位資訊' }
]

function navigate(path) {
  router.push(path)
}
</script>

<template>
  <header class="navbar">
    <!-- 1. 左側：Logo 與標題 -->
    <div class="brand" @click="navigate('/home')" style="cursor: pointer;">
      <img src="../assets/ut_image.png" alt="北市大校徽" class="ut-image">
      <div class="title-text">
        <span class="sub">臺北市立大學</span>
        <span class="main">臨時停車申請系統</span>
      </div>
    </div>

    <!-- 2. 中間：導覽選單（置中） -->
    <nav class="nav-links">
      <button 
        v-for="item in navItems" 
        :key="item.path" 
        class="nav-btn"
        @click="navigate(item.path)"
      >
        {{ item.label }}
      </button>
    </nav>

    <!-- 3. 右側：使用者資訊 -->
    <div class="user-profile" @click="navigate('/admin')">
      <span>👤 陳佳筠 ▼</span>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  margin: 0 auto;       
  padding: 16px 20px;     
  background-color: #ffffff;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ut-image {
  max-width: 60px;
}

.title-text {
  display: flex;
  flex-direction: column;
}

.title-text .sub {
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

.title-text .main {
  font-size: 18px;
  font-weight: bold;
  color: #111;
}

/* 讓 nav-links 佔據中間空間並置中 */
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex: 1; /* 自動推擠並置中 */
}

.nav-btn {
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 4px;
  transition: 0.2s;
}

.nav-btn:hover {
  background-color: #f2f2f2;
}

.user-profile {
  font-size: 16px;
  font-weight: 600;
  color: #222;
  cursor: pointer;
}
</style>