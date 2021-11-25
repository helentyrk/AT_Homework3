<template>
  <div class = "home">
    <post_component ></post_component>
    <Reset />
    
</div>
</template>

<script>
import post_component from "@/components/post_component.vue"; //import post component (from where it is coming from)
import Reset from "@/components/Reset.vue"


export default {
  name: "Home",
  components: {
    post_component, //register the post component
    Reset, 
  },

  data(){
    return{
    
    }
  },
      
}
</script>