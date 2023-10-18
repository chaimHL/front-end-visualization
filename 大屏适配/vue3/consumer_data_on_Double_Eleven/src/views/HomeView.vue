<template>
  <main class="main-bg">
    <div id="top"></div>

    <div id="left-top">
      <div class="title">人均消费金额排名</div>
      <div class="sub-title">Ranking of per capita consumption amount</div>
      <BarEChart />
    </div>
  </main>
</template>

<script setup lang="ts">
import BarEChart from '@/components/BarEChart.vue'
</script>

<style scoped>
.main-bg {
  position: absolute;
  width: 100%;
  height: 100%;
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
  height: 300px;
}

.title {
  font-size: 26px;
  color: white;
}

.sub-title {
  color: white;
  margin-bottom: 20px;
}
</style>
