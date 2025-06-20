import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:30300', 
});

export const fetchBooks = async (query) => {
  const res = await axiosInstance.get(`/books/search${query}`);
  return res.data;
};


