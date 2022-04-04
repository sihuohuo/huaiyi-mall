<template>
    <div>
        <div class="product" :class="{'is-fixed':isFixed}">product</div>
        <div style="height:150px;background-color:rgb(170, 202, 248);" v-for="item in 9" :key="item">1111</div>
    </div>
</template>

<script>
export default {
    name:'productParam',
    data(){
        return{
            isFixed: false
        }
    },
    mounted(){
        // 给页面添加scroll时间
        window.addEventListener('scroll',this.initHeight)
        
    },
    methods:{
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop > 158 ? true : false
        }
    },
    destroyed(){
        // 第三个参数false 冒泡
        window.removeEventListener('scroll',this.initHeight,false)
    }
}
</script>

<style lang="scss" scoped>
    .product{
        background-color: rgb(165, 243, 217);
        &.is-fixed{
            position: fixed;
            top: 0;
            height: 50px;
            width: 100%;
            box-shadow: 0px 1px 10px 1px #666;
            z-index: 10;
        }
    }
</style>