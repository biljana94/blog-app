<template>
    <div class="container">
        <br>
        <h1>All Posts</h1>
        <br>

        <ul class="list-group list-group-flush" v-for="(post, index) in posts" :key="index">
            <li class="list-group-item list-group-item-info">
                {{ post.title }}
                <button @click="navigateToSinglePost(post.id)" type="button" class="btn btn-light">View Post</button>

                <router-link :to="{ name: 'edit-post', params: {id: post.id} }">
                    <button type="button" class="btn btn-light">Edit Post</button>
                </router-link>

                <button @click="deletePost(post.id)" type="button" class="btn btn-danger">Delete</button>
                
            </li>
        </ul>
    </div>
</template>


<script>

import { posts } from '../services/PostsService.js';
import SinglePost from './SinglePost.vue';

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
    },

    methods: {
        navigateToSinglePost(id) {
            this.$router.push({ path: `/posts/${id}` });
        },

        deletePost(id) { //moramo poslediti id posta koji brisemo, a taj id pisemo u pozivu fnc @click="deletePost(post.id)"
            posts.delete(id) //pozivamo fnc iz servisa
                .then(response => {
                    this.posts = this.posts.filter(post => { //filtriramo this.posts(posts:[]), uzimamo 1 post
                        return post.id != id; //i vracamo tabelu bez tog posta(id) koji smo obrisali prethodno (posts.delete(id))
                    });
                });
        }
    },
}
</script>
