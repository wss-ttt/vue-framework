<template>
  <div class="wrapper">
    <button type="button" @click="visible = true">打开</button>
    <button type="button" @click="direction = 'left'">left</button>
    <button type="button" @click="direction = 'right'">right</button>
    <button type="button" @click="direction = 'top'">top</button>
    <button type="button" @click="direction = 'bottom'">bottom</button>
    <v-drawer :visible="visible" @hide="hide" :direction="direction">
      <h1>好好学习 天天向上</h1>
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
      visible: false,
      direction: 'right'
    }
  },
  created() {},
  mounted() {},
  activated() {},
  deactivated() {},
  updated() {},
  destroyed() {},
  methods: {
    hide() {
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