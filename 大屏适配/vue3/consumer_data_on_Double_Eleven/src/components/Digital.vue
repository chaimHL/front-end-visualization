<!-- 展示数字 -->
<template>
  <div>
    <span class="t1">成交额</span>
    <span id="amount" class="t2">150</span>
    <span class="t1">亿</span>
  </div>
</template>

<script lang="ts" setup>
import { CountUp } from 'countup.js'
import { onMounted } from 'vue'

onMounted(() => {
  const countUp = new CountUp('amount', 150)

  if (!countUp.error) {
    countUp.start()
  } else {
    console.error(countUp.error)
  }
})
</script>

<style scoped>
.t1 {
  font-size: 60px;
  font-weight: bold;
  color: #4946d6;
}

.t2 {
  display: inline-block;
  font-size: 160px;
  font-weight: bold;
  color: #e081d4;
  width: 310px;
}
</style>
