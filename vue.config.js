module.exports = {
    devServer: {
        disableHostCheck:true,
        contentBase: "./dist", // 生成虚拟目录的位置
        open:true, // 自动打开浏览器
        // autoOpenBrowser: true,
        host:'0.0.0.0',
        port:8080,
        hot:true, // 开启热更新
        hotOnly:true, // 即使HMR不生效，也不去刷新整个页面
        
        proxy:{
            '/api':{
                // target:"https://www.imooc.com",
                target:"localhost:8080",
                changeOrigin:true, //本地会虚拟一个服务端接收请求，并代发请求,是否将本机源的地址设置为target地址
                pathRewrite:{
                    '^/api':'', // 对接口地址进行处理
                }
            }
        }
    }
}