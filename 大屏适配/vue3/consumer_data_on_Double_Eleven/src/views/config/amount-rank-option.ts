// 人均消费金额排名柱状图配置
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

export const amountRankOption: EChartsOption = {
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
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      barWidth: 20
    }
  ]
}
