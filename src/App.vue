<template>
  <Nav />
  <router-view></router-view>
  <Footer />
  <!-- modal && components -->
    <!-- <Toast /> -->
  <DeleteModal />
  <Background />
  <Notifications />

</template>

<script>

import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
import DeleteModal from './components/delete_modal.vue'
import Background from './components/background.vue'
import Notifications from './components/notifications.vue'
// import Toast from './components/toast.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    DeleteModal,
    Background,
    Notifications,
    // Toast

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  /* overflow-x: hidden; */
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  
}

body{
  user-select: none;
   -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
}




</style>
