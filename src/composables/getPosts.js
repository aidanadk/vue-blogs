import {ref} from 'vue'

const getPosts = () => {
  const posts = ref([]);
  const error = ref("");

  const fetchPosts = async () => {
    try {
      const response = await fetch("http://localhost:3000/posts");

      const json = await response.json();

      posts.value = await json;
    } catch (err) {
      error.value = "Не смог получить данные из бекенда";
    }
  };

  return {posts, error, fetchPosts}
}

export default getPosts