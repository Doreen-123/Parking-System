<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
  campus: '博愛校區'
})

</script>

<template>
  <div class="apply-container">
    <form class="apply-form">
      <div class="section-block">
        <label class="section-title">停放校區選擇 (擇一)</label>
        <div class="campus-group">
          <button type="button" class="campus-btn" :class="{ active: form.campus === '博愛校區'}" @click="form.campus = '博愛校區'">
            博愛校區
          </button>

          <button type="button" class="campus-btn" :class="{ active: form.campus === '天母校區'}" @click="form.campus = '天母校區'">
            天母校區
          </button>
        </div>

      </div>

    </form>
  </div>
</template>

<style scoped>
.apply-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 7px 20px;
}

.apply-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-title {
  display: block;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
}

.campus-group { 
  display: flex;
  justify-content: center; 
  gap: 40px; 
  margin-top: 12px; 
}

.campus-btn { 
  padding: 12px 42px; 
  border-radius: 14px; 
  border: 2px solid transparent; 
  background-color: #f3e6be; 
  font-size: 16px; 
  font-weight: 700; 
  cursor: pointer; 
}

.campus-btn.active { 
  background-color: #FFEFC1; 
  border-color: #f0be33; 
}
</style>