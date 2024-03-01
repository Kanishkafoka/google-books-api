// src/components/Bookmark.js
import React, { useState, useEffect } from 'react';

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    // Load bookmarks from local storage on component mount
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);

  const addBookmark = (book) => {
    // Add a book to bookmarks
    const updatedBookmarks = [...bookmarks, book];
    setBookmarks(updatedBookmarks);
    // Save updated bookmarks to local storage
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  const removeBookmark = (bookId) => {
    // Remove a book from bookmarks
    const updatedBookmarks = bookmarks.filter((book) => book.id !== bookId);
    setBookmarks(updatedBookmarks);
    // Save updated bookmarks to local storage
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div>
      <h2>Bookmarks</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet. Save your favorite books!</p>
      ) : (
        <ul>
          {bookmarks.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author}{' '}
              <button onClick={() => removeBookmark(book.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Bookmark;
