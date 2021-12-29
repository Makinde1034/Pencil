<template>
    <div  v-for="(user,index) in users" :key="index" >
        <div v-if="user._id===creator">
            <div class="banner">
                <div class="image">
                    <img :src="user.image" alt="">
                </div>
                <h3>{{user.email}}</h3>
                <button>Follow</button>
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

export default {
    components : { },
    data(){
        return {
            creator : this.$route.params.creator
        }
    },
    methods:{
        ...mapActions('userModule',['getUserProfile']),
        ...mapActions('articleModule',['getUserPosts']),
        ...mapActions('articleModule',['getLikedPosts'])
    },
    computed:{
        ...mapState({
            users : (state) => state.userModule.userProfile
        })
    },
    mounted(){
        
        this.getUserProfile();
        this.getUserPosts(this.creator)
        this.getLikedPosts(this.creator)
    }
}
</script>

<style scoped>
.banner{
    height: 300px;
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
    background: white;
}

.banner h3{
    margin-top: 20px;
    margin-bottom: 20px;
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
}

.articles{
    padding-left: 300px;
    padding-right: 300px;
    /* height: 50px; */
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

@media  screen and (max-width:480px){
    .wrap{
        padding-left:20px;
        padding-right:20px;
    }

    .articles{
        padding-left: 20px;
        padding-right: 20px;
    }

}

</style>