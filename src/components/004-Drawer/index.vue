<template>
  <div class="drawer" :class="{'open':visible}">
    <div class="mask"></div>
    <div class="content">好好学习</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
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
  methods: {},
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped lang="scss">
.drawer {
  &.open {
    .mask {
      display: block;
    }
  }
  .content {
    position: absolute;
    background-color: #fff;
    top: 0;
    right: 0;
    bottom: 0;
    widows: 30%;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(134, 124, 124, 0.5);
    display: none;
  }
}
</style>