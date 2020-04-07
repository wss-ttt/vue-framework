<template>
    <div class="item">
       <slot></slot>
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
        console.log('item的父组件实例是:',this.$parent)
        // console.log('item的子组件实例是:',this.$children)
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