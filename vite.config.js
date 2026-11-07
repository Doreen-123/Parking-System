import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './' // 這樣部屬到任何子路徑都不會破圖或抓取資源失敗
})
