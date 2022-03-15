/**
 * 封装storage
 */
export default{
    setItem(moduleName,value){
        window.sessionStorage.setItem(moduleName,JSON.stringify(value))
    },
    getItem(moduleName){
        return JSON.parse(window.sessionStorage.getItem(moduleName) || {})
    },
    // getStorage(){
    //     return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || {})
    // },
    clear(moduleName,key){
        // if((moduleName??'')===''){
        //     window.sessionStorage.clear()
        //     return
        // }
        if(moduleName == '' || moduleName === undefined || moduleName === null){
            window.sessionStorage.clear()
            return
        }
        let val = this.getItem(moduleName)
        if(key){
            delete val[key]
            this.setItem(moduleName,val)
        }else if(moduleName){
            window.sessionStorage.removeItem(moduleName)
        }
    }
}