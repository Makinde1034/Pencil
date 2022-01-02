<template>
    <div>
        <div @click="closeModal"  :class="isModalOpen ? ['background','background--active'] : 'background' "></div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed:{
     
        ...mapState({
            isModalOpen : (state) => state.toggleModule.isDeleteModalOpen
        })
        
    },
    methods:{
        ...mapActions('toggleModule',['toggleDeleteModal']),
        closeModal(){
            this.toggleDeleteModal(false)
        }
    }
}
</script>

<style scoped>
.background{
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0px;
    background: rgba(0, 0, 0, 0.7);
    z-index: 3;
    visibility: hidden;
    transition: 0.5s ease;
    opacity : 0;
}

.background--active{
    visibility: visible;
    opacity : 1;
}
</style>