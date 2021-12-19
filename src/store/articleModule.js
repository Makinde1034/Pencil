
import api from '../adapter/apiServices.js'

const articleModule = {
    namespaced :true,
    state(){
        return {
            globalArticles: null,
            globalArticlesLoading : true,
            userPosts : {
                posts : null,
                userName : ''
            },
            likedPosts : null
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
                    console.log(res,"like posts");
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
        }
    },
    mutations:{
        setGlobalArticles(state,articles){
            state.globalArticles = articles
            state.globalArticlesLoading = false
        },
        setUserPosts(state,payload){
            state.userPosts.posts = payload.posts,
            state.userPosts.userName = payload.email
        },
        setLikedPosts(state,likedPosts){
            state.likedPosts = likedPosts
        }
    }
}

export default articleModule