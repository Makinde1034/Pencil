<template>
    <div :class=" isToastActive ? ['toast','toast__active'] : 'toast' ">{{toastMsg}}</div>
</template>

<script>

import { mapState  } from 'vuex'

export default {
    computed:{
        ...mapState({
            isToastActive : (state) => state.articleModule.toast.isActive,
            toastMsg : (state) => state.articleModule.toast.msg
        })
       
    }
}
</script>

<style scoped>
.toast{
    height: 40px;
    width: 300px;
    background: #008081;;
    bottom: 100px;
    left: 50px;
    position: absolute;
    z-index: 1000;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s ease;

}

.toast__active{
    visibility: visible;
    opacity: 1;
}
</style>