<template>
    <div>
        <Banner />
        <Global />
    </div>
</template>


<script>

import { mapActions } from 'vuex'

import Banner from '../components/banner.vue'
import Global from '../components/global_feed.vue'


export default {
    components:{
        Banner,
        Global
    },
    methods:{
        ...mapActions('userModule',['getFollowNotifications'])
    },
    mounted(){
        this.getFollowNotifications()
    }
}
</script>

<style>

</style>