<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'posts'}">Posts</router-link>
                    </li>

                    <li class="nav-item active">
                        <router-link class="nav-link" :to="{name: 'add-post'}">Add</router-link>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    
}
</script>
