
import api from '../adapter/apiServices.js'
import router from '../router/index.js'

const articleModule = {
    namespaced :true,
    state(){
        return {
            globalArticles: null,
            globalArticlesLoading : true,
            userPosts : [],
            likedPosts : null,
            deleteId : "",
            toast :{
                isActive : false,
                msg : ""
            }
        }
        
    },
    actions: {
        // get all articles
        getGlobalFeeds({commit}){
            return new Promise((resolve,reject)=>{
                api.globalFeeds().then((res)=>{
                commit("setGlobalArticles",res.data)
                    console.log(res)
                }).catch((err)=>{
                    reject(err)
                    console.log(err)
                })
            })
            
        },
        // get user specific posts
        getUserPosts({commit},id){
            return new Promise((resolve,reject)=>{
                
                api.getUserPosts(id).then((res)=>{
                    resolve(res)
                    commit("setUserPosts",res.data)
                    console.log(res.data)
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        // get posts likedd by a user
        getLikedPosts({commit},id){
            return new Promise((resolve,reject)=>{
                
                api.getLikedPosts(id).then((res)=>{
                    console.log(res.data,"like posts");
                    commit("setLikedPosts",res.data)
                }).catch((err)=>{
                    reject(err)
                })
            })
        },
        // comment on post
        postComment({dispatch},data){
            return new Promise((resolve)=>{
                api.postComment(data).then((res)=>{
                    console.log(res);
                    dispatch("getGlobalFeeds");
                    resolve(res);
                })
            })
        },
        // Like a unlike post
        likeAndUnlikePost({commit,dispatch},id){
            return new Promise((resolve,reject)=>{
                api.likeAndUnlike(id).then((res)=>{
                    console.log(res)
                    commit("")
                    dispatch("getGlobalFeeds")
                    resolve(res)
                }).catch((err)=>{
                    reject(err)
                    console.log(err)
                })
            })
        },
        // publish article
        publish({commit},data){
            return new Promise((resolve,reject)=>{
                api.publish(data).then((res)=>{
                    console.log(res)
                    resolve(res)
                    router.push({name:"Article",params:{id:res.data._id}});
                    commit("setToastActive");
                }).catch(err=>{
                    console.log(err)
                    reject(err)
                })
            })
        },
        deleteArticle({commit,state}){
            return new Promise((resolve,reject)=>{
                const data = {
                    postId : state.deleteId
                }

                api.deletePost(data).then((res)=>{
                    console.log(res);
                    resolve(res);
                    router.push({name:"Dashbord"})
                    commit("");
                }).catch((err)=>{
                    reject(err);
                })
            })
        },
        // set delete id
        setDeleteId({commit},data){
            commit("setDeleteId",data);
            console.log(data);

        }
    },
    mutations:{
        setGlobalArticles(state,articles){
            state.globalArticles = articles
            state.globalArticlesLoading = false
        },
        setUserPosts(state,payload){
            state.userPosts = payload,
            state.userPosts.userName = payload.email
        },
        setLikedPosts(state,likedPosts){
            state.likedPosts = likedPosts
        },
        setDeleteId(state,data){
            state.deleteId  = data
        },
        setToastActive(state){
            state.toast.isActive = true
            state.toast.msg = "Article successfully published"
        }
    }
}

export default articleModule