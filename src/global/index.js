import axios from '../http/index'
import storage from '../storage/index'

 
const sayHello = function(){
    console.log('全局方法 sayHello')
}
// 深拷贝数据
const deepCopy = function(obj){
    if (typeof obj !== 'object') return
    let newObj = typeof obj === 'Array' ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key]
        }
    }
}
export default{
    axios,
    storage,
    sayHello,
    deepCopy,
}