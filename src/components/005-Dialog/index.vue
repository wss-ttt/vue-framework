<template>
  <div class="dialog-wrapper" v-show="visible" :style="[{'z-index':zIndex}]">
    <div class="dialog" :style="style">
      <div class="dialog-header">{{title}}</div>
      <div class="dialog-body">
        <slot></slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: true
    },
    appendToBody: {  // 是否添加至body节点下面
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width:{
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default:'10vh'
    }
  },
  data() {
    return {
      zIndex: 0,
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
  computed: {
    style(){
      var style = {};
      // 合并传递进来的样式
      style.marginTop = this.top
      style.width = this.width
      return style
    }
  },
  watch: {
    // visible数据改变会执行这个函数
    visible(val) {
      if (val) {
        if (this.appendToBody) {
          document.body.appendChild(this.$el)
        }
        if (this.modal) {
          var modal = document.createElement('div')
          modal.className = 'v-modal'
          modal.style.zIndex = this.zIndex++
          document.body.appendChild(modal)
        }
      } else {
        var modal = document.querySelector('.v-modal')
        modal.parentNode.removeChild(modal)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  .dialog {
    position: relative;
    margin: 0 auto 50px;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 30%;
    background-color: #fff;
    .dialog-header {
      padding: 20px 20px 10px;
    }
    .dialog-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
    }
  }
}
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
}
</style>