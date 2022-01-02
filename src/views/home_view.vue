<template>
    <HomeLayout />
</template>

<script>
import HomeLayout from '../layout/home_layout/home_layout.vue'
import { mapActions } from 'vuex'
import storage from '../helpers/storage.js'

export default {
    name : "HomeView",
    components : {
        HomeLayout,
    },
    methods:{
        // ...mapActions('articleModule',['getGlobalFeeds'])
        ...mapActions('userModule',['getFollowNotifications'])
    },
    computed:{
        
    },
    created(){
        // this.getGlobalFeeds();
        if(storage.isAuthenticated()){
            this.getFollowNotifications()
        }
    }
}
</script>

<style>

</style>