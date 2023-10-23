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
      show: false // 隐藏 x 坐标轴刻度
    },
    data: ['思明', '湖里', '集美', '同安', '海沧', '翔安']
  },
  yAxis: {
    axisLabel: {
      show: false // 隐藏 y 坐标轴刻度标签
    },
    splitLine: {
      show: false // 隐藏平行于 x 轴的分隔线
    }
  },
  series: [
    {
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
      barWidth: 20 // 设置柱形的宽度
    }
  ]
}
