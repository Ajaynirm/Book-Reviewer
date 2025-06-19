import React, { createContext, useState, useEffect } from 'react';
import { fetchBooks } from '../services/api';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadBooks = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchBooks(`?search=${search}&page=${page}`);
      setBooks(data.books);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
      setError('Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [search, page]);

  return (
    <BookContext.Provider
      value={{
        books,
        totalPages,
        search,
        page,
        loading,
        error,
        setSearch,
        setPage,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
