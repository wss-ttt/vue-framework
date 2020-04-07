<template>
  <div>
    <base-table :list="list" :width="width" hover stripe @on-click="handler">
      <thead>
        <tr>
          <th>id</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </thead>
    </base-table>
  </div>
</template>
<script>
import BaseTable from '@/components/002-BaseTable/index'
export default {
  components: {
    BaseTable
  },
  data() {
    return {
      width: 500,
      list: [
        {
          id: 1,
          name: '乔峰',
          age: 18
        },
        {
          id: 2,
          name: '杨过',
          age: 19
        },
        {
          id: 3,
          name: '小龙女',
          age: 20
        },
        {
          id: 4,
          name: '张三',
          age: 21
        }
      ]
    }
  },
  computed: {},
  methods: {
    handler(item, index) {
      console.log(item, index)
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
</style>