<template>
    <div class="wrapper">
      <v-card class="card-box" shadow="hover">
          <div slot="header">给我一首歌的时间</div>
          <div v-for="i in 4" :key="i">好好学习</div>
      </v-card> 
   </div>
</template>

<script>
import VCard from '@/components/003-Card'
  export default {
    components:{
        VCard
    },
    props:{},
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
.card-box{
    width: 400px;
}
</style>