<template>
    <div class="comment">
        <form>
            <textarea
                placeholder="Write a comment"
                v-model="comment"
            >

            </textarea>
        </form>
        <div class="box">
            <img src="../assets/user.png" alt="">
            <button @click="addComment">Post comment</button>
        </div>
    </div>
</template>

<script scoped>

import { mapActions } from 'vuex'


export default {
    data(){
        return{
            comment:""
        }
    },
    props:{
        articleId :{
            type :String,
            
        },
        

    },
    methods:{
        ...mapActions('articleModule',['postComment']),
        addComment(){
            const data = {
                postId : this.articleId,
                comment : this.comment
            }
            this.postComment(data);
        }
    },
    computed:{
       
    }
}
</script>

<style scoped>
.comment{
    max-width: 50%;
    /* height: 200px; */
    border : 1px solid #D0D7DE;
    margin: auto;
    border-radius: 3px;
    background: #F5F5F5;
}

.comment textarea{
    width: 100%;
    border: none;
    outline: none;
    height: 150px;
    padding: 20px
}

.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;
}

.box img{
    height: 30px;
}

.box button{
    padding: 7px 20px;
    background: #008081;
    color: white;
    border: none;
    font-weight: 600;
    border-radius: 3px;
    cursor: pointer;

}


@media  screen and (max-width:768px){
    .comment{
        max-width: 100%;
    }

}


</style>