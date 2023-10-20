// 知名品牌/老字号金额 TOP3 环状图配置
import * as echarts from 'echarts'
type EChartsOption = echarts.EChartsOption

export const topBrandsOption: EChartsOption = {
  title: [
    {
      subtext: '双汇',
      left: '16.67%',
      top: '76%',
      textAlign: 'center',
    },
    {
      subtext: '同仁堂',
      left: '50%',
      top: '76%',
      textAlign: 'center'
    },
    {
      subtext: '稻香村',
      left: '83.33%',
      top: '76%',
      textAlign: 'center'
    }
  ],
  series: [
    {
      type: 'pie',
      name: 'Top1',
      radius: ['50%', '70%'],
      data: [
        {
          value: 160,
          itemStyle: {
            color: '#E081D6'
          }
        }, {
          value: 50, itemStyle: {
            color: "#605B69"
          }
        }
      ],
      labelLine: {
        show: false
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{a}',
        fontWeight: 'bold',
        fontSize: 16
      },
      left: 0,
      right: '66.6667%',
      top: -30
    },
    {
      type: 'pie',
      name: 'Top2',
      radius: ['50%', '70%'],
      data: [
        {
          value: 140,
          itemStyle: {
            color: '#369BC9'
          }
        }, {
          value: 50, itemStyle: {
            color: "#605B69"
          }
        }
      ],
      labelLine: {
        show: false
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{a}',
        fontWeight: 'bold',
        fontSize: 16
      },
      left: '33.3333%',
      right: '33.3333%',
      top: -30
    },
    {
      type: 'pie',
      name: 'Top3',
      radius: ['50%', '70%'],
      data: [
        {
          value: 100,
          itemStyle: {
            color: '#5178B4'
          }
        }, {
          value: 50, itemStyle: {
            color: "#605B69"
          }
        }
      ],
      labelLine: {
        show: false
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{a}',
        fontWeight: 'bold',
        fontSize: 16
      },
      left: '66.6667%',
      right: 0,
      top: -30
    }
  ]
}
