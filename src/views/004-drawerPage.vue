<template>
  <div class="wrapper">
    <button @click="visible = true">打开抽屉</button>
    <v-drawer :visible="visible"></v-drawer>
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
      visible: false,
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