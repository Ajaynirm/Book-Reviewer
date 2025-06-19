const BookCard = ({ book }) => (
    <div className="border rounded shadow p-4">
      <h2 className="text-xl font-semibold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="mt-2 text-sm">{book.description}</p>
    </div>
  );
  
  export default BookCard;
  