// 人购买力最强区/街道柱状图配置
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

export const strongestPurchasingOption: EChartsOption = {
  grid: {
    top: 20,
    bottom: 30,
    left: 90,
    right: 40
  },
  xAxis: {
    max: 65,
    axisLabel: {
      show: false
    },
    splitLine: {
      show: false
    }

  },
  yAxis: {
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      margin: 30
    },
    data: ['鹭江', '湖里', '金山', '开元', '滨北'],
    splitLine: {
      show: false
    }
  },
  series: [
    {
      type: 'bar',
      barWidth: 10,
      stack: 'purchasing',
      itemStyle: {
        color: "#5178B4"
      },
      data: [15, 20, 36, { value: 50, itemStyle: { color: '#369BC9' } }, { value: 65, itemStyle: { color: '#E081D6' } }],
    },
    {
      type: 'bar',
      barWidth: 10,
      stack: 'purchasing',
      itemStyle: {
        color: "#605B69"
      },
      data: [50, 45, 29, 15, 0], // 值为 xAxis.max - 上一个对象的 data 里的对应项
    }
  ]
}
