export default{
    saveUserMsg(context,obj){
        let userObj = {
            userName:'系统管理员',
            userId:'admin',
            userPwd:'admin'
        }
        console.log("actions saveUserMsg!")
        context.commit('saveUserMsg',userObj)
    }
}