<template>
    <button class = 'btn2' @click="reset">Reset the number of likes</button> 
</template>

<script>
export default {
    name: 'Reset',
    methods: {
        reset(){
            window.location.reload();
        }
    }
}

</script>

<style scoped>
    .btn2 {
        padding: 3 px;
        border: 1px solid;
        background: rgb(216, 211, 211);
        color: black;
        border-radius: 20px;
}
p {
    font-size: 15px;
}
</style>