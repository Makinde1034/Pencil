<template>
    <div>
        <div :class="isModalOpen ? ['delete','delete__active' ] : 'delete' ">
            <p>Are you sure you want to delete?</p>
            <div class="button">
                <button @click="deleteArt">Delete</button>
            </div>
           
        </div>
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'

export default {
    computed:{
        ...mapState({
            isModalOpen : (state) => state.toggleModule.isDeleteModalOpen
        }),
        
    },
    methods:{
        ...mapActions('articleModule',['deleteArticle']),
        deleteArt(){
            this.deleteArticle()
        }
    }
}
</script>

<style scoped>
.delete{
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    max-width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.9);
    z-index: 2222;
    background: white;
    padding: 20px;
    border-radius: 3px;
    visibility: hidden;
    transition: 0.5s;
    opacity: 0;
}

.delete p{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.delete__active{
    visibility: visible;
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
}

.button{
    display: flex;
    justify-content: flex-end;
}

.button button:hover{
    background: rgb(231, 102, 102);;
    opacity: 0.8;
}

.delete button{
    background: none;
    border: 1px solid rgb(231, 102, 102);
    background: rgb(231, 102, 102);
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    height: 30px;
    width: 100px;
    float: right;
    margin-top: 20px;
    color: white;
}


</style>