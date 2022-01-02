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
    postComment(data){
        return axios({url:`${BASE_URL}/add-comment`,data:data,headers:this.getHeader(),method:"POST"});
    },
    likeAndUnlike(data){
        return axios({url:`${BASE_URL}/like`,data:data,headers:this.getHeader(),method:"POST"});
    },
    publish(data){
        return axios({url:`${BASE_URL}/post`,data:data, headers:this.getHeader(), method:"POST"});
    },
    deletePost(data){
        return axios({url:`${BASE_URL}/delete-post`,data:data, headers:this.getHeader(),method:"DELETE"});
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
    // follow a user
    followUser(data){
        return axios({url:`${BASE_URL}/follow`, data:data,headers:this.getHeader(),method:"POST"})
    },
    // check if isFollowing to render follow and unfollow buttons dynamically
    isFollowing(data){
        return axios({url:`${BASE_URL}/check-follow`,data:data,headers:this.getHeader(),method:"POST"})
    },
    getFollowNotifications(data){
        return axios({url:`${BASE_URL}/get-followers`,data:data,headers:this.getHeader(),method:"GET"})
    }

    

}