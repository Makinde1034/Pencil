<template>
    <div  v-for="(user,index) in users" :key="index" >
        <div v-if="user._id===creator">
            <div class="banner">
                <div class="image">
                    <img :src="user.image" alt="profile image">
                </div>
                <h3>{{user.email}}</h3>
                <div v-if="isAuth" style="margin-bottom:30px" v-show="currentUser._id !== creator">
                    <button @click="unFollow(user._id)" v-if="_isFollowing">Unfollow</button>
                    <button v-else  @click="follow(user._id)">Follow</button>
                </div>
                <div class="bio">
                    <p>{{user.bio}}</p>
                </div>
               
                
            </div>
            <div class="articles">
                <div class="articles__navigation">
                    <router-link
                        :to="{name:'Myarticles'}"
                    >
                        My articles
                    </router-link>
                    <router-link
                        :to="{name:'FavouritedArticles'}"
                    >
                        Favourited articles
                    </router-link>
                </div>
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
import storage from '../helpers/storage.js'

export default {
    components : { },
    data(){
        return {
            creator : this.$route.params.creator
        }
    },
    methods:{
        ...mapActions('userModule',['getUserProfile','followUser','unFollowUser']),
        ...mapActions('userModule',['isFollowing']),
        ...mapActions('articleModule',['getUserPosts']),
        ...mapActions('articleModule',['getLikedPosts']),


        follow(_id){
            if(storage.isAuthenticated()){
                const data = {
                    userId : _id
                }
                this.followUser(data)
            }else{
                this.$router.push("/signin")
            }
           
        },
        unFollow(_id){
            if(storage.isAuthenticated()){
                const data = {
                    userId : _id
                }
                this.unFollowUser(data)
            }else{
                this.$router.push("/signin")
            }
           
        },
        
        
    },
    computed:{
        ...mapState({
            users : (state) => state.userModule.userProfile,
            _isFollowing : (state) => state.userModule.isFollowing
        }),
        currentUser(){
            return JSON.parse(localStorage.getItem("user"));
        },
        isAuth(){
            return storage.isAuthenticated()
        }
    },
    mounted(){
        
        this.getUserProfile();
        this.getUserPosts(this.creator)
        this.getLikedPosts(this.creator)
        if(storage.isAuthenticated()){
            this.isFollowing(this.creator)
        }
        
       
    },
}
</script>

<style scoped>
.banner{
    height: 300px;
    /* max-height: auto; */
    padding-top: 30px;
    background: #008081;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.image{
    height: 100px;
    width: 100px;
    border-radius: 50%;
}

.image img{
    height: 100%;
    width: 100%;
    border-radius: 100%;
}

.banner h3{
    margin-top: 20px;
    margin-bottom: 10px;
    color: white;
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.banner button{
    padding: 7px 40px;
    border: 1px solid white;
    background: none;
    color: white;
    cursor: pointer;
    border-radius: 3px;
}

.articles{
    padding-left: 300px;
    padding-right: 300px;
    /* height: 50px; */
}

.bio {
    padding: 0px 20px 20px 20px;
    width: 50%;

}

.bio p{
    color: white;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}



.router-link-exact-active {
  color: #008081;
  border-bottom: 1px solid #008081;
  /* height: 100%; */
  
}

.articles__navigation{
    height: 50px;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    align-items: center;
    list-style: none;
    
}

a{
    margin-right: 30px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: black;
    height: 100%;
    display: flex;
    align-items: center;
    
    
}

@media  screen and (max-width:768px){
    .wrap{
        padding-left:20px;
        padding-right:20px;
    }

    .banner{
        height: auto;
    }

    .bio{
        width: 100%;
    }

    .banner h3{
        font-size: 20px;
    }

    .articles{
        padding-left: 20px;
        padding-right: 20px;
    }

}

</style>