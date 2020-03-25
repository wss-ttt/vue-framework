<template>
  <div class="table-wrap">
    <table class="base-table" :style="{width:width && width + 'px'}">
      <slot></slot>
      <tbody>
        <tr v-for="(tr,i) in list" :key="i">
          <td v-for="(td,j) in tr" :key="j">{{td}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array
    },
    data: {
      type: Array
    },
    width: {
      type: Number
    },
    border: {
      type: Boolean,
      default: true
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
table {
  width: 100%;
  border-collapse: collapse;
  color: #909399;
}
table tr {
  border-bottom: 1px solid #ebeef5;
}
table tr td,
table tr th {
  padding: 12px 0;
  text-align: center;
}
table tr th {
  font-weight: 700;
}
table tr td {
  font-weight: 400;
}
</style>