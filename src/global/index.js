import axios from '../http/index'
import storage from '../storage/index'

 
const sayHello = function(){
    console.log('全局方法 sayHello')
}
export default{
    axios,
    storage,
    sayHello,
}