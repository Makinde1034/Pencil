const toggleModule = {
    namespaced : true,
    state(){
        return {
            isDeleteModalOpen : false,
            isNotificationModalOpen : false
        }
    },
    actions:{
        toggleDeleteModal({commit},data){
            commit("toggleDeleteModal",data);
        },
        toggleNotificationModal({commit},data){
            commit("toggleNotificationModal",data);
        }
    },
    mutations:{
        toggleDeleteModal(state,data){
            state.isDeleteModalOpen = data
        },
        toggleNotificationModal(state){
            state.isNotificationModalOpen = !state.isNotificationModalOpen
        }
    }
}
export default toggleModule