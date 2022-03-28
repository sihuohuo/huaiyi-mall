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
                <div class="adv-product">
                    <el-row>
                        <el-col :span="4" class="adv-table">
                            <ul>
                                <li>
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="保障服务">
                                        保障服务
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="企业团购">
                                        企业团购
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="F码通道">
                                        F码通道
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="米粉卡">
                                        米粉卡
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="以旧换新">
                                        以旧换新
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="话费充值">
                                        话费充值
                                    </a>
                                </li>
                                <!-- <li>企业团购</li>
                                <li>F码通道</li>
                                <li>米粉卡</li>
                                <li>以旧换新</li>
                                <li>话费充值</li> -->
                            </ul>
                        </el-col>
                        <el-col :span="20" class="adv-product-list">
                            <div class="home-pro-list">
                                <ul>
                                    <li>
                                        <a href="">
                                            <img src="../../public/img/advProduct/advProduct01.jpg" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="../../public/img/advProduct/advProduct02.jpg" alt="">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <img src="../../public/img/advProduct/advProduct03.jpg" alt="">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="home-pro">
            <div class="container">
                <div class="home-pro-title">
                    <h2>手机</h2>
                    <div class="home-pro-title-more">
                        <a href="">
                            查看更多
                            <i class="el-icon-caret-right"></i>
                        </a>
                    </div>
                </div>
                <div class="home-pro-content">
                    <el-row>
                        <el-col span="5" class="left">
                            <a href="">
                                <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                            </a>
                        </el-col>
                        <el-col span="19" class="right">
                            <ul class="brick-list">
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                                <li class="brick-list-item">
                                    <a href="">
                                        <img src="../../public/img/icons/android-chrome-192x192.png" alt="">
                                    </a>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
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
            adsProductList:[],
        }
    },
    mounted(){
        this.getCarouselLeft()
        this.getCarouselRight()
        this.getAdsProduct()
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
            //   console.log('---res',res)
              if(res.status === 0){
                  this.carouselRightList = res.data.list
                //   console.log('carouselRightList',this.carouselRightList)
              }
          })
      },
      getAdsProduct(){
          this.$global.axios.get('/adsProduct').then((res)=>{
              if(res.status === 0){
                  console.log('======adsProduct',res.data.adsProduct)
                  this.adsProductList = res.data.adsProduct
              }
          })
      },
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .carousel{
        .container{
            height: 660px;
            // margin-bottom: 20px;
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
            .adv-product{
                position: absolute;
                top: 450px;
                left: 0px;
                margin-top: 10px;
                width: 1226px;
                height: 160px;
                // background-color: #FF6700;
                .adv-table{
                    // background-color: #5eaa20;
                    background-color: #5f5750;
                    height: 160px;
                    ul{
                        float: left;
                        width: 90%;
                        height: 90%;
                        margin-top:1px;
                        li{
                            // background-color: #205caa;
                            height: 70px;
                            width: 33%;
                            float: left;
                            position: relative;
                            line-height: 50px;
                            a{
                                
                                display: block;
                                width: 100%;
                                height: 100%;
                                padding-top: 10px;
                                // background-color: #7720aa;
                                line-height: 28px;
                                text-align: center;
                                color: #fff;
                                opacity: 0.7;
                                &:hover{
                                    opacity: 1;
                                }
                                img{
                                    display: block;
                                    width: 30px;
                                    height: 30px;
                                    margin: 0 auto; 
                                }
                                
                            }
                            &::before{
                                position: absolute;
                                top: 10px;
                                right: 0px;
                                height: 55px;
                                width: 1px;
                                content:' ';
                                background: #665e57;
                            }
                            &::after{
                                position: absolute;
                                top: -1px;
                                left: 6px;
                                height: 1px;
                                width: 45px;
                                content:' ';
                                background: #665e57;
                            }
                        }
                    }
                }
                .adv-product-list{
                    .home-pro-list{
                        ul{
                            float: left;
                            width: 100%;
                            margin-left: 40px;
                            li{
                                float: left;
                                width: 32%;
                                margin-left: 10px;
                                img{
                                    display: inline-block;
                                    width: 91%;
                                }
                            }
                        }
                    }
                    
                }
            }
        }
    }
    .home-pro{
        background-color: #f5f5f5;
        padding-top: 4px;
        padding-bottom: 12px;
       .container{
            .home-pro-title{
                display: flex;
                height: 58px;
                line-height: 58px;
                justify-content: space-between;
                h2{
                    font-weight: 200;
                }
                .home-pro-title-more{
                    a{
                        font-size: 16px;
                        color: #424242;
                        &:hover{
                            color: #FF6700;
                        }
                    }
                }
            }
            .home-pro-content{
                height: 600px;
                // background-color: #FF6700;
                /deep/ .el-row{
                    height: 100%;
                    .left{
                        height: 100%;
                        // background-color: #ecb48e;
                        background-color: rgba(0,0,0,0);
                        border: 1px solid #FF6700;
                        a{
                            display: block;
                            height: 100%;
                            line-height: 600px;
                            
                            img{
                               display: inline-block; 
                               width:100%;
                            }
                            
                        }
                        &:hover{
                            position: relative;
                            top: -3px;
                            box-shadow: 1px 5px 10px 5px rgb(207, 206, 206);
                                    transition: all .3s;
                        }
                        
                    }
                    .right{
                        height: 100%;
                        // background-color: #0d5a5a;
                        background-color: rgba(0,0,0,0);
                        .brick-list{
                            // display: flex;
                            // justify-content: space-between;
                            // flex-wrap: wrap;
                            background-color: #0d5a5a;
                            .brick-list-item{
                                float: left;
                                width: 210px;
                                height: 250px;
                                margin-left: 30.5px;
                                margin-bottom: 15px;
                                padding: 20px 0;
                                border: 1px solid #62a8eb;
                                &:hover{
                                    position: relative;
                                    top: -3px;
                                    box-shadow: 1px 5px 10px 5px rgb(207, 206, 206);
                                    transition: all .3s;
                                }
                                a{
                                    img{
                                        width: 100%;
                                    }
                                }
                            }
                        }
                    }
                }
                
            }
       } 
    }
</style>