<template>
  <div class="tab-switch">
    <v-tab defaultKey="1" @on-click="changeTab">
      <v-tab-pane actKey="1" label="全部">
        <div>页面1</div>
      </v-tab-pane>
      <v-tab-pane actKey="2" label="推荐">
        <div>页面2</div>
      </v-tab-pane>
      <v-tab-pane actKey="3" label="最新">
        <div>页面3</div>
        <v-test>好好学习 天天向上</v-test>
      </v-tab-pane>
    </v-tab>
  </div>
</template>

<script>
import VTest from '@/components/Test.vue'
import VTab from '@/components/TabSwitch/Tabs.vue'
import VTabPane from '@/components/TabSwitch/TabPane.vue'
export default {
  components: {
    VTest,
    VTab,
    VTabPane
  },
  props: {},
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
    changeTab(item, index) {
      //调数据
      console.log(item, index)
    }
  },
  filter() {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
/* .tab-switch {
  width: 500px;
  height: 400px;
  background-color: aliceblue;
} */
</style>