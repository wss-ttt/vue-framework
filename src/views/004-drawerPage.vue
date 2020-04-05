<template>
  <div class="wrapper">
    <button type="button" @click="visible = true">打开</button>
    <v-drawer :visible="visible" @hide="hide"></v-drawer>
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
  methods: {
    hide(){
      this.visible = false
    }
  },
  filter: {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
</style>