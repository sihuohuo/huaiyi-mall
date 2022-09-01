export default{
    login(state, user = {}){
        Object.keys(state.userMsg).forEach((key) => {
            state.userMsg[key] = user[key]
        })
        // state.userName = user.userName
        // state.userId = user.userId
        // state.userPwd = user.userPwd
        // state.userPhone = user.userPhone
        // state.userAccount = user.userAccount
    },
    goHome(state,vm) {
        let currentPath = vm.$route.path
        if (currentPath == '/') {
            
        } else {
            vm.$router.push('/')    
        }   
    },
    loginOut(state,vm) {
        Object.keys(state.userMsg).forEach((key) => {
            state.userMsg[key] = ''
        })
        // console.log('vm', vm)
        let currentPath = vm.$route.path
        if (currentPath == '/') {
            
        } else {
            vm.$router.push('/')    
        }
        location.reload()
        
    },
};
