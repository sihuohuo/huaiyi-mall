<template>
  <div class="home">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
    <!-- <el-button type="primary" @click="testRequest">测试axios请求</el-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NavHeader from '@/components/common/NavHeader.vue'
import NavFooter from '@/components/common/NavFooter.vue'

export default {
  name: "home",
  components: {
    NavHeader,
    NavFooter
  },
  data(){
    return {
    }
  },
  mounted(){
    let p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("定时器模拟异步请求")
        resolve("接口返回的数据")
      },1000)
    })
    p.then(res=>{
      console.log(res)
    })
    this.$store.dispatch('saveUserMsg')
  },
  methods:{
    testRequest(){
      this.$global.axios.get('/user/login').then((res)=>{
        console.log(res)
      })
    }
  }
};
</script>
