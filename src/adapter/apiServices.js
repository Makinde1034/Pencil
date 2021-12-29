import axios from 'axios'
const BASE_URL = process.env.VUE_APP_BASE_URL


export default {

    getHeader(){
        let header = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
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
    destroy(){
            return localStorage.clear()
    },
    postComment(data){
        return axios({url:`${BASE_URL}/add-comment`,data:data,headers:this.getHeader(),method:"POST"})
    },

    // update user profile
    updateProfile(data){
        // return axios({url:`${BASE_URL}/update-profile`,data, headers:this.getHeader(),method:"POST"})
        return axios.post(`${BASE_URL}/update-profile`, data, { 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem("token")
            }
         })
    },

    likeAndUnlike(data){
        return axios({url:`${BASE_URL}/like`,data:data,headers:this.getHeader(),method:"POST"})
    }

}