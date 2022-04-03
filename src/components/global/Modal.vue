<template>
    <div class="modal" v-show="showModal">
        <div class="mask"></div>
        <div class="modal-dialog" style="margin-top:15vh;width:60%;">
            <div class="modal-header">
                <h2>{{title}}</h2>
                <a href="javascript:;" class="el-icon-close" @click="closePage"></a>
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <el-button size="medium" @click="cancel" v-if="btnType=='2'">{{cancelText}}</el-button>
                <el-button type="primary" size="medium" @click="confirm" v-else-if="btnType=='1'">{{confirmText}}</el-button>
                <div v-else>
                    <el-button size="medium" @click="cancel">{{cancelText}}</el-button>
                    <el-button type="primary" size="medium" @click="confirm">{{confirmText}}</el-button>
                </div>
        </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'modal',
        props:{
            // 弹框类型：小：small，中：middle，大：big，form：表单
            modalType:{
                type:String,
                default:'form'
            },
            title:String, //表单标题
            btnType:String, // 按钮类型：1：确定按钮，2：取消按钮，3确定+取消
            confirmText:{
                type:String,
                default:"确定"
            },
            cancelText:{
                type:String,
                default:"取消"
            },
            showModal:Boolean,
        },
        mounted(){
            console.log('this',this)
            console.log('path',this.$route)
        },
        methods:{
            confirm(){
                
                this.$emit('submit')
            },
            cancel(){
                this.$emit('cancel')
            },
            closePage(){
                this.$emit('cancel')
            }
        }
    }
</script>
<style lang="scss" scoped>
    .modal{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        .mask{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            opacity: 0.4;
            // z-index: 100;
        }
        .modal-dialog{
            position: relative;
            margin:0 auto 50px;
            width: 60%;
            background-color: #f6f7fb;
            .modal-header{
                height: 50px;
                padding: 10px 20px 0px 40px;
                line-height: 50px;
                display: flex;
                justify-content: space-between;
                background-color: #fff;
                // cursor: move;
                h2,a{
                    display: inline-block;
                }
                a{
                    line-height: 50px;
                    font-size: 16px;
                    color: rgb(110, 110, 110);
                    // transition: transform .4;
                    &:hover{
                        color: rgb(7, 85, 253);
                        transform: scale(1.3);
                    }

                }
            }
            .modal-body{
                padding: 0px 40px;
            }
            .modal-footer{
                display: flex;
                justify-content: flex-end;
                padding: 20px 40px;
                background-color: #fff;
            }
        }
        
    }
</style>