<template>
    <div>
        <div :class=" isOpen ? ['not','not__active'] : 'not' ">
            <header>
                <h3>Notifications</h3>
                <img src="../assets/notification.png" alt="">
            </header>
            <div class="no__not" v-if="followers.length === 0">
                <p>You do not have any notification.</p>
            </div>
            <div v-for="(follower,index) in followers" :key="index"  class="notifications">
                <img src="../assets/user.png" alt="">
                <p>{{follower.user.email}} <span>followed</span> you</p>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState({
            isOpen : (state) => state.toggleModule.isNotificationModalOpen,
            followers : (state) => state.userModule.followers
        })
    }
}
</script>

<style>
.not{
    height: 100px;
    width: 300px;
    background: rgb(236, 234, 234);
    position: absolute;
    border-radius: 3px;
    top: 70px;
    right: 200px;
    padding: 10px;
    visibility: hidden;
    opacity: 0;
    transition: 0.1s ease-out;
    transform: translateX(10px);
    overflow-y: scroll;

}

.not__active{
    visibility: visible;
    opacity: 1;
    transform: translateX(0px);
}

.not header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(213, 204, 204);
    padding-bottom: 10px;
    
}
.not header h3{
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.not header img{
    height: 15px;
}

.notifications{
    display: flex;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(213, 204, 204);
   

}

.viewed{
    background: rgb(186, 186, 213);
}

.notifications p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    font-weight: 600;

}

.notifications span{
    font-weight: 900;
}

.notifications img{
    height: 20px;
    width: 20px;
    margin-right: 20px;
}

.no__not{
    padding-top: 20px;

}

.no__not p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
}


@media  screen and (max-width:768px){

    .not{
        height: 100px;
        width: 90%;
        margin: auto;
        right: 10px;
       
      
    }

}
</style>