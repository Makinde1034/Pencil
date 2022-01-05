<template>
    <div class="comment">
        <div class="comment__in">
            <p>{{comment.comment}}</p>
        </div>
        <div class="creator">
            <div class="user">
                <img src="../assets/user.png" alt="">
                <p>{{comment.creator}}</p>
            </div> 
            <button v-if="canModify">Delete</button>
        </div>
    </div>
    
</template>

<script>

import { mapState } from 'vuex'

export default {
    props:{
        comment : {
            type : Object,
            required : true
        },
        creator : {
            type : String
        }
    },
    computed:{
        ...mapState({
            user : (state)=> state.userModule.user
        }),
        canModify(){
            if(this.creator===this.user.email){
                return true
            }
            return false
        }
    }
}
</script>

<style scoped>
.comment{
    width: 50%;
    /* padding-top: 30px;
    padding-left: 30px; */
    border : 1px solid #D0D7DE;
    margin: auto;
    border-radius: 3px;
    margin-top: 20px;
}

.comment__in{
    padding: 20px;
}

.creator{
    /* height: 50px; */
    width: 100%;
    background: #F6F8FA;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

}

.user{
    display: flex;
    align-items: center;
}

.user img{
    height: 30px;
    margin-right: 10px;
}


@media  screen and (max-width:768px){
    .comment{
        width: 100%;
    }
}


</style>