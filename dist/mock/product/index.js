import Mock from 'mockjs'

// Mock.mock(RegExp('/api/product?' + ".*"), "get", (options) => {
//     console.log('options', options.url)
// })

Mock.mock('/api/product', "post", (options) => {
    console.log('options', options.body)
    let {productId} = JSON.parse(options.body)
    if (productId == '02001') {
        console.log("==========")
        return Mock.mock({
            status: 200,
            message: "操作成功",
            data: {
                id: "02001",
                name: '小米手机1',
                imgUrl: '../../img/carousel/carousel01.jpg',
                price: '1000',
            }
        })
    } else if (productId == '02002') {
        console.log("==========")
        return Mock.mock({
            status: 200,
            message: "操作成功",
            data: {
                id:"02002",
                name:'小米手机2',
                imgUrl: '../../img/carousel/carousel02.png',
                price: '1200',
            }
        })
    } else if (productId == '02003') {
        console.log("==========")
        return Mock.mock({
            status: 200,
            message: "操作成功",
            data: {
                id:"02003",
                name:'小米手机3',
                imgUrl: '../../img/carousel/carousel03.jpg',
                price: '1400',
            }
        })
    } else if (productId == '02004') {
        console.log("==========")
        return Mock.mock({
            status: 200,
            message: "操作成功",
            data: {
                id:"02004",
                name:'小米手机4',
                imgUrl: '../../img/carousel/carousel04.jpg',
                price: '1800',
            }
        })
    } else {
        return Mock.mock({
            status: 100,
            message: "操作失败",
            data: {}
        })
    }
})