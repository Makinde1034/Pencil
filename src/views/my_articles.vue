<template>
    <!-- <div v-if="loading">Loading article...</div> -->
    <div style="font-size:12px;margin-top:10px" v-if="userPosts.length === 0">You have not published any article.</div>
    <div style="padding-bottom:80px" v-else v-for="(post,index) in userPosts" :key="index" class="global__feedbody">
        <div class="global__feedtop">
            <div class="image__username__date">
                <div class="image">
                    <img :src="post.creator.image" alt="">
                </div>
                <div class="username__date">
                    <p @click="getUser(post.creator)"  class="username">{{post.creator.username}}</p>
                    <p class="date">{{formatDate(post.createdAt)}}</p>
                </div>
            </div>
            <div class="likes">
                <img class="heart" src="../assets/heart.png" alt="">
                <span>{{post.likes}}</span>
            </div>
        </div>
        <div @click="goToArticle(post._id)" class="global__feedmain">
            <h3 class="title">{{post.title}}</h3>
            <p class="body">{{post.body.length > 100 ? post.body.substring(0,100)+"..." : post.body}}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { formatDate } from '../helpers/date'

export default {
    methods:{
        getUser(creator){
            this.$router.push({name:"Profile",params:{creator:creator}});
        },
        goToArticle(id){
            this.$router.push({name:"Article",params:{id:id}});
        },
        formatDate(date){
            return formatDate(date)
        }
    },
    computed:{
        ...mapState({
            userPosts : (state)=> state.articleModule.userPosts
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
    border-bottom: 2px solid #46344e;
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
    cursor: pointer;
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
    color: #46344e;
    font-weight: 600;
    
}

.date{
    font-size: 12px;
    color: #7E7575;
}

.likes{
    height: 30px;
    width: 30px;
    border: 1px solid #46344e;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.heart{
    height: 14px;
}

.global__feedmain{
    margin-top: 20px;
}

.title{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 25px;
    margin-bottom: 20px;
    cursor: pointer;

}

.body{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #7E7575;
}
</style>
