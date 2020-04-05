<template>
  <div class="drawer" :class="{'open':visible}">
    <div class="mask" @click="hideDrawer"></div>
    <div class="content"></div>
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
  methods: {
    hideDrawer() {
      this.$emit('hide',false)
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
      top: 0;
    }
  }
  .content {
    position: fixed;
    width: 100%;
    height: 30%;
    top: -30%;
    left: 0;
    background-color: pink;
    transition: all 0.5s ease;
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