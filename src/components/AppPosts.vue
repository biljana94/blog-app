<template>
    <div class="container">
        <br>
        <h1>All Posts</h1>
        <br>

        <ul class="list-group list-group-flush" v-for="(post, index) in posts" :key="index">
            <li class="list-group-item list-group-item-info"> {{ post.title }} </li>
        </ul>
    </div>
</template>


<script>

import { posts } from '../services/PostsService.js';

export default {
    data() {
        return {
            posts: [], //vracamo niz postova
        }
    },

    //
    created() {
        posts.getAll()
            .then(response => {
                this.posts = response.data;
            })
    }
}
</script>
