<template>
  <div class="container">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostsList :posts="filteredTags" />
    </div>
  </div>
</template>

<script>
import PostsList from "@/components/PostsList";
import getPosts from "@/composables/getPosts";
import { computed, onMounted } from "@vue/runtime-core";

export default {
  props: ['id'],
  components: { PostsList },
  setup(props) {
    const { posts, error, fetchPosts } = getPosts();

    onMounted(() => {
      fetchPosts();
    });

    const filteredTags = computed(() => {
      return posts.value.filter(post => post.tags.includes(props.id))
    })

    return { posts, error,filteredTags };
  },
};
</script>

<style>
</style>