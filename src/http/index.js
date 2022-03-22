
import axios from 'axios'
const $axios = axios.create({
    
})
// 配置全局的参数
$axios.defaults.baseURL = '/api'
$axios.defaults.timeout = 5000
$axios.defaults.headers.post['Content-Type'] = "application/json"
$axios.defaults.headers.post["X-Requested-with"] = "XMLHttpRequest"

// 设置请求拦截器
$axios.interceptors.request.use(function(config){
    // config 包含每次请求的内容
    const token = window.sessionStorage.getItem('token') || ''
    if(token){
        //将token信息放入到请求中
        config.headers.Authorization = token
    } else {
        //跳转到登录页面
        window.location.href = '#/'
    }
    return config 
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 设置响应拦截器
$axios.interceptors.response.use(function(response){
    let res = response.data
    let path = location.hash // 获取当前地址
    if(res.status === 0 || res.status === 200){ // 假设 接口status返回0和200表示请求成功
        return res
    }else if(res.status === 10086){ // 假设接口status返回10086表示未登录
        if(path != '#/index'){
            window.location.href = '/#/login'
        }
    }else{
        return res
        console.log(res.message || 'response error') // 假设接口返回的错误/成功信息存在message中
    }
})

export default $axios
