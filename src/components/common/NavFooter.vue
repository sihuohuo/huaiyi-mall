<template>
    <div>
        <div class="serve-bar">
                <div class="container">
                    <ul>
                        <li class="serve">
                            <a href="">
                                <img src="../../../public/img/icons/android-chrome-192x192.png" alt="">
                                <p>预约维修服务</p>
                            </a>
                            
                        </li>
                        <li class="7day">
                            <a href="">
                                <img src="../../../public/img/icons/android-chrome-192x192.png" alt="">
                                <p>7天无理由退货</p>
                            </a>
                        </li>
                        <li class="15day">
                            <a href="">
                                <img src="../../../public/img/icons/android-chrome-192x192.png" alt="">
                                <p>15天免费换货</p>
                            </a>
                        </li>
                        <li class="520-point">
                            <a href="">
                                <img src="../../../public/img/icons/android-chrome-192x192.png" alt="">
                                <p>520余家售后网点</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        <div class="footer">
            <div class="footer-logo">
                <img src="../../../public/img/icons/android-chrome-192x192.png" alt="" title="怀燚">
                <p>怀燚商城</p>
            </div>
            <div class="footer-link">
                <a href="">MIUI</a><span>|</span>
                <a href="">米家</a><span>|</span>
                <a href="">米聊</a><span>|</span>
                <a href="">小米天猫店</a><span>|</span>
                <a href="">问题反馈</a>
            </div>
            <div class="footer-email">
                <p>703219435@qq.com</p>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    name:"nav-footer"
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
    .serve-bar{
        .container{
            height: 70px;
            text-align: center;
            font-size: 14px;
            a{
                color: #494949;
                &:hover{
                    color: #50c7f7;
                }
            }
            ul{
                line-height: 70px;
                display: flex;
                justify-content: space-around;
                align-content: center;
                li,p,img{
                    display: inline-block;
                }
                img{
                    height: 10px;
                    margin-right: 3px;
                }
            }
        }
    }
    .footer{
        height: 200px;
        border-top: 4px solid rgb(238, 145, 24);
        background-color: #ebebeb;
        font-size: 12px;
        color: #494949;
        text-align: center;
        .footer-logo{
            margin-top:20px;
            margin-bottom: 20px;
            img{
                width:60px;
                height: 60px;
                margin-bottom: 10px;
            }
        }
        .footer-link{
            span{
                margin-left: 5px;
                margin-right: 5px;
            }
            a{
                color: #494949;
            }

        }
        .footer-email{
            margin-top: 10px;
        }
    }
</style>