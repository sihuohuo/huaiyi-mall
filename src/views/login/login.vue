<template>
    <div class="container">
        <div class="login-header">
            <span @click="goToHome">怀燚商城</span>
        </div>
        <div class="login-content">
            <div class="login-out">
                <div class="login-in">
                    <div class="is-error" v-show="isError">账号或密码错误！</div>
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                        class="demo-ruleForm">
                        <el-form-item label="账号" prop="userAccount">
                            <el-input v-model="ruleForm.userAccount" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="userPwd">
                            <el-input type="password" v-model="ruleForm.userPwd" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                            <el-button @click="resetForm('ruleForm')">重置</el-button>
                        </el-form-item>
                    </el-form>
                    <div class="info"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'login',
    data() {
        var validateUserAccount = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入账号'));
            } else {
                let reg = /^[1][3,4,5,7,8][0-9]{9}$/
                let result = reg.test(value)
                if (result) {
                    callback();
                } else {
                    callback(new Error("请输入11位手机号"));
                }
                
            }
        };
        var validateUserPwd = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                let reg = /\s/g
                let result = reg.test(value)
                if (result) {
                    callback(new Error("密码不能包含空白字符"));
                } else {
                    callback();
                }
                
            }
        };
        return {
            isError: false, // 账号或密码校验是否错误
            ruleForm: {
                userAccount: '13110241024',
                userPwd: '123456',
            },
            rules: {
                userAccount: [
                    { validator: validateUserAccount, trigger: 'blur' }
                ],
                userPwd: [
                    { validator: validateUserPwd, trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        ...mapMutations(['login']),
        submitForm(formName) {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    
                    //调用接口，获取用户数据
                    this.$global.axios.post("/user/login", {
                        params: {
                            account: this.ruleForm.userAccount,
                            pwd:this.ruleForm.userPwd
                        }
                    }).then((res) => {
                        console.log('res',res)
                        if (res.status === 200) {
                            this.isError = false
                            console.log('login', res.data)
                            this.login(res.data)   
                            return true
                        } else {
                            console.log('res', res)
                            this.isError = true
                            this.$router.push('/login')
                            
                            return false;
                        }
                         
                    })
                    
                } else {
                    return false;
                }
            });
        },
        resetForm(formName) {
            Object.keys(this.ruleForm).forEach((key) => {
                this.ruleForm[key] = ''
            })
        },
        goToHome() {
            this.$router.push('/')
        },
    }
}
</script>
<style lang="scss" scoped>



@import "@/assets/scss/config.scss";
    .container{
        height: 48px;
        background-color: #f1f1f1;
        
        .login-header{
            height: inherit;
            width: 500px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            span{
                font-size: 1.5rem;
                font-weight: bolder;
                cursor: pointer;
            }
        }
        .login-content{
            height: 400px;
            // background-color: antiquewhite;
            background-color:inherit;
            display: flex;
            justify-content: center;
            .login-out{
                height: 300px;
                width: 500px;
                // border: 1px solid #d11717;
                display: flex;
                justify-content: center;
                align-items: center;
                .login-in{
                    width: 400px;
                    .is-error{
                        color: red;
                        font-size: 0.2rem;
                        text-align: center;
                    }
                }
            }
        }
    }
</style>