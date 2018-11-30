<template>
    <div class="container">

            <form @submit.prevent="onSubmit()">
                <br>

                <div class="form-group row">
                    <label>Post Title</label>
                    <input v-model="newPost.title" type="text" class="form-control form-control-lg" placeholder="Enter title" minlength="2" required>
                </div>

                <br>

                <div class="form-group row">
                    <label>Post Text</label>
                    <textarea v-model="newPost.text" class="form-control form-control-lg" rows="7" maxlength="300" required></textarea>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
                <button @click="resetForm()" type="button" class="btn btn-danger">Reset Form</button>
            </form>

    </div>
</template>


<script>

import { posts } from '../services/PostsService.js';

export default {
    data() {
        return {
            newPost: {},

            editing: false,
        }
    },

    methods: {
        addPost() {
            posts.add(this.newPost)
                .then(() => {
                    this.$router.push({ path: '/posts' });
                    this.newPost = {};
                })
        },

        resetForm() {
            this.newPost = {};
        },

        editPost() {
            posts.edit(this.$route.params.id, this.newPost)
                .then(() => {
                    this.$router.push({ path: '/posts' });
                })
        },

        onSubmit() {
            if(this.editing) {
                this.editPost();
            } else {
                this.addPost();
            }
        }
    },

    //hook
    created() {
        if(this.$route.params.id) {
            posts.get(this.$route.params.id)
                .then(response => {
                    this.editing = true;
                    this.newPost = response.data;
                })
        }
    }
}
</script>
