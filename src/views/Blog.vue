<template>
    <div class="blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <post
            v-for="post in posts"
            :key="post.id"
            :views="post.views"
            :title="post.title"
            :date="post.date"
            :content="post.content"
            :author="post.author"
            :category="post.category"
        />
    </div>
</template>

<script>
import Post from "@/components/Blog/Post.vue";
import jsonPosts from "../json/posts.json";

export default {
    data: function() {
        return {
            pageName: "Blog",
            pageDescription: "All posts will be here in this page",
            posts: jsonPosts
        };
    },
    components: {
        Post
    }
};
</script>
