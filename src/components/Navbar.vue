<template lang="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
                <li class="nav-item">
                    <!-- <router-link class="nav-link active" to="/">Home -->
                    <router-link class="nav-link active" :to="{name: 'Home'}">Home
                        <span class="visually-hidden">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/blog">Blog</router-link> -->
                    <router-link class="nav-link" :to="{name: 'Blog'}">Blog</router-link>
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/about">About</router-link> -->
                    <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <div class="my-3">
        <button @click="previous" class="btn btn-danger">Preview</button>
        <button @click="redirect" class="btn btn-success">Redirect</button>
        <button @click="next" class="btn btn-info">Next</button>
    </div>
</template>
<script>
export default {
    methods: {
        previous(){
            this.$router.go(-1);
        },
        redirect(){
            this.$router.push('/');
        },
        next(){
            this.$router.go(1);
        }
    },
}
</script>
<style>
    .router-link-active{
        color: #42b983  !important;
        /*background-color: blanchedalmond;
        padding: 6px;*/
    }
</style>