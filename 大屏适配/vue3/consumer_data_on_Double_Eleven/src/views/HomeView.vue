<template>
  <main class="main-bg">
    <div id="top"></div>

    <div id="left-top">
      <div class="title">人均消费金额排名</div>
      <div class="sub-title">Ranking of per capita consumption amount</div>
      <BaseEChart :chartOption="amountRankOption" />
    </div>

    <div id="left-bottom">
      <div class="title">购买力最强区/街道</div>
      <div class="sub-title">
        District/Street with the strongest purchasing power
      </div>
      <BaseEChart :chartOption="strongestPurchasingOption" />
    </div>
  </main>
</template>

<script setup lang="ts">
import BaseEChart from '@/components/BaseEChart.vue'
import { amountRankOption } from './config/amount-rank-option'
import { strongestPurchasingOption } from './config/strongest-purchasing-option'
</script>

<style scoped>
.main-bg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  font-size: 26px;
  color: white;
}

.sub-title {
  color: white;
  margin-bottom: 20px;
}

#top {
  position: absolute;
  width: 100%;
  height: 183px;
  background-size: cover;
  background-image: url(@/assets/imgs/top_bg.svg);
}

#left-top {
  position: absolute;
  top: 100px;
  left: 20px;
  width: 500px;
  height: 320px;
}

#left-bottom {
  position: absolute;
  top: 580px;
  left: 20px;
  width: 500px;
  height: 320px;
}
</style>
