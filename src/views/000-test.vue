<template>
  <div class="test">
    <button @click="drawer = true">打开</button>
    <el-drawer :visible.sync="drawer" :modal="true"></el-drawer>
    <!-- 模仿element-ui的结构 -->
    <!-- <div class="drawer-wrapper">
        <div class="drawer-container">
            <div class="drawer"></div>
        </div>
    </div> -->
    <div class="box">aaaa</div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      drawer: false
    }
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {}
}
</script>
<style scoped lang="scss">
.box{
  width: px2rem(100px);
  height: 100px;
  border:1px solid #ccc;
  color:$color;
}
</style>