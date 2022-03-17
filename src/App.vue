<template>
  <div id="app">
    <my-a></my-a>
    <router-view />
  </div>
</template>

<script>
  export default {
    name:'app',
    components:{

    },
    data(){
      return{

      }
    },
    mounted(){  
      const mock = true
      if(mock){
        let req =  require.context('../public/mock',true,/\.js$/)
        // require('../public/mock/api.js')
        // require('../public/mock/product/hearderProduct')
        req.keys().forEach(path=>{
          req(path).default || req(path)
        })
      }
      this.$global.sayHello()
    },
    methods:{

    }
  }
</script>

<style lang="scss">
  @import "@/assets/scss/reset.scss";
</style>
