<template>
  <!-- 首页组件 -->
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover"
                 class="mgb20"
                 style="height:252px;">
          <div class="user-info">
            <img src="../../assets/img/img.jpg"
                 class="user-avator"
                 alt="" />
            <div class="user-info-cont">
              <div class="user-info-name">{{ name }}</div>
              <div>{{ role }}</div>
            </div>
          </div>
          <div class="user-info-list">上次登录时间：<span>2021-03-09</span></div>
          <div class="user-info-list">上次登录地点：<span>北京</span></div>
        </el-card>
        <el-card shadow="hover"
                 style="height:252px;">
          <div slot="header"
               class="clearfix">
            <span>语言详情</span>
          </div>
          Vue
          <el-progress :percentage="71.3"
                       color="#42b983"></el-progress>
          JavaScript
          <el-progress :percentage="24.1"
                       color="#f1e05a"></el-progress>
          CSS
          <el-progress :percentage="3.7"></el-progress>
          HTML
          <el-progress :percentage="0.9"
                       color="#f56c6c"></el-progress>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20"
                class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover"
                     :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-1">
                <i class="el-icon-lx-people grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">1234</div>
                  <div>用户访问量</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover"
                     :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-2">
                <i class="el-icon-lx-notice grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">321</div>
                  <div>系统消息</div>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover"
                     :body-style="{ padding: '0px' }">
              <div class="grid-content grid-con-3">
                <i class="el-icon-lx-goods grid-con-icon"></i>
                <div class="grid-cont-right">
                  <div class="grid-num">5000</div>
                  <div>数量</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-card shadow="hover"
                 style="height:403px;">
          <div slot="header"
               class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0"
                       type="text">添加</el-button>
          </div>
          <el-table :data="todoList"
                    :show-header="false"
                    height="304"
                    style="width: 100%;font-size:14px;">
            <el-table-column width="40">
              <!--  slot-scope：作用域插槽，已经废弃。现在使用v-slot代替  -->
              <template v-slot:default="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template v-slot:default="scope">
                <div class="todo-item"
                     :class="{ 'todo-item-del': scope.row.status }">{{ scope.row.title }}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <!-- v-slot:default="scope" -->
              <template>
                <i class="el-icon-edit"></i>
                <i class="el-icon-delete"></i>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <div ref="pieRef"
               id="pie"
               class="main-chart"></div>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover">
          <div ref="lineRef"
               id="line"
               class="main-chart"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bus from '../../utils/bus';
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent, TitleComponent, ToolboxComponent, GridComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { UniversalTransition } from 'echarts/features';
import { LineChart } from 'echarts/charts';
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
  GridComponent,
  ToolboxComponent,
  LineChart,
  UniversalTransition
]);
export default {
  name: 'dashboard',
  data () {
    return {
      name: localStorage.getItem('ms_username'),
      todoList: [
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: false
        },
        {
          title: '今天要修复100个bug',
          status: true
        },
        {
          title: '今天要写100行代码加几个bug吧',
          status: true
        }
      ],
      data: [
        {
          name: '2021/09/04',
          value: 1083
        },
        {
          name: '2021/09/05',
          value: 941
        },
        {
          name: '2021/09/06',
          value: 1139
        },
        {
          name: '2021/09/07',
          value: 816
        },
        {
          name: '2021/09/08',
          value: 327
        },
        {
          name: '2021/09/09',
          value: 228
        },
        {
          name: '2021/09/10',
          value: 1065
        }
      ],
      pieChart: {},
      lineChart: {},
      option: {
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
    };
  },
  computed: {
    role () {
      return this.name === 'coder' ? '超级管理员' : '普通用户';
    }
  },
  created () {
    this.handleListener();
    this.changeDate();
  },
  // 在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发
  activated () {
    this.handleListener();
  },
  mounted () {
    this.renderChart();
  },
  deactivated () {
    window.removeEventListener('resize', this.renderChart);
    bus.$off('collapse', this.handleBus);
  },
  methods: {
    changeDate () {
      const now = new Date().getTime(); // getTime()获取1970.1.1至今的毫秒数
      this.data.forEach((item, index) => {
        const date = new Date(now - (6 - index) * 86400000); // 将data中的模拟数据转化为当前日期为基准的时间
        item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`; // 将毫秒数转化为对应的日期时间，并赋给data.name, getMonth返回的是0~11，所以要加1
      });
    },
    handleListener () {
      // 通过bus监听事件，在接受数据后调用resizeHandle方法
      bus.$on('collapse', this.resizeHandle);
      // 通过事件监听，判断浏览器尺寸，调用resizeHandle方法对图标进行重新渲染
      window.addEventListener('resize', this.resizeHandle);
    },
    handleBus (msg) {
      setTimeout(() => {
        this.renderChart();
      }, 300);
    },
    // 渲染图表
    renderChart () {
      this.pieChart = echarts.init(document.getElementById("pie"));
      this.lineChart = echarts.init(document.getElementById("line"));
      this.pieChart.setOption(this.option, true);
      this.lineChart.setOption(this.option2, true);
    }
  }
};

</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  display: flex;
  align-items: center;
  height: 100px;
}

.grid-cont-right {
  flex: 1;
  text-align: center;
  font-size: 14px;
  color: #999;
}

.grid-num {
  font-size: 30px;
  font-weight: bold;
}

.grid-con-icon {
  font-size: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: #fff;
}

.grid-con-1 .grid-con-icon {
  background: rgb(45, 140, 240);
}

.grid-con-1 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-2 .grid-con-icon {
  background: rgb(100, 213, 114);
}

.grid-con-2 .grid-num {
  color: rgb(45, 140, 240);
}

.grid-con-3 .grid-con-icon {
  background: rgb(242, 94, 67);
}

.grid-con-3 .grid-num {
  color: rgb(242, 94, 67);
}

.user-info {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #ccc;
  margin-bottom: 20px;
}

.user-avator {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user-info-cont {
  padding-left: 50px;
  flex: 1;
  font-size: 14px;
  color: #999;
}

.user-info-cont div:first-child {
  font-size: 30px;
  color: #222;
}

.user-info-list {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}

.user-info-list span {
  margin-left: 70px;
}

.mgb20 {
  margin-bottom: 20px;
}

.todo-item {
  font-size: 14px;
}

.todo-item-del {
  text-decoration: line-through;
  color: #999;
}

.main-chart {
  width: 100%;
  height: 300px;
}
</style>