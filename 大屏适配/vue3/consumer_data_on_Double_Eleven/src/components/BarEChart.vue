<!-- 柱状图 -->
<template>
  <div ref="mainRef" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

interface IProps {
  width?: string
  height?: string
}
withDefaults(defineProps<IProps>(), {
  width: '100%',
  height: '100%'
})

const mainRef = ref(null)

onMounted(() => {
  const myChart = echarts.init(mainRef.value, 'dark', { renderer: 'svg' })

  var option = {
    grid: {
      top: 20,
      bottom: 50,
      left: 40,
      right: 40
    },
    xAxis: {
      axisTick: {
        show: false
      },
      data: ['思明', '湖里', '集美', '同安', '海沧', '翔安']
    },
    yAxis: {
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
        barWidth: 20
      }
    ]
  }

  myChart.setOption(option)
})
</script>

<style scoped></style>
