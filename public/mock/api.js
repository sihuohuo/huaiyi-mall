import Mock from 'mockjs'
// Mock.mock('/api/user/login',{
//     "status":0,
//     "data":{
//         "id":"4399",
//         "userName":"yuanyi",
//         "phone": "12345678911",
        
//     },
//     "message":"操作成功"
// })
Mock.mock('/api/gettreedata',{
    "status": 0,
    "data": {
        treeDataList: [
            {
                id: '01',
                name: '张氏',
                isLeaf:'0',
                children: [
                    {
                        id: '0101',
                        name: '张三',
                        isLeaf: '0',
                        children: [
                            {
                                id: '010101',
                                name: '张一三',
                                isLeaf:'1'
                            },
                            {
                                id: '010102',
                                name: '张二三',
                                isLeaf:'1'
                            }
                        ]
                    },
                ]
            },
            {
                id: '02',
                name: '李氏',
                isLeaf:'0',
                children: [
                    {
                        id: '0201',
                        name: '李四',
                        isLeaf:'1',
                    }
                ]
            },
        ]
    },
    "message":"操作成功"
})