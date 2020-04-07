<template>
  <div class="aa">
    <div v-for="(item,index) in list" :key="index" class="info">
      姓名:{{item.name}}
      <br />
      age:{{item.age}}
    </div>
    <button type="button" @click="change">改变数据</button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    arr: {
      type: Array
    }
  },
  data() {
    return {
      list: this.arr
    }
  },
  beforeCreate() {
    //   debugger
    // console.log('beforeCreate',this.arr)
  },
  created() {
    //   debugger
    console.log('created',this.arr)
  },
  mounted() {
    // 对数据进行过滤
    this.list = this.list.filter(item => {
      if (item.age > 20) {
        return true
      }
      return false
    })
  },
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    change() {
      this.list.push({
        name: '张三',
        age: 19
      })
    }
  },
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
.info {
  padding: 15px;
  border: 1px solid #ccc;
}
</style>