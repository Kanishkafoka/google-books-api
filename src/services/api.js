// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.items || [];
  } catch (error) {
    console.error('Error searching for books:', error);
    return [];
  }
};

export const getBookDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data || {};
  } catch (error) {
    console.error('Error fetching book details:', error);
    return {};
  }
};
