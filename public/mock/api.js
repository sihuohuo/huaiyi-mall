import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    "status":0,
    "data":{
        "id":"4399",
        "userName":"yuanyi",
        "phone":"12345678911"
    },
    "message":"操作成功"
})