import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from '../components/BookCard';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const {
    books,
    totalPages,
    page,
    loading,
    error,
    setSearch,
    setPage,
  } = useContext(BookContext);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">📚 Book List</h1>
      <SearchBar onSearch={(term) => setSearch(term)} />

      {loading && <p className="text-center mt-4">Loading books...</p>}
      {error && <p className="text-center text-red-600 mt-4">{error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
            {books.length === 0 && (
              <p className="text-center col-span-3">No books found.</p>
            )}
          </div>

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Home;
