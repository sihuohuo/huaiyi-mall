<template>
    <div>
        <div class="carousel">
            <div class="container">
                <div class="left">
                    <div class="menu-left">
                        <ul>
                            <li><a href="javascript:;">手机</a></li>
                            <li><a href="javascript:;">电视</a></li>
                            <li><a href="javascript:;">笔记本 平板</a></li>
                            <li><a href="javascript:;">家电</a></li>
                            <li><a href="javascript:;">出行 穿戴</a></li>
                            <li><a href="javascript:;">智能 路由器</a></li>
                            <li><a href="javascript:;">电源 配件</a></li>
                            <li><a href="javascript:;">健康 儿童</a></li>
                            <li><a href="javascript:;">耳机 音箱</a></li>
                            <li><a href="javascript:;">生活 箱包</a></li>
                        </ul>
                    </div>
                    <div class="menu-right"></div>
                </div>
            <div class="right"></div>
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
            background-color: aquamarine;
            .left{
                width: 150px;
                height: 400px;
                padding-top: 25px;
                padding-bottom: 25px;
                background: rgba(105,101,101,.6);
                .menu-left{
                    ul{
                        width: 150px;
                        height: 400px;
                        
                        li{
                            display: block;
                            padding-left: 20px;
                            height: 40px;
                            width: 130px;
                            line-height: 40px;
                            &:hover{
                                background-color: #FF6700;
                                cursor: pointer;
                            }
                            a{
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>