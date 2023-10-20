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

    <div id="right-top">
      <div class="title">老年人群平均消费金额</div>
      <div class="sub-title">
        Average consumption amount of the elderly population
      </div>
      <BaseEChart :chartOption="ageGroupOption" />
    </div>

    <div id="right-bottom">
      <div class="title">知名品牌/老字号金额TOP3</div>
      <div class="sub-title">
        Top 3 Amounts of Famous Brands/Timehonored Brands
      </div>
      <BaseEChart :chartOption="topBrandsOption" />
    </div>

    <div id="mid-top">
      <Digital />
    </div>

    <div id="mid-bottom"></div>
  </main>
</template>

<script setup lang="ts">
import BaseEChart from '@/components/BaseEChart.vue'
import Digital from '@/components/Digital.vue'
import { amountRankOption } from './config/amount-rank-option'
import { strongestPurchasingOption } from './config/strongest-purchasing-option'
import { topBrandsOption } from './config/top-brands-option'
import { ageGroupOption } from './config/age-group-option'
</script>

<style scoped>
.main-bg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.title {
  font-size: 24px;
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
  top: 130px;
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

#right-top {
  position: absolute;
  top: 130px;
  right: 20px;
  width: 500px;
  height: 320px;
}

#right-bottom {
  position: absolute;
  top: 580px;
  right: 20px;
  width: 500px;
  height: 320px;
}

#mid-top {
  position: absolute;
  top: 230px;
  left: 690px;
}

#mid-bottom {
  position: absolute;
  top: 490px;
  left: 520px;
  width: 860px;
  height: 460px;
  background: center / cover no-repeat url(@/assets/imgs/xiamen.svg);
}
</style>
