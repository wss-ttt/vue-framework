<template>
    <div class="counter">
        <div class="counter_btn" @click="onMinus">-</div>
        <div class="counter_val">{{value}}</div>
        <div class="counter_btn" @click="onPlus">+</div>
    </div>
</template>

<script>
  export default {
    components:{},
    props:{
        value:{
            type:Number,
            default:0
        },
        onMinus:Function,  // 类型是一个函数
        onPlus:Function,  //  类型是一个函数
    },
    data(){
      return {
          
      }
    },
    created(){},
    mounted(){},
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
.counter{
  width: 100px;
  text-align: center;
}
.counter_btn{
  width: 100px;
  height: 40;
  line-height: 40px;
  cursor: pointer;
  background-color: aliceblue;
}

</style>