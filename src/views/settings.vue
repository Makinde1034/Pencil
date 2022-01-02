<template>
    <div class="settings">
        <form @submit.prevent="update"  enctype="multipart/form-data">
            <fieldset>
                <input 
                    class="custom-file-input" 
                    placeholder="Enter URL to your avarter" 
                    size="60"  
                    type="text"
                    v-model="profile.image"
                    required
                    
                >
                <input 
                    placeholder="Enter your username" 
                    type="text"
                    v-model="profile.username"
                    required
                >
                <textarea
                    placeholder="Enter your bio"
                    v-model="profile.bio"
                    required
                >
                </textarea>
                <!-- <input 
                    placeholder="Email" 
                    type="Email"
                    v-model="profile.email"
                > -->
                <button>submit</button>
                <!-- <input placeholder="Password" type="Password"> -->
            </fieldset>
        </form>
        <div class="logout">
            <button @click="signOut">Logout</button>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    data(){
        return{
            profile:{
                image : "",
                username : "",
                bio : "",
            }
        }
    },
    methods:{
        ...mapActions('userModule',['updateUserProfile']),
        ...mapActions('userModule',['logout']),
        getFile(event){
            this.profile.image = event.target.files

        },
        update(){
            this.updateUserProfile(this.profile);
            // alert("Profile update coming soon")
        },
        signOut(){
            this.logout()
        }
        
    }
}
</script>

<style scoped>

.settings {
    display: flex;
    padding-top: 50px;
    padding-bottom: 100px;
    align-items: center;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.settings form{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.settings h1{
    margin-bottom: 20px;
}

.settings fieldset{
    border: none;
    width: 100%;
}

.settings input{
    width: 100%;
    height: 50px;
    border:1px solid #AAAAAA;
    border-radius: 3PX;
    margin-bottom: 30px;
    outline: none;
    padding-left: 20px;
}

.settings textarea{
    width: 100%;
    height: 200px;
    border:1px solid #AAAAAA;
    border-radius: 3PX;
    margin-bottom: 30px;
    outline:none;
    padding: 20px;
}

.settings form button{
    float: right;
    padding: 12px 50px;
    border-radius: 5px;
    border: none;
    background: #008081;
    cursor: pointer;
    color: white;
    font-weight: 600;

}

.logout{
    width: 30%;
    margin-top: 30px;
}

.logout button{
    padding: 12px 50px;
    background: none;
    border: 1px solid rgb(231, 102, 102);
    color: rgb(231, 102, 102);
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
}

.logout button:hover{
    background: rgb(231, 102, 102);;
    color:
    white;
}

@media  screen and (max-width:480px){

    .settings{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 30px;
        padding-bottom: 300px;
    }

    .settings form{
        width: 100%;
    }

    .logout{
        width:100%;
    }

}

</style>