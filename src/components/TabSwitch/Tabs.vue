<template>
  <div class="tabs">
    <div class="tab-title">
      <div ref="line" class="tab-line"></div>
      <div
        :class="activeKey == item.tabKey? 'is-active' : ''"
        class="tab"
        @click="changeTab($event,item,index)"
        v-for="(item,index) in childList"
        :key="index"
      >{{item.label}}</div>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
let self
export default {
  data() {
    return {
      childList: [],
      activeKey: this.defaultKey, //将初始化tab赋值给activeKey
      slideWidth: 0
    }
  },
  //默认显示哪个tab
  props: {
    defaultKey: {
      type: String,
      default: '0' // 设置默认值
    }
  },
  created() {
    self = this
  },
  mounted() {
    // 保存子组件实例
    self.childList = this.$children // 动态获取子组件实例
    //设置滑动距离。平分设备宽度
    self.slideWidth = window.innerWidth / this.childList.length
    //设置状态线初始化滑动位置
    self.$refs.line.style.width = this.slideWidth + 'px'
  },
  methods: {
    //切换tab触发事件
    changeTab: (event, item, index) => {
      self.activeKey = item.tabKey
      self.$refs.line.style.transform =
        'translateX(' + self.slideWidth * index + 'px)'
      self.$emit('on-click', item, index) //将切换tab的事件暴露给父组件
    },
    //初始化时tab状态设置与相应内容显示
    updateNav: () => {
      self.$children.forEach((item, index) => {
        if (item.tabKey == self.activeKey) {
          item.show = true
          self.$nextTick(function() {
            self.$refs.line.style.transform =
              'translateX(' + self.slideWidth * index + 'px)'
          })
        } else {
          item.show = false
        }
      })
    }
  },
  watch: {
    //监听当前tab,显示相应内容
    activeKey() {
      self.$children.map(item => {
        if (item.tabKey == self.activeKey) {
          item.show = true
        } else {
          item.show = false
        }
      })
    }
  }
}
</script>
<style scope lang="scss">
.tab-title {
  /*使用弹性布局*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #f6f6f6;
  position: relative;

  .tab {
    color: #333;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    cursor: pointer;
    &.active-tab {
      color: #158ef3;
      height: 50px;
      font-weight: bold;
      line-height: 50px;
      font-size: 16px;
    }
    &.is-active {
      color: #158ef3;
    }
  }
}
.tab-line {
  /*使用绝对定位  -> 因为需要移动*/
  position: absolute;
  left: 0;
  height: 2px;
  background-color: #158ef3;
  top: 100%;
  transition: transform 0.3s ease;
}
</style>