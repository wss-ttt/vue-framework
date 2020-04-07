<template>
    <div class="test">
       <slot>好好学习</slot>
   </div>
</template>

<script>
  export default {
    components:{},
    props:{},
    data(){
      return {
          
      }
    },
    created(){},
    mounted(){
      // console.log(this.$children)
      console.log('test的父组件实例是:',this.$parent)
      // console.log('test的子组件实例:',this.$children)
    },
    activated(){},
    deactivated(){},
    updated(){},
    destroyed(){},
    methods:{},
    filter(){},
    computed:{},
    watch:{},
  }
</script>
<style scoped>
</style>