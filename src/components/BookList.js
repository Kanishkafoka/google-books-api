// src/components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  // Check if books is undefined or not an array
  if (!books || !Array.isArray(books)) {
    return <div>No books available.</div>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <Link to={`/details/${book.id}`}>
            {/* Check if imageLinks is defined before accessing thumbnail */}
            {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            )}
            <h3>{book.volumeInfo.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
