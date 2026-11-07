<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-container">
    <Navbar />
    <!-- 頁面切換內容呈現區 -->
    <main class="main-body">
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #F4F2EE; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.main-body {
  max-width: 1080px;
  margin: 0 auto;
  padding: 20px;
}
</style>