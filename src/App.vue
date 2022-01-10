<template>
  <Nav />
  <router-view></router-view>
  <Footer />
  <!-- modal && components -->
  <DeleteModal />
  <Background />
  <notifications />
</template>

<script>

import Nav from './components/nav.vue'
import Footer from './components/footer.vue'
import DeleteModal from './components/delete_modal.vue'
import Background from './components/background.vue'
import Notifications from './components/notifications.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
    DeleteModal,
    Background,
    Notifications

  }
}
</script>

<style>
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




</style>
