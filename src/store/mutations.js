export default{
    saveUserMsg(state,obj){
        console.log("mutations saveUserMsg!")
        state.userName = obj.userName
        state.userId = obj.userId
        state.userPwd = obj.userPwd
    }
};
