import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';

const BookList = () => {
  const { books, loading } = useContext(BookContext);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Books</h2>
      {books.map(book => (
        <div key={book.id}>
          <Link to={`/books/${book.id}`}>{book.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
