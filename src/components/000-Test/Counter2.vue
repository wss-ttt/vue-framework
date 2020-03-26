<template>
  <div class="counter">
    <div class="counter_btn" @click="changeValue(-1)">-</div>
    <div class="counter_val">{{value}}</div>
    <div class="counter_btn" @click="changeValue(1)">+</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentVal: this.value
    }
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    changeValue(val) {
      // val*1 -> 可以将字符串转换为Number类型
      this.currentVal += val * 1
      this.$emit('input', this.currentVal) // 定义input事件
    },
  },
  filter() {},
  computed: {
  },
  watch: {}
}
</script>
<style scoped>
.counter {
  width: 100px;
  text-align: center;
}
.counter_btn {
  width: 100px;
  height: 40;
  line-height: 40px;
  cursor: pointer;
  background-color: aliceblue;
}
</style>