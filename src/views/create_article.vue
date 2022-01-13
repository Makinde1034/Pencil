<template>
    <div class="publish">
       <form @submit.prevent="publishArticle">
            <input
                type="text"
                placeholder="Title"
                v-model="post.title"
                required
            >
            <textarea
                placeholder="Write your article"
                v-model="post.body"
                required
            >
            </textarea>
            <div class="button">
                <button>Publish</button>
            </div>
            
       </form>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data(){
        return{
            post : {
                title : "",
                body : ""
            }
        }
    },
    methods:{
        ...mapActions('articleModule',['publish']),

        publishArticle(){
            this.publish(this.post)
        }
    }
}
</script>

<style scoped>
.publish{
    display: flex;
    justify-content: center;
    padding-top: 50px;
    
}

.publish form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.publish form input{
    width: 100%;
    height: 50px;
    border:1px solid #AAAAAA;
    border-radius: 3PX;
    margin-bottom: 30px;
    outline: none;
    padding-left: 20px;
}

.publish textarea{
    width: 100%;
    height: 200px;
    border:1px solid #AAAAAA;
    border-radius: 3PX;
    margin-bottom: 30px;
    outline: none;
    padding: 20px;
}

.publish form button{

    padding: 12px 50px;
    border-radius: 5px;
    border: none;
    background: #46344e;
    cursor: pointer;
    color: white;
    font-weight: 600;
}

.button{
    display: flex;
    justify-content: flex-end;
    width: 100%;
}


@media  screen and (max-width:480px){

    .publish{
        padding-left: 20px;
        padding-right: 20px;
    }

    .publish form {  
        width: 100%;
    }

}



</style>