<template>
  <div class="table-wrap">
    <table class="base-table" :style="{width:width && width + 'px'}">
      <slot></slot>
      <tbody>
        <tr v-for="(tr,i) in list" :key="i" @click="trClick($event,tr,i)">
          <td v-for="(td,j) in tr" :key="j">{{td}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getStyle } from '@/utils/index.js'
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
    hover: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: false
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
    this.stripe && this.trStripe()
  },
  methods: {
    trHover() {
      var self = this
      var trs = this.trs

      var i = 0,
        len = trs.length,
        color = ''
      for (; i < len; i++) {
        // 鼠标移入
        trs[i].onmouseover = function() {
          // 保存之前的颜色
          color = this.style.backgroundColor
          this.style.backgroundColor = '#f5f7fa'
        }
        // 鼠标移出
        trs[i].onmouseout = function() {
          this.style.backgroundColor = color
        }
      }
    },
    trStripe() {
      var self = this
      var trs = this.trs

      var i = 0,
        len = trs.length
      for (; i < len; i++) {
        if (i % 2) {
          // trs[i].classList.add('tr-striped')
          trs[i].style.backgroundColor = '#fafafa'
        } else {
          trs[i].style.backgroundColor = '#fff'
        }
      }
    },
    trClick(e, tr, index) {
      this.$emit('on-click', tr, index)
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
  cursor: pointer;
}
table tr td,
table tr th {
  padding: 12px 0;
  text-align: center;
}
table tbody tr {
  transition: background-color 0.25s ease;
  &.tr-striped {
    background-color: #fafafa;
  }
}
table tr th {
  font-weight: 700;
}
table tr td {
  font-weight: 400;
}
</style>