<template>
  <div class="card" :class="shadow ? 'is-' + shadow +'-shadow':'is-always-shadow'">
    <div class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    shadow: {
      type: String
    },
    bodyStyle: {},
  }
}
</script>
<style scoped lang="scss">
.card {
  .card-header {
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
  }
  transition: 0.3s;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  &.is-always-shadow {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  &.is-hover-shadow {
    &:hover,
    &:focus {
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .card-body {
    padding: 20px;
  }
}
</style>