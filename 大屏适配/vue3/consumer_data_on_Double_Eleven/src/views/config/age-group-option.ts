// 老年人群平均消费金额散点图配置
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

export const ageGroupOption: EChartsOption = {
  xAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  },
  yAxis: {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    },
    scale: true
  },
  series: [
    {
      type: 'scatter',
      name: 'Top1',
      data: [
        [28604, 77],
        [31163, 77.4],
        [1516, 68],
        [13670, 74.7],
        [28599, 75],
        [29476, 77.1],
        [31476, 75.4],
        [28666, 78.1],
        [1777, 57.7],
        [29550, 79.1],
        [2076, 67.9],
        [12087, 72],
        [24021, 75.4],
        [43296, 76.8],
        [10088, 70.8],
        [19349, 69.6],
        [10670, 67.3],
        [26424, 75.7],
        [37062, 75.4]
      ],
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(120, 36, 50, 0.5)',
        shadowOffsetY: 5,
        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
          {
            offset: 0,
            color: 'rgb(251, 118, 123)'
          },
          {
            offset: 1,
            color: 'rgb(204, 46, 72)'
          }
        ])
      }
    }
  ]
}
