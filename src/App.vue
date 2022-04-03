<template>
  <div id="app">
    <my-a></my-a>
    <modal 
      :showModal.sync="showModal"
      modalType="small" 
      title="默认标题"
      btnType="3"
      @submit="modalSubmit"
      @cancel="modalCancel"
      >
        <template v-slot:body>
          <p>商品添加成功!</p>
        </template>
      </modal>
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
        showModal:true,
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
      modalSubmit(vm){
        this.showModal = false
        console.log('modal confirm')
        // console.log('vm',vm)
      },
      modalCancel(){
        this.showModal = false
        console.log('modal cancel')
      }
    }
  }
</script>

<style lang="scss">
  @import "@/assets/scss/reset.scss";
</style>
