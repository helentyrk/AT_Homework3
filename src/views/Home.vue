<template>
  <div class = "home">
    <post_component ></post_component>
    <button @click="reset">Reset number of likes</button>
</div>
</template>

<script>
import post_component from "@/components/post_component.vue"; //import post component (from where it is coming from)

export default {
  name: "Home",
  components: {
    post_component //register the post component
  },

  data(){
    return{
    
    }
  },
      
}
</script>