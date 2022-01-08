<template>
    <div class="signup">
        <form  @submit.prevent="login" class="form" action="">
            <header>Sign In</header>
            <router-link to="/signup" class="form_p">Don't have an account?</router-link>
            <input
                v-model="userDetails.email"
                placeholder="Email"
                type="text"
                name="email"
                id="email"
            >
            <input v-model="userDetails.password"  placeholder="Password" type="password" name="email" id="email">
            <button >
                <Loader v-if="loading" />
                <p v-else>Sign in</p>
            </button>
            <p style="margin-top:20px;color:red">{{errMsg}}</p>
        </form>
    </div>
</template>

<script>

import { mapActions,mapState } from 'vuex'
import Loader from '../components/loader.vue'

export default {
    components:{ Loader },
    data(){
        return{
            userDetails:{
                email : "",
                password : ""
            },
            buttonDisabled : false
        }
    },
    methods:{
        ...mapActions('userModule',['signIn']),

        login(){
            this.signIn(this.userDetails)
        }

       

        
    },
    computed:{
        ...mapState({
            loading : (state)=>state.userModule.signInLoading,
            errMsg : (state)=>state.userModule.errorMessage
        }),
        
    },
    
}
</script>

<style scoped>
.signup{
    padding-left: 200px;
    padding-right: 200px;
    display: flex;
    justify-content: center;
}

.signup h3{
    text-align: center;
    font-size: 30px;
    
}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 20px;
}

.form_p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 10px;
    color: #008081;
    margin-bottom: 20px;
}

.form header{
    font-size: 30px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
}

.form input{
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    outline: none;
    /* padding-left: 20px; */
    font-size: 18px;
    border-radius: 3px;
    border : 1px solid #D0D7DE; 
    outline: none;
    padding-left: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}

.form button{
    width: 100%;
    height: 50px;
    cursor: pointer;
    background: #008081;
    color: white;
    font-weight: 700;
    border: none;
    font-size: 18px;
    border-radius: 3px;
}



/* .form button img{
    height: 18px;
    animation: load 0.5s linear infinite;
}

@keyframes load {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
} */

@media  screen and (max-width:480px){
    .signup{
        padding-left:10px;
        padding-right:10px;
    }

    .form{
        width:100%;
    }

}

@media  screen and (min-width:480px) and (max-width:768px){
    .signup{
        padding-left:10px;
        padding-right:10px;
    }

    .form{
        width:50%;
    }

}
</style>