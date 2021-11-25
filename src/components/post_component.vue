<template>
    <div id="post-list">
        <h1>Posts</h1>
        <p class="item" v-for="post in postsList" :key="post.id">
        <span class="date_time"> Posted on {{ post.date_time }} </span> <br>
        <img class ="avatar" v-bind:src=post.avatar> <b> </b> <!-- user's profile picture -->
        <span class="user"> {{ post.user}} </span> <br> <!-- user's name -->
        
        <img class="post-img" v-bind:src=post.img > <br> <!-- post image -->
        <span class="text"> {{ post.text }} </span> <br>
        
        <LikeButton /> <!-- Like button as a compoent -->
        </p>
    </div>
</template>
<script>


import LikeButton from "./LikeButton"

export default {
    name: "post_component",

    data: function(){
        return{
        }
    },
/*     filters:{
        tobold: function(value){
            return value.bold();
        }
    }, */
    components: {
        LikeButton // "Like" button as a component for each post
    },
    computed: {
        postsList(){
            return this.$store.state.postsList //reach out to the store to get the data; refers to the posts array in the state of the store
        }
    }
}
</script>

<style scoped>

.item{
    box-sizing: border-box;
	border: 2px solid #73AD21;
	height: 40 px;
	width: 800px;
	margin-left: 23%;
	padding: 10px;
	border: 2px solid #e0e0e0;

    }

.date_time{
  text-align: 100px;
  font-size: 13px;
  color: gray;
}

.text{
  text-align: left;
  font-size: 25px;
  color: black;
}

.post-img{
    width: 400px;
    height: 400px;
}

.avatar { /* profile picture round */
    border-radius: 60%;
	border-color: black;
	padding: 15px;
	width: 50px;
	height: 50px;
	margin-right: 700px;
}
.user {
    margin-right: 700px;
    font-size: 20px
}

</style>