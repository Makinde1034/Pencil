<template>
    <nav class="nav">
        <div class="nav__logo">
            <router-link
                to="/"
                class="logo"
            >
                Pencil
             </router-link>
        </div>
        <ul class="nav__ul">
            <router-link to="/">Home</router-link>
            <router-link v-if="!token" to="/signin">Sign in</router-link>
            <router-link v-if="!token" to="/signup">Sign up</router-link>
            <router-link v-if="token" to="/publish">New article</router-link>
            <router-link v-if="token" to="/settings">Settings</router-link>
            <!-- <router-link v-if="token" to="/si">{{}}</router-link> -->
            <p v-if="token">{{userDetails.email}}</p>
            <img @click="toggleNotModal" src="../assets/notification.png" alt="">
        </ul>
    </nav>
</template>

<script>

import { mapState,mapActions } from 'vuex'

export default {
    components:{},
    data(){
        return{

        }
    },
    methods:{
        ...mapActions('toggleModule',['toggleNotificationModal']),
        toggleNotModal(){
            this.toggleNotificationModal()
        }

    },
    computed:{
        ...mapState({
            token : (state)=> state.userModule.token,
            user: (state)=> state.userModule.user

        }),
        userDetails(){
            return JSON.parse(localStorage.getItem("user"));
        }
    }

}
</script>

<style scoped>
.nav{
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding-left: 200px;
    padding-right: 200px;
    height: 60px;

    
}

.logo{
    color:#008081;
    text-decoration: none;
    font-weight: 500;
    font-size: 25px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.nav__ul{
    display: flex;
    
    justify-content: space-between;
    list-style: none;

}

.nav__ul a,p{
    padding: 0px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: rgb(184, 180, 180);
    text-decoration: none;
}

.nav__ul a:hover,p:hover{
    color: black;
}

.nav__ul img{
    height: 20px;
    cursor: pointer;
}

@media  screen and (max-width:480px){
    .logo{
        margin-bottom: 20px;
    }
    .nav{
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        flex-direction: column;
        height: auto;
    }
}

</style>