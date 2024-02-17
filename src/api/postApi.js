import axios from "axios";

export const getAllPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: [],
      error: error.message,
    };
  }
};
export const getPostDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return {
      data: response.data,
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: error,
    };
  }
};
