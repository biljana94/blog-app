<template>
    <div class="container">
        <br>
        <h3> {{ post.title }} </h3>
        <br>
        <p> {{ post.text }} </p>
    </div>
</template>


<script>

import { posts } from '../services/PostsService.js';

export default {

    data() {
        return {
            post: {title: '', text: ''}, //jedan post ima title, text (MORA JEDNINA JER JE SinglePost stranica)
        }
    },

    //hook
    created() {
        //na ovu rutu mi prosledi parametar id (this.$route.params.id)
        posts.get(this.$route.params.id)
            .then(response => {
                this.post = response.data;
            })
    }
}
</script>
