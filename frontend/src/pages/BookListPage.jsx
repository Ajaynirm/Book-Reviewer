import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../services/api';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import BookCard from '../components/BookCard';

const BookListPage = () => {
  const [books, setBooks] = useState([]);
  const [filters, setFilters] = useState({ search: '', page: 1 });
  const [totalPages, setTotalPages] = useState(1);

  const loadBooks = async () => {
    try {
      const query = `?search=${filters.search}&page=${filters.page}`;
      const data = await fetchBooks(query);
      setBooks(data.books || []);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBooks();
  }, [filters]);

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">📚 Book List</h1>
      <SearchBar onSearch={(search) => setFilters({ ...filters, search, page: 1 })} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination
        currentPage={filters.page}
        totalPages={totalPages}
        onPageChange={(page) => setFilters({ ...filters, page })}
      />
    </div>
  );
};

export default BookListPage;
