<!-- echarts -->
<template>
  <div ref="mainRef" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted, onUnmounted, ref } from 'vue'

interface IProps {
  width?: string
  height?: string
  chartOption: echarts.EChartsOption
}
const props = withDefaults(defineProps<IProps>(), {
  width: '100%',
  height: '100%'
})

const mainRef = ref(null)

let myChart: echarts.ECharts | null = null
onMounted(() => {
  myChart = echarts.init(mainRef.value, 'dark', { renderer: 'svg' })
  const option = props.chartOption
  myChart.setOption(option)
})

onUnmounted(() => {
  // 销毁 echart 实例，释放资源
  myChart?.dispose()
})
</script>
