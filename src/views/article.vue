<template>
    <div  v-for="(article,index) in articles" :key="index" >
        <div style="padding-bottom:100px" v-if="article._id === articleId">
            <div class="banner">
                <div class="title">{{article.title}}</div>
                <div class="user__details">
                    <div class="user__details__info">
                        <img src="../assets/user.png" alt="User image">
                        <div class="username__date">
                            <p class="username">{{article.creator}}</p>
                            <p class="date">{{formatDate(article.createdAt)}}</p>
                        </div>
                        <!-- display if user is authenticated -->
                        <div v-if="isAuthenticated">
                            <div v-if="userDetails._id !== article.userId" class="buttons">
                                <button> +Follow Gerome</button>
                                <button>Favourite Article ({{article.likes}})</button>
                            </div>
                            <!-- can modify -->
                            <div v-else class="modify">
                                <button id="edit">Edit article</button>
                                <button @click="setDelete" id="delete">Delete Article</button>
                            </div>
                        </div>
                        <!-- display if user is unAuthenticated -->
                        <div v-else>
                            <div class="buttons">
                                <button @click="redirectToLogin"> +Follow Gerome</button>
                                <button @click="redirectToLogin" >Favourite Article ({{article.likes}})</button>
                            </div>
                            
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
                v-if="isAuthenticated"
                
            />
            <div v-else class="register">
                <p><router-link :to="{name:'Signin'}"> sign in</router-link> or <router-link :to="{name:'Signup'}"> sign up</router-link> to add a comment on this article</p>
            </div>
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
import storage from '../helpers/storage.js'
import { formatDate } from '../helpers/date'

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
            // user : (state) => state.userModule.user
        }),
        isAuthenticated(){
            return storage.isAuthenticated()
        },
        userDetails(){
            return JSON.parse(localStorage.getItem("user"));
        }
    },
    methods:{
        ...mapActions('articleModule',['getGlobalFeeds',"setDeleteId"]),
        ...mapActions('toggleModule',['toggleDeleteModal']),

        setDelete(){
            this.setDeleteId(this.articleId)
            this.toggleDeleteModal(true)
        },
        redirectToLogin(){
            this.$router.push({name:"Signin"})
        },
        formatDate(date){
            return formatDate(date)
        }
        
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
    height: 30px;
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
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    line-height: 40px;
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 50px;
}

.register{
    width: 50%;
    margin: auto;
}

.register p{
    font-size: 20px;
}

.register a{
    color:#008081;
    text-decoration: none;
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