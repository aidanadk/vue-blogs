import { ref } from 'vue';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const fetchPost = async () => {
    try {
      const response = await fetch('http://localhost:3000/posts/' + id)

      if (!response.ok) {
        throw Error('Нет данных в базе')
      }

      post.value = await response.json();

    }
    catch (err) {
      error.value = err.message || 'Невозможно получить данные из сервера'
    }
  }

  return { post, error, fetchPost }
}

export default getPost;