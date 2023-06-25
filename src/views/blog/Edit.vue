<template lang="">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <div class="float-end"><router-link class="btn btn-primary" :to="{name: 'Blog'}">Back to List</router-link></div>
        </div>
    </div>
    <div class="row my-4">
        <div class="col-md-6 mx-auto">
            <h1 class="my-2">Edit Post</h1>
            <form @submit.prevent="editPost">
                <div class="form-group">
                    <label for="Title" class="form-label">Title</label>
                    <input v-model="post.title" id="Title" type="text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="Content" class="form-label">Content</label>
                    <textarea v-model="post.content" name="" id="Content" cols="30" rows="3" class="form-control"></textarea>
                </div>
                <br>
                <button class="btn btn-warning w-100">Update</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    props: ['id'],
    data() {
        return {
            url: `http://localhost:5000/posts/${this.id}`,
            post: {
                title: '',
                content: '',
                slug: ''
            }
            
        }
    },
    methods: {
        editPost() {
            if(this.title == '' || this.content == ''){
                return;
            }
            this.post.slug = this.post.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, `-and-`).replace(/--/g, `-`);
            fetch(this.url, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.post)
            })
                .then(res => res.json())
                /*.then(data => {
                    this.title = data.title,
                    this.content = data.content
                })*/
                .then(data => this.$router.push('/blog'))
                .catch(err => console.log(err.message))
        }
    },
    mounted() {
        fetch(this.url)
            .then(res => res.json())
            /*.then(data => {
                this.title = data.title,
                this.content = data.content
            })*/
            .then(data => this.post = data)
            .catch(err => console.log(err))
    }
}
</script>
<style lang="">
    
</style>