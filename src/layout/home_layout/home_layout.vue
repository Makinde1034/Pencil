<template>
    <Banner />
    <Global />
</template>

<script>


import Banner from '../../components/banner.vue'
import Global from '../../components/global_feed.vue'

export default {
    name : "HomeLayout",
    components : {
        Banner,
        Global,
    }
}

</script>


<style scoped>

</style>