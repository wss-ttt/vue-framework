<template>
  <div class="drawer" :class="{'open':visible}">
    <div class="mask" @click="hideDrawer"></div>
    <div class="content" :class="direction">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'right'
    }
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    hideDrawer() {
      this.$emit('hide', false)
    }
  },
  filter: {},
  computed: {},
  watch: {}
}
</script>
<style scoped lang="scss">
.drawer {
  position: relative;
  &.open {
    .mask {
      display: block;
    }
    .content {
      &.right {
        right: 0;    
      }
      &.left {
        left: 0;
      }
      &.top {
        top: 0;
      }
      &.bottom {
        bottom: 0;
      }
    }
  }
  .content {
    position: fixed;
    background-color: pink;
    // 这里不能使用过度效果,横向和纵向进行切换时,就会有问题了
    // transition: all 0.5s ease;  
    &.right {
      width: 30%;
      height: 100%;
      top: 0;
      bottom: 0;
      right: -30%;
    }
    &.left {
      width: 30%;
      height: 100%;
      top: 0;
      bottom: 0;
      left: -30%;
    }
    &.top {
      width: 100%;
      height: 30%;
      left: 0;
      top: -30%;
    }
    &.bottom{
      width: 100%;
      height: 30%;
      left: 0;
      bottom:-30%;
    }
  }
  .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
  }
}
</style>