<template>
    <div class="box">
       
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
      console.log('box的父组件实例是:',this.$parent)
      // console.log('box的子组件实例是:',this.$children)
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
.box{
    width:100px;
    height: 100px;
    background-color: pink;
    border:1px solid #000;
}
</style>