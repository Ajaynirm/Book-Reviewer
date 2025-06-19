import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:30300', 
});

export const fetchBooks = async (query) => {
  const res = await API.get(`/books/search${query}`);
  return res.data;
};


