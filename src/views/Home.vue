<template>
  <div class="container">
    <div v-if="posts.length" class="grid">
      <PostsList :posts="posts" />
      <TagsCloud />
    </div>
    <Spinner v-else />
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import PostsList from "@/components/PostsList.vue";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner";

export default {
  components: { PostsList, Spinner },
  setup() {
    const { posts, error, fetchPosts } = getPosts();
    fetchPosts();

    return { posts, error };
  },
};
</script>


<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>