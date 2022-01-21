<template>
    <div class="verification">
        <p>{{verificationMessage}}</p>
        <!-- <button>Sign in</button> -->
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState({
            verificationMessage : (state) => state.userModule.verificationMessage
        })
    }
}
</script>

<style scoped>
.verification{
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
}

.verification p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
    width: 50%;
    text-align: center;
}
</style>