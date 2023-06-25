<template lang="">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <div class="float-end"><router-link class="btn btn-primary" :to="{name: 'Create'}">New</router-link></div>
        </div>
    </div>
    
    <div class="row" v-if="posts.length">
        <div class="col-md-6 my-4" v-for="post in posts">
            <OnePost :post="post" @delete="handleDelete($event)"/>
        </div>
    </div>
    <div v-else>Loading...</div>
</template>
<script>
    import OnePost from './OnePost.vue'
export default {
    components: {OnePost},
    data() {
        return {
            posts: [],
            //toggle: false
        }
    },
    mounted() {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => this.posts = data)
            .catch(err => console.log(err))
    },
    methods: {
        handleDelete(id){
            this.posts = this.posts.filter(post => post.id != id)
        }
    },
}
</script>
<style lang="">
    
</style>