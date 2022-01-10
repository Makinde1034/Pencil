<template>
    <router-link to="/publish" v-if="isAuthenticated" >
        <div class="publish">
            <img :src="user.image" alt="">
            <input type="text">
        </div>
    </router-link>
    
</template>

<script>
import { mapState } from 'vuex'
import storage from '../helpers/storage'

export default {
    computed : {
        ...mapState({
            // user : (state) => state.userModule.user
        }),

        user(){
            return JSON.parse(localStorage.getItem("user"));
        },

        isAuthenticated(){
            return storage.isAuthenticated()
        }
    }
}
</script>

<style scoped>
.publish{
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 20px;
    display: none;
    
}

.publish img{
    height:50px;
    border-radius: 100%;
}

.publish input {
    max-width: 500px ;
    width: 500px;
    height: 80px;
    border: 1px solid gainsboro;
    border-radius: 50px;
    outline: none;
}

@media screen and (max-width:480px) {
    .publish{
        display: block;
    }
}
</style>