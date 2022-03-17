<template>
    <div>
        <div class="carousel">
            <div class="container">
                <div class="left">
                    <div class="menu-left">
                        <ul class="menu-left-ul">
                            <li class="menu-left-li"><a href="javascript:;">手机
                                    <div class="menu-right">
                                        <ul class="menu-right-ul">
                                            <li class="menu-right-li">
                                                <a href="">
                                                    <img src="../../public/img/icons/apple-touch-icon-76x76.png" alt="">
                                                    <p>红米</p>
                                                </a>
                                            </li>
                                            <li class="menu-right-li">
                                                <a href="">
                                                    <img src="../../public/img/icons/apple-touch-icon-76x76.png" alt="">
                                                    <p>红米</p>
                                                </a>
                                            </li>
                                            <li class="menu-right-li">
                                                <a href="">
                                                    <img src="../../public/img/icons/apple-touch-icon-76x76.png" alt="">
                                                    <p>红米</p>
                                                </a>
                                            </li>
                                            <li class="menu-right-li">
                                                <a href="">
                                                    <img src="../../public/img/icons/apple-touch-icon-76x76.png" alt="">
                                                    <p>红米</p>
                                                </a>
                                            </li>
                                            <li class="menu-right-li">
                                                <a href="">
                                                    <img src="../../public/img/icons/apple-touch-icon-76x76.png" alt="">
                                                    <p>红米</p>
                                                </a>
                                            </li>
                                            <li class="menu-right-li">
                                                <a href="">
                                                    <img src="../../public/img/icons/apple-touch-icon-76x76.png" alt="">
                                                    <p>红米</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </a></li>
                            <li class="menu-left-li"><a href="javascript:;">电视
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
                                </a></li>
                        </ul>
                    </div>
                </div>
            <div class="right">

            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"index", // 首页
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
                display: inline-block;
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
                                // border: 1px solid lawngreen;
                                // box-shadow: 0 0 1px red ;
                                background-color: rgb(13, 204, 204);
                                .menu-right-ul{
                                    width:269px;
                                    height: 450px;
                                    // background-color: rgb(235, 52, 52);
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
                                            background-color: antiquewhite;
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
                display: inline-block;
               
                width:1076px;
                height: 450px;
                // background-color: darkcyan;
            }
        }
    }
</style>