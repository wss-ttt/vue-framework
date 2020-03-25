<template>
  <div class="table-wrap">
    <table class="base-table">
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
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
table {
  width: 100%;
}

table td,
table th {
  height: 48px;
  font-size: 24px;
  line-height: 36px;
  padding: 10px;
  color: #25262a;
  text-align: center;
  border: 1px solid #fff;
  vertical-align: middle;
}

table thead tr {
  background: #d1e4ef;
  th {
    height: 56px;
  }
}

table tbody tr {
  background: #e4eef2;
}

table tbody tr:nth-child(2n) {
  background: #e3eef5;
}
</style>