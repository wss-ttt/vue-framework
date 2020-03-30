<template>
  <div class="wrapper">
    <button @click="display = true">打开抽屉</button>
    <v-drawer :display.sync="display" :inner="true" :width="drawerWidth" :mask="false"></v-drawer>
  </div>
</template>

<script>
import VDrawer from '@/components/004-Drawer/index'
export default {
  components: {
    VDrawer
  },
  props: {},
  data() {
    return {
      display: false,
      drawerWidth: '500px'
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