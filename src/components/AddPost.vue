<template>
    <div class="container">

            <form @submit.prevent="addPost()">
                <br>

                <div class="form-group row">
                    <label>Post Title</label>
                    <input v-model="newPost.title" type="text" class="form-control form-control-lg" placeholder="Enter title">
                </div>

                <br>

                <div class="form-group row">
                    <label>Post Text</label>
                    <textarea v-model="newPost.text" class="form-control form-control-lg" rows="7"></textarea>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>

    </div>
</template>


<script>

import { posts } from '../services/PostsService.js';

export default {
    data() {
        return {
            newPost: {},
        }
    },

    methods: {
        addPost() {
            posts.add(this.newPost)
                .then(() => {
                    this.$router.push({ path: '/posts' });
                    this.newPost = {};
                })
        }
    },
}
</script>
