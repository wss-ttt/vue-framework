<template>
  <div class="tab-switch">
    <v-tab defaultKey="1" @on-click="changeTab">
      <v-tab-pane tabKey="0" label="全部">
        <div>页面1</div>
      </v-tab-pane>
      <v-tab-pane tabKey="1" label="推荐">
        <div>页面2</div>
      </v-tab-pane>
      <v-tab-pane tabKey="2" label="最新">
        <div>页面3</div>
      </v-tab-pane>
    </v-tab>
  </div>
</template>

<script>
import VTest from '@/components/000-Test/Test.vue'
import VBox from '@/components/000-Test/Box.vue'
import VItem from '@/components/000-Test/Item.vue'
import VTab from '@/components/001-TabSwitch/Tabs.vue'
import VTabPane from '@/components/001-TabSwitch/TabPane.vue'
export default {
  components: {
    VTest,
    VBox,
    VItem,
    VTab,
    VTabPane
  },
  props: {},
  data() {
    return {
      name: 'active'
    }
  },
  created() {},
  mounted() {
    //   console.log('当前页面的子组件实例:',this.$children)
    //   console.log('当前页面的父组件实例:',this.$parent)
  },
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
.tab-switch {
  width: 700px;
  height: 400px;
  background-color: aliceblue;
}
</style>