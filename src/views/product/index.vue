<template>
    <div>
        <div class="nav-bar">
            <div class="product" :class="{'is-fixed':isFixed}">
                <div class="content">
                    <span class="product-name">{{productMsg.name || '产品'}}</span>
                    <span class="product-evaluate">用户评价</span>
                </div>

            </div>
        </div>
        <div class="container">
            <div class="content">
                <el-row>
                    <el-col :span="12">
                        <div class="left-container">
                            <div class="left-content">
                                <img :src="productMsg.productImg" />
                            </div>

                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="right-container">
                            <div class="right-content">
                                <div class="product-name product-info">{{productMsg.name}}</div>
                                <div class="product-price product-info">
                                    <div class="price-info">
                                        <span>小米自营</span>
                                        <span>{{productMsg.price}}元</span>
                                    </div>
                                </div>
                                <div class="user-address product-info">
                                    <div class="address-info">
                                        XX省-XX市-XX区-XX-街道
                                    </div>
                                </div>
                                <div class="product-version product-info">
                                    <span>选择版本</span>
                                    <div class="version-info">
                                        <el-row>
                                            <el-col :span="12" class="version"
                                                :class="{'is-version-select':versionSelect}" @click.native="versionClick">6GB
                                                + 64GB 全网通 1049元
                                            </el-col>
                                            <el-col :span="12" class="version"
                                                :class="{'is-version-select':versionSelect}">4GB + 64GB 移动4G 1000元
                                            </el-col>
                                        </el-row>
                                    </div>
                                </div>
                                <div class="product-color product-info">
                                    <span>选择颜色</span>
                                    <div class="version-info">
                                        <el-row>
                                            <el-col :span="12" class="version"
                                                :class="{'is-color-select':colorSelect}">深空灰</el-col>
                                            <el-col :span="12" class="version"
                                                :class="{'is-color-select':colorSelect}">
                                                太空银</el-col>
                                        </el-row>
                                    </div>
                                </div>
                                <!-- <div class="total-info product-info">6</div>
                                <div class="down-btn product-info">7</div> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>


            <!-- <div style="height:150px;background-color:rgb(170, 202, 248);" v-for="item in 9" :key="item">1111</div> -->
        </div>

    </div>
</template>

<script>

export default {
    name: 'productParam',
    data() {
        return {
            isFixed: false,
            versionSelect: false,
            colorSelect:false,
            productMsg: {
                name: '', // 产品名称
                price: "", // 价格
                productId: '',// 产品id
                productImg: ""
            },
            productList: [
                {
                    id: "02001",
                    name: '小米手机1',
                    imgUrl: '../../img/carousel/carousel01.jpg',
                    price: '1000',
                },
                {
                    id: "02002",
                    name: '小米手机2',
                    imgUrl: '../../img/carousel/carousel02.png',
                    price: '1200',
                },
                {
                    id: "02003",
                    name: '小米手机3',
                    imgUrl: '../../img/carousel/carousel03.jpg',
                    price: '1400',
                },
                {
                    id: "02004",
                    name: '小米手机4',
                    imgUrl: '../../img/carousel/carousel04.jpg',
                    price: '1800',
                }
            ]
        }
    },

    created() {
        console.log('456', this.$route.params.productId)
        this.productMsg.productId = this.$route.params.productId
        for (let item of this.productList) {
            if (item.id == this.$route.params.productId) {
                this.productMsg.name = item.name
                this.productMsg.price = item.price
                this.productMsg.productImg = item.imgUrl
                break;
            }
        }

        // let productList = this.productList.map((item) => {
        //     console.log(item.id)
        //     if (item.id = this.$route.params.productId) {
        //         console.log(item)
        //         return item
        //     }
        // })
        // console.log('productList', productList)
        // this.productMsg.productId = productList[0].id || ''
        // this.productMsg.price = productList[0].price || ''
        // this.productMsg.productImg = productList[0].imgUrl || ''
        // this.productMsg.name = productList[0].name || ''

        // this.getProductInfo()

    },
    mounted() {
         
        // 给页面添加scroll事件
        window.addEventListener('scroll',this.initHeight)
        
    },
    methods:{
        initHeight(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            this.isFixed = scrollTop > 158 ? true : false
        },
        // 获取产品的信息
        getProductInfo() {
            // debugger
            this.$global.axios.post('/product', {
                productId: this.productMsg.productId
            }).then((res) => {
                if (res.status === 200) {
                    console.log('res', res)
                    this.productMsg.name = res.data.name
                    this.productMsg.productId = res.data.id
                    this.productMsg.price = res.data.price
                    this.productMsg.productImg = res.data.imgUrl
                }
            })
            
            // this.$global.axios({
            //     url:"/product",
            //     method: "get",
            //     data: {
            //         productId: this.productMsg.productId,
            //     }
            // }).then((res) => {
                
            //     if (res.status === 200) {
            //         this.productMsg.name = res.data.name
            //         this.productMsg.productId = res.data.id
            //         this.productMsg.price = res.data.price
            //         this.productMsg.productImg = res.data.imgUrl
            //     }
            // })
        },
        versionClick() {
            console.log('versionClick')
            this.versionSelect = true
        },
    },
    destroyed(){
        // 第三个参数false 冒泡
        window.removeEventListener('scroll',this.initHeight,false)
    },
    
}
</script>

<style lang="scss" scoped>



















    @import '@/assets/scss/base.scss';
    .nav-bar{
        height: 80px;
        .product {
            
            background-color: rgb(228, 233, 231);
            height: inherit;
            &.is-fixed {
                position: fixed;
                top: 0;
                height: inherit;
                width: 100%;
                box-shadow: 0px 1px 10px 1px #666;
                z-index: 10;
            }
            .content{
                display: flex;
                justify-content: space-between;
                width: 70%;
                height: inherit;
                margin:0 auto;
                line-height: 80px;
                span:first-child{
                    font-size: 1.8rem;
                    font-weight: bold;
                }
                span:last-child{
                    font-size: 1.3rem;
                    cursor: pointer;
                    &:hover{
                        color: red;
                    }
                }
            }
        }
    }
    .container {
        background-color: rgb(255, 255, 255);
        .content{
            height: 500px;
            // background-color: #f6f6f6;
            .left-container {
                // background-color: #666;
                .left-content{
                    height: 500px;
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        display: inline-block;
                        height: 80%;
                        width: 50%;
                        // background-color: aqua;
                    }
                }
            }
            .right-container{
                height: 500px;
                .right-content{
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    .product-info{
                        margin-top:10px;
                        margin-bottom: 10px;

                    }
                    .product-name{
                        height: 40px;
                        line-height: 40px;
                        font-size: 2rem;
                        font-weight: bold;
                    }
                    .product-price{
                        .price-info{
                            span{
                                display: block;
                                color: rgb(251, 175, 35);
                                &:first-child{
                                    margin-bottom: 7px;
                                    font-size: 1.2rem;
                                }
                                font-size: 1.5rem;
                            }
                            margin-bottom: 15px;
                        }
                        border-bottom: 1px solid #fff;
                    }
                    .user-address{
                        height: 60px;
                        width: 99%;
                        // background-color: #cecece;
                        box-shadow: 1px 1px #666;
                        margin-left: 3px;
                        display: flex;
                        align-items: center;
                        .address-info{
                            font-size: 1.2rem;
                            font-weight: 200;
                            margin-left: 30px;
                        }
                        &:hover {
                            cursor: pointer;
                        }
                    }
                    .product-version , .product-color{
                        span{
                            font-size: 1.2rem;
                            font-weight: 400;
                            margin-bottom: 10px;
                        }
                        .version{
                            height: 40px;
                            display: flex;
                            margin-top: 10px;
                            justify-content: center;
                            align-items: center;
                            border: 1px solid rgb(225, 243, 176);
                            box-shadow: 1px 1px rgb(218, 240, 120);
                            // &:last-child{
                            //     margin-left: 10px;
                            // }
                            &:hover{
                                cursor:pointer;
                                color:red;
                            }
                            
                        }
                    }
                    .product-version{
                        & .is-version-select{
                            // color: rgb(241, 233, 13);
                            border: 1px solid red;
                        }
                    }
                    .product-color{
                        & .is-color-select {
                            border: 1px solid red;
                        }
                    }
                }
            }
        }
        
    }
    
</style>