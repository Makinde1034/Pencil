<template>
    <div  class="signup">
        <form @submit.prevent="register" class="form" action="">
            <header>Sign up</header>
            <p>Have an account ?</p>
            <input v-model="userDetails.email"  placeholder="Email" type="text" name="" id="">
            <input v-model="userDetails.username" placeholder="Username" type="text" name="" id="">
            <input v-model="userDetails.password"  placeholder="Password" type="password" name="" id="">
            <button>Sign up</button>
        </form>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data(){
        return{
            userDetails:{
                email : "",
                username : "",
                password : ""
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
    color: #008081;
    margin-bottom: 20px;
}

.form header{
    font-size: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    background: #008081;
    color: white;
    font-weight: 700;
    border: none;
    font-size: 18px;
    border-radius: 3px;
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
</style>