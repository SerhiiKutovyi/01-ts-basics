import axios from 'axios';

interface User {
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<User[]> {
  const response = await axios.get<User[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then(posts => {
  console.log(posts[0].title);
});
