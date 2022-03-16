<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">YuanYi</a>
                    <a href="javascript:;">YangHuai</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">天星科技</a>
                    <a href="javascript:;">有品</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="userName">{{userName}}</a>
                    <a href="javascript:;" v-else-if="!userName" @click="goToLogin">登录</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="menu-item" v-for="(item,index) in headerProductList" :key="index">
                        <span>{{item.productName}}</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item2,index2) in item.productList" :key="index2">
                                    <a :href="'/#/product/phone'+item2.id" target="_blank">
                                        <div class="product-img">
                                            <img :src="item2.imgUrl" alt="">
                                        </div>
                                        <div class="product-name">{{item2.productName}}</div>
                                        <div class="product-price">{{item2.productPrice | priceFilter}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="search">
                        <el-autocomplete
                        class="inline-input"
                        v-model="searchContent"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容"
                        @select="handleSelect"
                        ></el-autocomplete>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'nav-header',
    data(){
        return {
            userName:'',
            searchContent:'',
            searchContentList: [],
            headerProductList:[],
        }
    },
    computed:{

    },
    filters:{
        priceFilter(val){
            if(!val) return '￥0.00'
            return `￥${val}`
        }
    },
    mounted(){
        this.searchContentList = this.loadAll()
        this.getHeaderProdcut()
    },
    methods:{
        searchClick(){
            console.log('searchClick')
            this.searchItem = true
        },
        querySearch(queryString,cb){
            let searchContentList = this.searchContentList
            let results = queryString ? searchContentList.filter(this.createFilter(queryString)) : searchContentList
            // 调用callback 返回建议列表数据
            cb(results)
        },
        createFilter(queryString){ 
            return ((item)=>{
                return (item.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0);
            })
        },
        handleSelect(val){
            console.log(val)
        },
        loadAll() {
            return [
                { "value": "全部商品",},
                { "value": "红米手机",},
                { "value": "小米电视",},
                { "value": "小米手表",},
                { "value": "作者:YuanYi",},
                { "value": "作者:YangHuai",},
            ];
      },
      getHeaderProdcut(){
          this.$global.axios.get('/headerProduct/productList').then((res)=>{
              console.log('res',res)
              if(res.list.length>3){
                  this.headerProductList = res.list.slice(0,3)
              }else{
                  this.headerProductList = res.list
              }
              
              this.headerProductList = this.headerProductList.map(item=>{
                  if(item.productList.length>6){
                      item.productList = item.productList.slice(0,6)
                  }
                  return item
              })
          })
      },
      goToLogin(){
          this.$router.push('/login')
      },
      goToCart(){
          this.$router.push('/cart')
      },
    }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/base.scss';
@import '@/assets/scss/mixin.scss';
@import '@/assets/scss/config.scss';
    .header{
        .nav-topbar{
            height:39px;
            line-height:39px;
            background-color:#333333;
            color:#b0b0b0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 15px;
                }
                .topbar-user{
                    .my-cart{
                        width: 100px;
                        background-color: aliceblue;
                        text-align: center;
                    }
                    .icon-cart{
                        @include bgImg(15px,13px,'../../../public/img/icons/shopping.png',contain);
                        // display: inline-block;
                        // width:15px;
                        // height:13px;
                        // background: url('../../../public/img/icons/shopping.png') no-repeat center;
                        // background-size: contain;
                        margin-right: 5px;
                    }
                    a:last-child{
                        margin-right: 0px;
                    }
                }
            }
        }
        .nav-header{
            height:100px;
            background-color: azure;
            color: #444444;
            .container{
                position: relative;
                height: 120px;
                @include flex();
                .header-logo{
                    display: inline-block;
                    // background-color: #ff6600;
                    a{
                        display: inline-block;
                        height: 40px;
                        width: 80px;
                        &:before{
                            content: ' ';
                            @include bgImg(40px,40px,'../../../public/img/icons/smail2.png',contain);
                            // display: inline-block;
                            // width: 40px;
                            // height: 40px;
                            // background:url('../../../public/img/icons/smail2.png') no-repeat center;
                            // background-size: contain;
                            transition: margin .2s;
                        }
                        &:after{
                            content: ' ';
                            @include bgImg(40px,40px,'../../../public/img/icons/smail.png',contain);
                            // display: inline-block;
                            // width: 40px;
                            // height: 40px;
                            // background:url('../../../public/img/icons/smail.png') no-repeat center;
                            // background-size: contain;
                        }
                        &:hover:before{
                            margin-left: -40px;
                            transition: margin .2s;
                            
                        }
                        
                    }
                }
                .header-menu{
                    width: 800px;
                    padding-left:200px;
                    .menu-item{
                        display: inline-block;
                        font-size: 16px;
                        color:#333333;
                        font-weight: bolder;
                        margin-right: 50px;
                        z-index: 9;
                        span{
                            display: inline-block;
                            height: 100px;
                            line-height: 100px;
                            cursor: pointer;
                        }  
                        &:hover{
                            color: $colorA;
                            .children{
                                display: block;
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        &::before{
                            .children{
                                // display: none;
                                height: 0;
                                opacity: 0;
                            }
                        }
                        .children{
                            display: none;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            position: absolute;
                            top:100px;
                            left:0px;
                            width: 1226px;
                            background-color: #fdfdfd;
                            border-top:1px solid #e0e0e0;
                            box-shadow: 1px 1px 10px 0px #b0b0b0;
                            z-index: 10;
                            transition: height .2s;
                            .product{
                                text-align: center;
                                display: inline-block;
                                width: 16%;
                                position: relative;
                                &:before{
                                    width: 1px;
                                    height: 120px;
                                    position: absolute;
                                    top: 28px;
                                    right: 0px;
                                    content: ' ';
                                    border-right: 1px solid $colorD;
                                }
                                &:last-child::before{
                                    border-right: none;
                                }
                                a{
                                    display: inline-block;
                                    // div{
                                    //     margin-top: 4px;
                                    // }
                                    // &:first-child div{
                                    //     margin-top: 0px;
                                    // }
                                }
                                .product-img{
                                    img{
                                        height: 120px;
                                        
                                        width: auto;
                                        margin-top: 26px;
                                    }
                                }
                                .product-name{
                                    margin-top: 15px;
                                    font-size: 12px;
                                    color: #333333;
                                }
                                .product-price{
                                    font-size: 12px;
                                    color: red;
                                }
                                
                            }
                        }
                        
                    }
                }
                .header-search{
                    width: 400px;
                    display: flex;
                    justify-content: flex-end;
                }
            }
            
        }
        

    }
</style>