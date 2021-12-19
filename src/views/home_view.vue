<template>
    <HomeLayout />
</template>

<script>
import HomeLayout from '../layout/home_layout/home_layout.vue'
// import { mapActions } from 'vuex'

export default {
    name : "HomeView",
    components : {
        HomeLayout,
    },
    methods:{
        // ...mapActions('articleModule',['getGlobalFeeds'])
    },
    computed:{
        
    },
    created(){
        // this.getGlobalFeeds();
    }
}
</script>

<style>

</style>