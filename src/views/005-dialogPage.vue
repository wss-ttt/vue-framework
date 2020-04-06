<template>
  <div class="dialog-page">
    <button type="button" @click="visible=true">打开</button>
    <v-dialog title="提示" :visible="visible" :appendToBody="true" width="300px" top="100px">
      <h1>好好学习 天天向上</h1>
      <div slot="footer">
        <button @click="visible=false">关闭</button>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import VDialog from '@/components/005-Dialog/index'
export default {
  components: {
    VDialog
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
  filter: {},
  computed: {},
  watch: {}
}
</script>
<style scoped>
</style>