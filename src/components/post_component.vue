<template>
    <div id="post-list">
        <h1>Posts</h1>
        <p class="item" v-for="post in postsList" :key="post.id">
        <img class ="avatar" v-bind:src=post.avatar> <b> </b> <!-- user's profile picture -->
        <span class="user"> {{ post.user}} </span> <br> <!-- user's name -->
        
        <img class="post-img" v-bind:src=post.img > <br> <!-- post image -->
        <span class="text"> {{ post.text }} </span> <br> <!-- post text -->
        <span class="date_time"> Posted on {{ post.date_time }} </span> <br> <!-- the time when it was posted -->
        <LikeButton />
        <span class="likes"> {{ post.likes }} likes </span><!-- how many likes -->
    </p>
    </div> 
    
</template>

<script>
import LikeButton from './LikeButton.vue'

export default {
  components: { LikeButton },
    name: "post_component",
    data: function(){
        return{
            
        }
    },
    

    computed: {
        postsList(){
            return this.$store.state.postsList //reach out to the store to get the data; refers to the posts array in the state of the store
        },
        /* numberOfLikes(){
            return this.$state.getters.numberOfLikes
        } */
    }
}
</script>

<style scoped>

.item{
    background: #d4c2c2;
    margin-bottom: 5px;
    padding: 3px 5px;

    }

.date_time{
  text-align: left;
  font-size: 15px;
}

.text{
  text-align: left;
  font-size: 20px;
}

.post-img{
    width: 200px;
    height: 200px;
}

.avatar { /* profile picture round */
vertical-align: middle; /* user name in the middle of the pic*/
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

  .btn {
        padding: 3 px;
        border: 1px solid;
        background: rgb(216, 211, 211);
        color: blue;
        border-radius: 20px;
}

</style>