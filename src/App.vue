<template>
  <div id="app">
    <Header />
    <router-view /> <!-- all the routess injected here -->
  </div>
      <hr>
     <Footer />
</template>


<script>
import Footer from './components/Footer'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1e1f20; //the overall text color in the App
  font-weight: light
}


.btn{
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  text-align: left;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color: #502c41;

    &.router-link-exact-active { //active link
      color: #3520f1;
    }
  }
}
</style>