<template>
    <div class="wrap">
        <div class="global">
            <div class="global__header">
                <div class="global__header__title">
                    <h3>Global feed</h3>
                </div>
            </div>
            <div v-if="loading"><Skeleton /></div>
            <div v-else v-for="article in globalArticles" :key="article._id" class="global__feedbody">
                <div class="global__feedtop">
                    <div class="image__username__date">
                        <div class="image">
                            <img src="../assets/user.png" alt="">
                        </div>
                        <div class="username__date">
                            <p class="username"
                                @click="getUser(article.userId)"
                            >
                                {{article.creator}}
                            </p>
                            <p class="date">{{formatDate(article.createdAt)}}</p>
                        </div>
                    </div>
                    <div @click="likeUnlike(article._id)" class="likes">
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
import Skeleton from './skeleton.vue'
import {formatDate} from '../helpers/date.js'

export default {
    components:{
        Skeleton
    },
    data(){
        return {
            // link : "https://www.google.com/search?q=images&rlz=1C1GCEB_enNG850NG850&sxsrf=AOaemvJeje5y5e5555ErwWxLVUtC2w1mCw:1640820384094&tbm=isch&source=iu&ictx=1&fir=LHY-1Uagl8fCxM%252Cl-X2y9oJGN2i-M%252C_%253BPrP1gFH4BkOdiM%252CISkb2KM1Sl3SmM%252C_%253Bv1A5vQPzRgfCGM%252CLHNlCfmH1SFk3M%252C_%253B-Iap6zp20DK6KM%252Cl-X2y9oJGN2i-M%252C_%253BLK6S_eMkLDVwQM%252CB51x0PBR9KNzvM%252C_%253B2eIb5BjhQiiZzM%252CnBiD9BWYMB87aM%252C_%253BL8xfQakH9a8tJM%252CBa_eiczVaD9-zM%252C_%253BB1UJzVLhvEfhPM%252CISkb2KM1Sl3SmM%252C_%253B35FFqCJLKi2TXM%252CcMRXOd2p22EgNM%252C_%253B8EekYKjMUCitwM%252CUkcvm3PybD5jEM%252C_%253BtTplitM2kjOQtM%252C-UStXW0dQEx4SM%252C_%253B1KoCsWV9R0L1JM%252CISkb2KM1Sl3SmM%252C_%253BZR4cdv4n8tR0mM%252Cl-X2y9oJGN2i-M%252C_%253BYwGJ3ieIxMcIkM%252CLlgDpz1LoiuznM%252C_&vet=1&usg=AI4_-kSEp-gA1AXj_OIm-pQOVrD9xcHzCg&sa=X&ved=2ahUKEwiX-YihlIr1AhWMLewKHaFTCWIQ9QF6BAgWEAE#imgrc=PrP1gFH4BkOdiM"
        }
    },
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
               
                this.likeAndUnlikePost(id)
                // alert("Action denied due to cross origin resource sharing policy")
            }else{
                this.$router.push({name:"Signin"})
            }
            
        },
        formatDate(date){
            return formatDate(date)
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
    padding-bottom: 200px;
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

@media  screen and (max-width:768px){
    .wrap{
        padding-left:20px;
        padding-right:20px;
    }

}
</style>