<template>
    <div  class="signup">
        <form @submit.prevent="register" class="form" action="">
            <header>Sign up</header>
            <router-link to="/signin" class="form_p">Have an account ?</router-link>
            <input v-model="userDetails.email" required  placeholder="Email" type="text" name="" id="email">
            <input v-model="userDetails.username" required placeholder="Username" type="text" name="" id="username">
            <input v-model="userDetails.password" required  placeholder="Password" type="password" name="" id="password">
            <button>
                <Loader v-if="loading" />
                <p v-else>Sign up</p>
            </button>
            <p style="margin-top:20px;color:red">{{errMsg}}</p>
        </form>
    </div>
</template>

<script>
import Loader from '../components/loader.vue'

import { mapActions,mapState } from 'vuex'

export default {
    components:{ Loader },
    data(){
        return{
            userDetails:{
                email : "",
                username : "",
                password : "",    
            }
        }
    },
    methods:{
        ...mapActions('userModule',['signUp']),

        register(){
            this.signUp(this.userDetails);
        }

        
    },
    computed:{
        ...mapState({
            loading : (state)=>state.userModule.authLoading,
            errMsg : (state)=>state.userModule.errorMessage
        })
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
    font-weight: 700;
}

.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 20px;
}

.form p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 10px;
    color: #46344e;
    margin-bottom: 20px;
}

.form_p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-top: 10px;
    color: #46344e;
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
    padding-left: 20px;
    font-size: 18px;
    border-radius: 3px;
    border : 1px solid #D0D7DE;
    outline: none;
    /* padding-left: 20px; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}

.form button{
    width: 100%;
    height: 50px;
    cursor: pointer;
    background: #46344e;
    color: white;
    font-weight: 700;
    border: none;
    font-size: 18px;
    border-radius: 3px;
}

.form button p{
    color: white;
}

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