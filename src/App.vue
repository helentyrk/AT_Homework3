<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact us</router-link>
  </div>

  <router-view />
  <hr>
  <Posts />
  <Footer />
</template>


<script>
import Footer from './components/Footer'
import Posts from './components/Posts'

export default {
  name: 'App',
  components: {
    Footer,
    Posts
  }, 
  data(){
    return{
      posts:[]
    }
  },
  created(){
    this.posts = [{"id":1,"img":"https://i.imgur.com/NedYPgU.png","text":"I think it's going to rain.","user":"Gordon","avatar":"https://i.imgur.com/C46EtWD.jpg","date_time":"Sep 27, 2021 13:12"},{"id":2,"img":"https://i.imgur.com/GH0O7IB.jpg","text":"Which weighs more, a pound of feathers or a pound of bricks?","user":"Lucas","avatar":"https://i.imgur.com/UgzQ73P.png","date_time":"Sep 25, 2021 19:32"},{"id":3,"img":"https://i.imgur.com/v2VblqK.png","text":"Felt cute, might delete later.","user":"Robert","avatar":"https://i.imgur.com/wa3hoMs.jpg","date_time":"Sep 19, 2021 09:12"},{"id":4,"img":"https://i.imgur.com/obu1UVC.jpg","text":"Random picture","user":"Alex","avatar":"https://i.imgur.com/AAu3udk.jpg","date_time":"Sep 13, 2021 03:12"},{"id":5,"img":"https://i.imgur.com/yFdPgDf.jpg","text":"Join my Discord channel","user":"Martin","avatar":"https://i.imgur.com/AAu3udk.jpg","date_time":"Sep 11, 2021 16:12"},{"id":6,"img":"https://i.imgur.com/bkt4onR.jpg","text":"How to chop a tree in Minecraft???.","user":"Steve","avatar":"https://i.imgur.com/Nz5v2o7.png","date_time":"Sep 9, 2021 11:00"},{"id":7,"img":"https://i.imgur.com/jmZ5c29.png","text":"The finest ingredients are brought together with love and care, then slow cooked to perfection. Yes, the old ways are still best at Los Pollos Hermanos. But don't take my word for it. One taste, and you'll know.","user":"Gustavo","avatar":"https://i.imgur.com/uxZ3HVv.jpg","date_time":"Sep 9, 2021 13:30"},{"id":8,"img":"https://i.imgur.com/SoTU9rS.jpg","text":"Happy Birthday, Mark!!!","user":"Eric","avatar":"https://i.imgur.com/AAu3udk.jpg","date_time":"Sep 8, 2021 19:18"},{"id":9,"img":"https://i.imgur.com/VEXzqbv.png","text":"I hate dairy products.","user":"Sandra","avatar":"https://i.imgur.com/KXkaipL.jpg","date_time":"Sep 7, 2021 06:46"},{"id":10,"img":"https://i.imgur.com/HNB0NA1.jpg","text":"It's Wednesday my dudes.","user":"Edgar","avatar":"https://i.imgur.com/MFK0x1X.png","date_time":"Sep 1, 2021 00:00"}]
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
