<template>
  <Nav />
  <router-view></router-view>
  <Footer />
</template>

<script>

import Nav from './components/nav.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Footer

  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow-x: hidden; */
  
}




</style>
