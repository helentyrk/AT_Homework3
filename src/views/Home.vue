<template>
  <div class = "home">
    <post_component > </post_component>
    <button class="btn" v-on:click="likesReset">Reset number of likes</button>
</div>
</template>

<script>
import post_component from "@/components/post_component.vue"; //import post component 

export default {
  name: "Home",
  components: {
    post_component //register the post component
  },
  
methods: {
  likesReset: function(){
    this.$store.dispatch("likesResetAct")
}     
}
}
</script>