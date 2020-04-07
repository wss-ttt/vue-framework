<template>
  <div v-if="show">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false //初始时将所有内容隐藏
    }
  },
  props: {
    tabKey: {
      type: String,
      default: '0'   // 默认为0
    },
    label: {
      type: String,
      default: ''
    }
  },
  mounted() {
    this.$parent.updateNav()
  }
}
</script>