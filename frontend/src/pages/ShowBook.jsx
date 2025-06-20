import React, { useEffect, useState } from 'react';

const ShowBook = () => {
const [book,setBook]=useState('');
const image1=`https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?
  semt=ais_hybrid&w=740`  ;
  const image2=`https://img.freepik.com/premium-vector/realistic-open-book-with-white-pages_257312-1108.jpg?
  semt=ais_hybrid&w=740`;
  const image3=`https://img.freepik.com/premium-vector/open-blue-book_251819-703.jpg?
  semt=ais_hybrid&w=740`;
  const image4=`https://img.freepik.com/free-vector/world-book-day-background-with-butterflies-realistic-style_23-2147608600.jpg?
  semt=ais_hybrid&w=740`;
  const image5=`https://img.freepik.com/free-psd/books-stack-icon-isolated-3d-render-illustration_47987-15482.jpg?
  semt=ais_hybrid&w=740`;

  
  return book ? (
    <div>
      <img
                  src={(ind%5==0)?image1:(ind%5==1)?image2:(ind%5==2)?image3:(ind%5==3)?image4:image5}
                  alt={book.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h2 className="mt-2 font-semibold">Title: {book.title}</h2>
                <h4 className=" font-bold">Author: {book.author}</h4>
                <p className=" ">Description: {book.description}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default ShowBook;

