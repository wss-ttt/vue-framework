<template>
  <div class="wrapper">
    <div id="main"></div>
    <div class="content">
      <h1>测试发送请求</h1>
      tips:该请求时后端配置了 允许跨域请求
      <br>
      <button type="button" @click="getData">发送请求获取数据</button>
      <hr>
      tip:该请求 在前端进行跨域请求配置
      <br>
      <button type="button" @click="getData2">发送请求获取数据</button>
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    // 测试图表初始
    initChart() {
      let myChart = echarts.init(document.getElementById('main'))
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      })
    },
    getData() {
      // 测试发送请求
      this.$http({
        url:'http://localhost:3000/users/list',// 如果没有配置baseURL,这个地方就写完整的接口地址
        method: 'get',
      }).then((data)=>{
        console.log(data);
      })
    },
    getData2(){
      this.$http({
        url:'/api/users/list',
        method: 'get',
      }).then((data)=>{
        console.log(data);
      })
    }
  },
  created() {},
  mounted() {
    this.initChart()
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  #main{
    height: 240px;
    background-color: antiquewhite;
  }
}
</style>