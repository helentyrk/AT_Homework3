<template>
    <button class="btn" v-on:click="IncreaseLikes"> Like </button>  <!--button for likes, on click the number of clicks gets counted-->

</template>

<script>
export default {
    name: 'LikeButton',
    data: function(){ 
        return {
            
        }
    },
    methods:{
        IncreaseLikes: function(){
            this.$store.dispatch("IncreaseLikesAct")
        }
    },
}

</script>

<style scoped>
    .btn {
        padding: 3 px;
        border: 1px solid;
        background: rgb(216, 211, 211);
        color: blue;
        border-radius: 20px;
}
p {
    font-size: 15px;
}
</style>