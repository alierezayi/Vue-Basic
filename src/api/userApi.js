import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
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
export const getUserDetails = async (id) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
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
