<template>
  <div class="wrapper">
    <button type="button" @click="visible = true">打开</button>
    <!-- <v-drawer title="测试" :visible.sync="visible" width="500px" close-on-click-modal></v-drawer>例子（完整属性） -->
    <v-drawer
      :visible.sync="visible"
      :headerShow="true"
      header-background="#f5f5f5"
      title-color="#000"
      main-background="#EBEEF5"
      :footerShow="true"
      footer-height="60px"
      footer-background="#f5f5f5"
      width="50%"
      height="300px"
      align="right"
      :modal="true"
      close-on-click-modal
      :loading.sync="loading"
      loadingColor="#ff6700"
      @close="ce"
      @closed="ce"
      @open="ce"
      @opend="ce"
    >
      <div slot="header">
        <p>内容</p>
      </div>
      <div>
        <p>内容</p>
      </div>
      <div slot="footer">
        <p>底部</p>
      </div>
    </v-drawer>
  </div>
</template>

<script>
import VDrawer from '@/components/004-drawer/index'
export default {
  components: {
    VDrawer
  },
  props: {},
  data() {
    return {
      visible: false
    }
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
<style scoped>
</style>