<template>
    <div v-if="likedPosts.length === 0">No favourited posts yet</div>
    <!-- <div  v-if="loading">Loading article...</div> -->
    <div v-else v-for="(post,index) in likedPosts" :key="index"  class="global__feedbody">
        <div class="global__feedtop">
            <div class="image__username__date">
                <div class="image">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="username__date">
                    <p class="username">{{post.creator}}</p>
                    <p class="date">{{post.createdAt}}</p>
                </div>
            </div>
            <div class="likes">{{post.articles.likes}}</div>
        </div>
        <div class="global__feedmain">
            <h3 class="title">{{post.articles.title}}</h3>
            <p class="body">{{post.articles.Body}}</p>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
   components:{},
   data(){
       return{

       }
   },
   computed:{
       ...mapState({
           likedPosts : (state) => state.articleModule.likedPosts
       })
   }
}
</script>

<style scoped>

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
    
}

.date{
    font-size: 12px;
    color: #d1cece;
}

.likes{
    height: 30px;
    width: 30px;
    border: 1px solid #008081;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.global__feedmain{
    margin-top: 20px;
}

.title{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;

}

.body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #d1cece;
}
</style>
