<template>
  <div>
    <base-table :list="list2">
      <thead>
        <tr>
          <th>id</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </thead>
    </base-table>
    <!-- <div v-for="(item,index) in person" :key="index">{{item}}-{{index}}</div> -->
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
      person: {
        id: 1,
        name: '张三',
        age: 18
      },
      list: [
        [
          {
            row: 2,
            val: '1'
          },
          {
            val: '2'
          },
          {
            val: '1'
          },
          {
            val: '2'
          }
        ],
        [
          {
            val: '2'
          },
          {
            val: '1'
          },
          {
            val: '2'
          }
        ],
        [
          {
            col: 2,
            val: '2'
          },
          {
            val: '1'
          },
          {
            val: '2'
          }
        ]
      ],
      list2: [
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
        }
      ]
    }
  },
  computed: {},
  methods: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
</style>