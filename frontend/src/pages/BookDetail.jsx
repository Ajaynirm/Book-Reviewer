import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error(err));
  }, [id]);

  return book ? (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default BookDetails;
