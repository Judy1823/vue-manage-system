<template>
  <!-- EChart图表组件 -->
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-pie-chart"></i> chart图表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="plugins-tips">
        使用Echarts开发的图表组件。
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="content-title">柱状图</div>
          <el-card shadow="hover">
            <div ref="barRef"
                 id="bar"
                 class="chart-item"></div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <div class="content-title">折线图</div>
          <el-card shadow="hover">
            <div ref="lineRef"
                 id="line"
                 class="chart-item"></div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="content-title">饼状图</div>
          <el-card shadow="hover">
            <div ref="pieRef"
                 id="pie"
                 class="chart-item"></div>
          </el-card>
        </el-col>
        <el-col :span="16">
          <div class="content-title">雷达图</div>
          <el-card shadow="hover">
            <div ref="radarRef"
                 id="radar"
                 class="chart-item"></div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import bus from '../../utils/bus';
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent, TitleComponent, ToolboxComponent, GridComponent } from 'echarts/components';
import { PieChart, BarChart, RadarChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { UniversalTransition } from 'echarts/features';
import { LineChart } from 'echarts/charts';
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  BarChart,
  RadarChart,
  CanvasRenderer,
  LabelLayout,
  GridComponent,
  ToolboxComponent,
  LineChart,
  UniversalTransition
]);
export default {
  name: 'basecharts',
  data: () => ({
    pieChart: {},
    lineChart: {},
    barChart: {},
    radarChart: {},
    option1: {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    },
    option2: {
      title: {
        text: 'Stacked Area Chart'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    },
    option3: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    },
    option4: {
      title: {
        text: 'Basic Radar Chart'
      },
      legend: {
        data: ['Allocated Budget', 'Actual Spending']
      },
      radar: {
        // shape: 'circle',
        indicator: [
          { name: 'Sales', max: 6500 },
          { name: 'Administration', max: 16000 },
          { name: 'Information Technology', max: 30000 },
          { name: 'Customer Support', max: 38000 },
          { name: 'Development', max: 52000 },
          { name: 'Marketing', max: 25000 }
        ]
      },
      series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000, 18000],
              name: 'Allocated Budget'
            },
            {
              value: [5000, 14000, 28000, 26000, 42000, 21000],
              name: 'Actual Spending'
            }
          ]
        }
      ]
    }
  }),
  created () {
    this.handleListener();
  },
  activated () {
    this.handleListener();
  },
  mounted () {
    this.renderChart()
  },
  deactivated () {
    window.removeEventListener('resize', this.renderChart);
    bus.$off('collapse', this.handleBus);
  },
  methods: {
    handleListener () {
      bus.$on('collapse', this.resizeHandle);
      // 调用renderChart方法对图表进行重新渲染
      window.addEventListener('resize', this.resizeHandle);
    },
    resizeHandle () {
      this.pieChart.resize()
      this.lineChart.resize()
      this.radarChart.resize()
      this.barChart.resize()
    },
    handleBus (msg) {
      setTimeout(() => {
        this.renderChart();
      }, 300);
    },
    renderChart () {
      this.pieChart = echarts.init(document.getElementById("pie"));
      this.lineChart = echarts.init(document.getElementById("line"));
      this.barChart = echarts.init(document.getElementById("bar"));
      this.radarChart = echarts.init(document.getElementById("radar"), 'dark');
      this.pieChart.setOption(this.option1, true);
      this.lineChart.setOption(this.option2, true);
      this.barChart.setOption(this.option3, true);
      this.radarChart.setOption(this.option4, true)
    }
  }
}
</script>

<style scoped>
.chart-box {
  display: inline-block;
  margin: 20px;
}
.chart-item {
  width: 100%;
  height: 400px;
}
.content-title {
  clear: both;
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
</style>