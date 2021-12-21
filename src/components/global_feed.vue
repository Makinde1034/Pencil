<template>
    <div class="wrap">
        <div class="global">
            <div class="global__header">
                <div class="global__header__title">
                    <h3>Global feed</h3>
                </div>
            </div>
            <div v-if="loading">Loading article...</div>
            <div v-else v-for="article in globalArticles" :key="article._id" class="global__feedbody">
                <div class="global__feedtop">
                    <div class="image__username__date">
                        <div class="image">
                            <img src="../assets/logo.png" alt="">
                        </div>
                        <div class="username__date">
                            <p class="username"
                                @click="getUser(article.userId)"
                            >
                                {{article.creator}}
                            </p>
                            <p class="date">{{article.createdAt}}</p>
                        </div>
                    </div>
                    <div @click="likeUnlike(article.userId)" class="likes">
                        <img class="heart" src="../assets/heart.png" alt="">
                        <span>{{article.likes}}</span>
                    </div>
                </div>
                <div @click="goToArticle(article._id)" class="global__feedmain">
                    <h3 class="title">{{article.title}}</h3>
                    <p class="body">{{article.body.length > 100 ? article.body.substring(0,100)+"..." : article.body}}</p>
                    <p class="readmore">Read more...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import storage from '../helpers/storage'

export default {
    methods:{
        ...mapActions('articleModule',['getGlobalFeeds','likeAndUnlikePost']),

        getUser(creator){
            this.$router.push({name:"Profile",params:{creator:creator}});
        },
        goToArticle(id){
            this.$router.push({name:"Article",params:{id:id}});
        },
        
        likeUnlike(id){
            if(storage.isAuthenticated()){
                const data = {
                    postId : id
                }
                this.likeAndUnlikePost(data)
            }else{
                this.$router.push({name:"Signin"})
            }
            
        }
    },
    computed:{
        ...mapState({
            globalArticles : (state)=> state.articleModule.globalArticles,
            loading : (state) => state.articleModule.globalArticlesLoading
        })
    },
    mounted(){
        this.getGlobalFeeds()
    }
    
}
</script>

<style scoped>
.wrap{
    padding-left: 300px;
    padding-right: 300px;
}
.global{

    width: 100%;
    /* height: 500px; */
    
}

.global__header{
    border-bottom: 1px solid #E5E5E5;
    height: 50px;
    
}

.global__feedbody{
    overflow: auto;
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 30px;
}

.global__header__title{
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #008081;
}

.global__header__title h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: #008081;
    font-size: 16px;
}

.global__feedtop{
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.image__username__date{
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 30px;
}

.image{
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.image img{
    height: 30px;
    width: 30px;
}

.username{
    font-size: 15px;
    color: #008081;
    cursor: pointer;
    
}

.date{
    font-size: 12px;
    color: #d1cece;
}

.likes{
    padding: 3px;
    border: 1px solid #008081;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.global__feedmain{
    margin-top: 20px;
}

.heart{
    height: 14px;
}

.title{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    cursor: pointer;

}

.body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #d1cece;
    cursor: pointer;
}

.readmore{
    color: #d1cece;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 30px;
}

@media  screen and (max-width:480px){
    .wrap{
        padding-left:20px;
        padding-right:20px;
    }

}
</style>