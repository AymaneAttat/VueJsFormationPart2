<template lang="">
    <div v-if="post">
        <h1>{{post.title}}</h1>
        <h2>id : {{id}} | Slug : {{slug}}</h2>
        <p>{{post.content}}</p>
    </div>
    <div v-else class="text-center">Loading...</div>
</template>
<script>
export default {
    props: ['id', 'slug'],
    /*data() {
        return{ id: this.$route.params.id, slug: this.$route.params.slug }
    }*/
    data() {
        return {
            post: null
        }
    },
    mounted() {
        fetch(`http://localhost:5000/posts/${this.id}`)
            .then(res => res.json())
            .then(data => this.post = data)
            .catch(err => console.log(err))
    }//fetch('http://localhost:5000/posts' + this.id) ou.then(data => console.log(data))
}
</script>
<style lang="">
    
</style>