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
    hover:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      trs: []
    }
  },
  mounted() {
    var table = document.querySelector('.base-table')
    var tbody = table.getElementsByTagName('tbody')[0]
    var trs = tbody.getElementsByTagName('tr')
    this.trs = trs
    this.hover && this.trHover()
  },
  methods: {
    trHover() {
      var self = this
      var trs = this.trs

      var i = 0,len = trs.length
      for (; i < len; i++) {
        trs[i].onmouseover = function() {
          self.itemChange(this)
        }
      }
    },
    itemChange(item) {
      var self = this
      var trs = this.trs

      var i = 0,len = trs.length
      for (; i < len; i++) {
        trs[i].style.backgroundColor = '#fff'
      }
      item.style.backgroundColor = '#f5f7fa'
    }
  }
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
table tbody tr {
  transition: background-color .25s ease;
}
table tr th {
  font-weight: 700;
}
table tr td {
  font-weight: 400;
}
</style>