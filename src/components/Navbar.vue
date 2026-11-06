<script setup>
const navItems = [
  { id: 'home', label: '首頁' },
  { id: 'apply', label: '申請借用' },
  { id: 'records', label: '申請紀錄' },
  { id: 'status', label: '車位資訊' }
]
</script>

<template>
  <header class="navbar">
    <div class="brand">
      <div class="logo-box">北市大</div>
      <div class="title-text">
        <span class="sub">臺北市立大學</span>
        <span class="main">臨時停車申請系統</span>
      </div>
    </div>

    <nav class="nav-links">
      <button v-for="item in navItems" :key="item.id" class="nav-btn">
        {{ item.label }}
      </button>
      <div class="user-profile">
        <span>👤 陳佳筠 ▼</span>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 36px;
  background-color: #ffffff;
  border-bottom: 1px solid #eaeaea;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-box {
  width: 44px;
  height: 44px;
  background: #004b97;
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
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
.nav-links {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-btn {
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  padding: 6px 10px;
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
  margin-left: 10px;
  cursor: pointer;
}
</style>