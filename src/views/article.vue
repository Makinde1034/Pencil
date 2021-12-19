<template>
    <div v-for="(article,index) in articles" :key="index" >
        <div v-if="article._id === articleId">
            <div class="banner">
                <div class="title">{{article.title}}</div>
                <div class="user__details">
                    <div class="user__details__info">
                        <img src="../assets/logo.png" alt="User image">
                        <div class="username__date">
                            <p class="username">{{article.creator}}</p>
                            <p class="date">{{article.createdAt}}</p>
                        </div>
                        <div v-if="user._id !== article.userId" class="buttons">
                            <button> +Follow Gerome</button>
                            <button>Favourite Article ({{article.likes}})</button>
                        </div>
                        <!-- can modify -->
                        <div v-else class="modify">
                            <button id="edit">Edit article</button>
                            <button id="delete">Delete Article</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                <div class="body__text">
                    <p>{{article.body}}</p>
                </div>
            </div>
            <CommentEditor
                :articleId="articleId"
                
            />
            <div  v-for="(comment,index) in article.comments" :key="index" >
                <Comment 
                    :comment = "comment" 
                    :creator ="article.creator"
                />
            </div>
        </div>
    </div>
   
</template>

<script scoped>

import { mapState,mapActions } from 'vuex'
import CommentEditor from '../components/comment_editor.vue'
import Comment from '../components/comment.vue'

export default {
    components:{ CommentEditor,Comment },
    data(){
        return {
            articleId : this.$route.params.id
        }
    },
    computed:{
        ...mapState({
            articles : (state) => state.articleModule.globalArticles,
            user : (state) => state.userModule.user
        })
    },
    methods:{
        ...mapActions('articleModule',['getGlobalFeeds'])
    },
    mounted(){
        this.getGlobalFeeds()
    }
}
</script>

<style scoped>
.banner{
    padding-bottom:30px;
    padding-top:30px;
    background: #333333;
    padding-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title{
    font-size: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    font-weight: 600;
}

.user__details{
    margin-top: 30px;
}

.user__details__info img{
    height: 20px;
    margin-right: 10px;
}

.user__details__info{
    display: flex;
    align-items: flex-end;
}

.username{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
}

.date{
    color: white;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    font-size: 13px;
}

.username__date{
    margin-right: 20px;
}

.buttons button, .modify button {
    padding: 5px 10px;
    margin-right: 10px;
    border: 2px solid #008081;
    background: none;
    color: #AAAAAA;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    
}

#edit{
    border : 1px solid #AAAAAA;
}

#delete{
    border: 1px solid red;
}

/* .buttons button:nth-child(1){
    margin-bottom: 20px;
} */



.body{
    padding: 20px 200px 20px 200px;
}

.body__text{
    width: 100%;
    
}

.body__text p{
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 40px;
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 50px;
}

@media  screen and (max-width:480px){
    .banner{
        padding-left:20px
    }

    .body{
        padding: 20px 0px 20px 20px;
    }
    .body__text{
        width: 100%;

    }


}
</style>