<template>
    <div class="post">
        <h3>{{post.text}}</h3>
        <p>{{post.user}}</p>
    </div>
</template>

<script>
export default {
    name: 'Post',
    props: {
        post: Object
    },
}
</script>

<style>
.post {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}
.post h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>