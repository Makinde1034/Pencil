
export default {

    saveToken(token){
        return localStorage.setItem("token",token)
    },
    getToken(){
        return localStorage.getItem("token")
    },

    setUserDetails(user){
        return localStorage.setItem("user",JSON.stringify(user))
    },
    getUserDetails(){
        return JSON.parse(localStorage.getItem("user"));
    },
    isAuthenticated(){
        const token = localStorage.getItem("token")
        if(token){
            return true
        }
        return false
        
    }
}