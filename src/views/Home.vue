<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToApply() {
  router.push('/apply')
}
</script>

<template>
  <div class="rules-container">
    <h1>使用規則</h1>
    <hr>

    <div class="rules-list">
      <p>(一) 車輛進出校園及停車場一律按規定路線、速限（20 公里/小時）行駛，並禮讓行人，違規者將取消借用資格並拒絕再次申請。</p>
      <p>(二) 臨時停車申請最遲須於活動前二日提出，且僅限當日活動時段內停放，禁止隔夜停放；逾時未離場者將依本校車輛管理辦法處理。</p>
      <p>(三) 本校採車牌辨識系統進出，申請時請務必確認填寫之車號正確無誤；若因車號填寫錯誤導致無法入校，需自行負擔相關責任。</p>
      <p>(四) 車輛應停放於指定區域之停車格內，嚴禁佔用身心障礙專用車位、公務車位、消防通道或紅線區域，不得任意停放妨礙交通。</p>
      <p>(五) 校園內全面禁止鳴按喇叭、洗車及丟棄垃圾，並請配合現場警衛或駐衛警人員之交通指揮與引導。</p>
      <p>(六) 本停車場僅提供車位停放，對車輛及車內物品不負保管責任；若因地震、颱風等天災或不可抗力因素造成車輛損壞及遺失，本校概不負責。</p>
    </div>
    
    <button class="home-btn" @click="goToApply">
      同意以上規則，開始申請借用
    </button>
  </div>

</template>

<style scoped>

.rules-container {
  max-width: 960px;
  margin: 0 auto;
  padding: 7px 20px;
}

h1 {
  margin-top: 0;     
  margin-bottom: 12px; 
}

.rules-list p {
  font-size: 18px;
  font-weight: 600;
  line-height: 1.3;
  color: #111;
  margin-bottom: 16px;
}

.home-btn {
  display: flex;
  border-radius: 50px;
  background-color: #FFEFC1;
  padding: 15px;
  border: none;
  cursor: pointer;
  margin: 40px auto 20px;
  transition: background-color 0.2s, transform 0.1s;
  transition: transform 0.3s ease;

}

.home-btn:hover {
  background-color: #f7df94;
  transform: scale(1.01);
}

</style>