import Mock from 'mockjs'
Mock.mock('/api/user/login', "post", (options) => {
    
    let {params} = JSON.parse(options.body)
    console.log('params',params)
        if(params.account == '13110241024' && params.pwd == '123456'){
            return Mock.mock(
                {
                    "status": 200,
                    "message": "操作成功",
                    "data": {
                        userId: "001",
                        userName: "yuanyi",
                        userAccount: "13110241024",
                        userPhone: "13110241024",
                        userPwd: "123456",
                    }
                }
            )
        } else {
            return Mock.mock(
                {
                    "status": 100,
                    "message": "账号或密码错误",
                    "data": ""
                }
            )
        }
    }
)
// {
//     "status": 0,
//     "message": "操作成功",
//     "data": {
//         userId:"001",
//         userName: "yuanyi",
//         userAccount: "13110241024",
//         userPhone: "13110241024",
//         userPwd:"123456",
//     }