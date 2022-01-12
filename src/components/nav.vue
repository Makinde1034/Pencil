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
            <router-link 
                to="/"
            >
            Home
            </router-link>
            <router-link 
                v-if="!token" 
                to="/signin"
            >
            Sign in
            </router-link>
            <router-link 
                v-if="!token" 
                to="/signup"
            >
            Sign up
            </router-link>
            <router-link 
                v-if="token" 
                to="/publish"
            >
            New article
            </router-link>
            <router-link 
                v-if="token" 
                to="/settings"
            >
            Settings
            </router-link>
            <!-- <router-link v-if="token" to="/si">{{}}</router-link> -->
            <p @click="goToProfile(userDetails._id)"  v-if="token">{{userDetails.email}}</p>
            <img  v-if="token" @click="toggleNotModal" src="../assets/notification.png" alt="">
        </ul>
        <!-- mobile -->
        <ul class="nav__ul2">
            <router-link
                to="/"
                v-if="token"
            >
                <img src="../assets/home.png" alt="">
            </router-link>
            <li 
                @click="toggleNotModal" 
                v-if="token"
            >
                <img src="../assets/notification2.png" alt="">
            </li>
            <router-link
                to="/settings"
                v-if="token"
            >
                <img src="../assets/settings.png" alt="">
            </router-link>
            <!--  -->
            <router-link
                to="/signin"
                v-if="!token"
            >
                Sign in
            </router-link>
            <router-link
                to="/signup"
                v-if="!token"
            >
                Sign up
            </router-link>
        </ul>
    </nav>
</template>

<script>

import { mapState,mapActions } from 'vuex'
import storage from '../helpers/storage.js'

export default {
    components:{},
    data(){
        return{

        }
    },
    methods:{
        ...mapActions('toggleModule',['toggleNotificationModal']),

        toggleNotModal(){
            if(storage.isAuthenticated()){
                this.toggleNotificationModal()
            }else{
                this.$router.push({name:"Signin"})
            }
            
        },
        goToProfile(_id){
            this.$router.push({name:"Profile",params:{creator:_id}})
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
     user-select: none;
  /* overflow-x: hidden; */
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;

    
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

.nav__ul a,p, .nav__ul2 a,p{
    padding: 0px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: rgb(184, 180, 180);
    text-decoration: none;
    user-select: none;
  
}

.nav__ul a:hover,p:hover{
    color: black;
}

.nav__ul img{
    height: 20px;
    cursor: pointer;
}

.menu{
    display: none;
}

.nav__ul2{
    display: none;
}

@media  screen and (max-width:768px){
    /* .logo{
        margin-bottom: 20px;
    } */
    .nav{
        padding-left: 20px;
        padding-right: 20px;
        
    }

    .nav__ul{
        display: none;
    }

    .menu{
        display: block;
    }

    .nav__ul2{
        display: block;
    }

    .nav__ul2{
        display: flex;
        list-style-type: none;
        align-items: center;
    }

    .nav__ul2 li{
        margin: 0px 20px 0px 20px;
    }


    .nav__ul2 img{
        height: 18px;
       
    }
}



</style>