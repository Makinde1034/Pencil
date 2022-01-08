
import api from '../adapter/apiServices.js'
import router from '../router/index.js'
import storage from '../helpers/storage.js'



const userModule = {
    namespaced :true,
    state(){
        return {
            userProfile : null,
            test : false,
            token : storage.getToken() || '',
            verificationMessage : "",
            user : storage.getUserDetails() || '',
            signInLoading : false,
            errorMessage : '',
            isFollowing : null,
            followers : null
        }
        
    },
    actions: {
        signUp({commit},data){
            return new Promise((resolve,reject)=>{
                commit("authRequest");
                api.signUp(data).then((res)=>{
                    console.log(res)
                    resolve(res)
                    commit("authSuccess")
                    commit("setVerificationMessage",res.data.message);
                    router.push("/verification")
                }).catch((err)=>{
                    reject(err.msg)
                })
            })
        },
        signIn({commit},data){
            
            return new Promise((resolve,reject)=>{
                commit("authRequest");
                api.signIn(data).then((res)=>{
                    resolve(res)
                    console.log(res)
                    storage.saveToken(res.data.token)
                    storage.setUserDetails(res.data.user)
                    commit("authSuccess",res.data.token)
                    router.push("/dashboard")
                    
                }).catch((err)=>{
                    reject(err)
                    console.log(err.response)
                    const errorMsg = err.response.data.msg
                    commit("signInFailure",errorMsg)
                })
            })
        },
        getUserProfile({commit}){
            return new Promise((resolve,reject)=>{
                api.userProfile().then((res)=>{
                   resolve(res)
                   commit("setUserProfile",res.data)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        updateUserProfile({commit},data){
            return new Promise((resolve,reject)=>{
                api.updateProfile(data).then((res)=>{
                    resolve(res)
                    commit("")
                    console.log(res)
                }).catch((err)=>{
                    reject(err)
                    console.log(err.message)
                })
            })
        },
        logout({commit}){
            api.destroy()
            commit("logout")
            router.push("/signin")
        },
        followUser({commit},data){
            return new Promise((resolve,reject)=>{
                api.followUser(data).then(res=>{
                    console.log(res,"followed")
                    resolve(res)
                    commit("setIsFollowing",true)
                }).catch(err=>{
                    reject(err)
                    console.log(err)
                })
            })
        },
        unFollowUser({commit},data){
            return new Promise((resolve,reject)=>{
                api.unFollowUser(data).then(res=>{
                    console.log(res,"unfollowed")
                    resolve(res)
                    commit("setIsFollowing",false)
                }).catch(err=>{
                    reject(err)
                    console.log(err)
                })
            })
        },
        isFollowing({commit},id){
            return new Promise((resolve,reject)=>{
                const data = {
                    userId : id
                }
                api.isFollowing(data).then((res)=>{
                    resolve(res);
                    console.log(res);
                    commit("setIsFollowing",res.data)
                }).catch((err)=>{
                    reject(err)
                    console.log(err)
                })
            })
        },
        getFollowNotifications({commit}){
            return new Promise((resolve,reject)=>{
                api.getFollowNotifications().then((res)=>{
                    console.log(res, 'followers');
                    resolve(res)
                    commit("setFollowers",res.data)
                }).catch((err)=>{
                    console.log(err)
                    reject(err)
                })
            })
        }
    },
    mutations:{
        setUserProfile(state,user){
            state.userProfile = user
        },
        setVerificationMessage(state,message){
            state.verificationMessage = message
        },
        authRequest(state){
            state.signInLoading = true
            state.errMsg = ''
        },
        authSuccess(state,token){
            state.token = token
            state.signInLoading = false
        },
        signInFailure(state,errMsg){
            state.signInLoading = false
            state.errorMessage = errMsg
        },
        logout(state){
            state.user = ''
            state.token = null
        },
        setIsFollowing(state,data){
            state.isFollowing = data
        },
        setFollowers(state,data){
            state.followers = data
        },
        
    }
}

export default userModule