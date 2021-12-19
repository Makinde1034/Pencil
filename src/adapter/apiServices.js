import axios from 'axios'
const BASE_URL = process.env.VUE_APP_BASE_URL


export default {

    getHeader(){
        let header = {
            "x-access-token" : localStorage.getItem("token")
        }
        return header;
    },

    globalFeeds(){
       return axios.get(`${BASE_URL}/get-all-posts`);
    },
    userProfile(){
        return axios({url:`${BASE_URL}/user`, method:"GET"});
    },
    getUserPosts(id){
        return axios({url:`${BASE_URL}/user-posts/${id}`,method:"GET"});
    },
    getLikedPosts(id){
        return axios({url:`${BASE_URL}/get-user-likes/${id}`,method:"GET"})
    },

    signUp(data){
        return axios.post(`${BASE_URL}/signup`,data)
    },
    signIn(data){
        return axios({url:`${BASE_URL}/signin`, method:"POST",data:data});
    },

    postComment(data){
        return axios({url:`${BASE_URL}/add-comment`,data:data,headers:this.getHeader(),method:"POST"})
    },

    // update user profile
    updateProfile(data){
        return axios({url:`${BASE_URL}/update-profile`,data:data,headers:this.getHeader(),method:"POST"})
    },

    destroy(){
        return localStorage.clear()
    }
}