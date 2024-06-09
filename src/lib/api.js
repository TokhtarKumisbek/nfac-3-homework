import axios from 'axios';

const API_URL = 'https://dummyjson.com/posts'; // DummyJSON API URL for posts

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.posts; // Adjust according to the API response structure
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
