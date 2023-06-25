<template lang="">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <div class="float-end"><router-link class="btn btn-primary" :to="{name: 'Blog'}">Back to List</router-link></div>
        </div>
    </div>
    <div class="row my-4">
        <div class="col-md-6 mx-auto">
            <h1 class="my-2">New Post</h1>
            <form @submit.prevent="createPost">
                <div class="form-group">
                    <label for="Title" class="form-label">Title</label>
                    <input v-model="title" id="Title" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="Content" class="form-label">Content</label>
                    <textarea v-model="content" name="" id="Content" cols="30" rows="3" class="form-control"></textarea>
                </div>
                <br>
                <button class="btn btn-success w-100">Add</button>
            </form>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        createPost() {
            let post = {
                title: this.title,
                content: this.content,
                slug: this.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, `-and-`).replace(/--/g, `-`)
            };
            fetch('http://localhost:5000/posts',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(post)
            })
            .then(() => this.$router.push('/blog'))
            .catch(err => console.log(err.message))
        }
    },
}
</script>
<style lang="">
    
</style>