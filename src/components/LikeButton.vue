<template>
    <button class = 'btn' @click="count++">Like </button> <!--button for likes, on click the number of clicks gets counted-->
    <p> {{count}} like(s) </p> 
</template>

<script>
export default {
    name: 'LikeButton',
    data: function(){ //data passed as a function (since it is a basic component), counts clicks
        return {
            count: 0
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
