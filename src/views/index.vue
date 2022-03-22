<template>
    <div>
        <div class="carousel">
            <div class="container">
                <div class="left">
                    <div class="menu-left">
                        <ul class="menu-left-ul">
                            <li class="menu-left-li"  v-for="(item,index) in carouselLeftList" :key="index">
                                <a href="javascript:;">{{item.menuName}}
                                    <div class="menu-right">
                                        <ul class="menu-right-ul" v-for="(item2,index2) in item.menuItems" :key="index2">
                                            <li class="menu-right-li"  v-for="(item3,index3) in item2" :key="index3">
                                                <a href="">
                                                    <img :src="item3.productImg" alt="">
                                                    <p>{{item3.productName}}</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a></li>
                            <!-- <li class="menu-left-li"><a href="javascript:;">电视
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">笔记本 平板
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">家电
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">出行 穿戴
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">智能 路由器
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">电源 配件
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">健康 儿童
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">耳机 音箱
                                    <div class="menu-right"></div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;" key="2">生活 箱包
                                    <div class="menu-right"></div>
                                </a></li> -->
                        </ul>
                    </div>
                </div>
            <div class="right">
                <el-carousel height="150px">
                    <el-carousel-item v-for="(item,index) in carouselRightList" :key="index">
                        <div class="carousel">
                            <a href="">
                                <img :src="item.imgUrl" alt="">
                            </a>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"index", // 首页
    data(){
        return {
            carouselLeftList:[],
            carouselRightList:[],
        }
    },
    mounted(){
        this.getCarouselLeft()
        this.getCarouselRight()
    },
    methods:{
        getCarouselLeft(){
          this.$global.axios.get('/carousel/left').then((res)=>{
              if(res.status === 0) {
                this.carouselLeftList = res.data.list
                if(this.carouselLeftList.length > 10){
                    this.carouselLeftList.splice(10,this.carouselLeftList.length)
                }
                this.carouselLeftList.forEach((item)=>{
                    let arr = []
                    for(let i=0;i<4;i++){
                        if(item.menuItems.length>0){
                            arr.push(item.menuItems.splice(0,6))
                        }
                    }
                    item.menuItems = arr
                    // this.$forceUpdate();    
                })
                    //   console.log('====carouselLeftList',this.carouselLeftList)
              }
              
          })
      },
      getCarouselRight(){
          this.$global.axios.get('/carousel/right').then((res)=>{
              console.log('---res',res)
              if(res.status === 0){
                  this.carouselRightList = res.data.list
                  console.log('carouselRightList',this.carouselRightList)
              }
          })
      }
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .carousel{
        .container{
            height: 450px;
            // background-color: aquamarine;
            position: relative;
            .left{
                position: absolute;
                top:0px;
                left: 0px;
                width: 1226px;
                height: 400px;
                padding-top: 25px;
                padding-bottom: 25px;
                background: rgba(105,101,101,.6);
                .menu-left{
                    .menu-left-ul{
                        width: 150px;
                        height: 400px;
                        .menu-left-li{
                            display: block;
                            padding-left: 20px;
                            height: 40px;
                            width: 130px;
                            line-height: 40px;
                            &:before{
                                .menu-right{
                                    display: none;
                                }
                            }
                            &:hover{
                                background-color: #FF6700;
                                .menu-right{
                                    display: block;
                                }
                                cursor: pointer;
                            }
                            a{
                                color: #fff;
                            }
                            .menu-right{
                                display: none;
                                width: 1076px;
                                height: 450px;
                                position: absolute;
                                top: 0;
                                left: 150px;
                                z-index:2;
                                // border: 1px solid lawngreen;
                                // box-shadow: 0 0 1px red ;
                                background-color: #fff;
                                .menu-right-ul{
                                    width:269px;
                                    height: 450px;
                                    // background-color: rgb(235, 52, 52);
                                    display: inline-block;
                                    .menu-right-li{
                                        float: float;
                                        height: 35px;
                                        width:233px;
                                        padding: 20px 18px;
                                        font-size: 14px;
                                        // background-color: rgba(222, 231, 231,0.5);
                                        a{
                                            // display: inline-block;
                                            float: left;
                                            width: 233px;
                                            height: 35px;
                                            color: #333;
                                            // background-color: antiquewhite;
                                            line-height: 35px;
                                            img{
                                                // display: block;
                                                float: left;
                                                width: 30px;
                                                height: 35px;
                                                margin-left:10px;
                                                margin-right:10px;
                                            }
                                            p{
                                                float: left;
                                                width: 172px;
                                                height: 35px;
                                                // background-color: red;
                                                line-height: 35px;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
            }
            .right{
                // display: inline-block;
                position: absolute;
                top: 0;
                left: 150px;
                width:1076px;
                height: 450px;
                
                z-index: 1;
                /deep/ .el-carousel{
                    width:inherit;
                    height: inherit;
                    // background-color: darkcyan;
                }
                /deep/ .el-carousel__container{
                    width:inherit;
                    height: inherit !important;
                    background-color: darkcyan;
                }
                /deep/ .el-carousel__button{
                    background-color:#333 !important;
                }
                .carousel{
                    height: inherit;
                    width: inherit;
                    a{
                        display: inline-block;
                        height: inherit;
                        width: inherit;
                        img{
                            display: inline-block;
                            height: inherit;
                            width: inherit;
                            // background-color: rgb(182, 206, 98);
                        }
                    }
                }
            }
        }
    }
</style>