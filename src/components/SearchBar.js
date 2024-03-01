import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Wrap handleSearch in useCallback
  const handleSearch = useCallback(async (searchQuery) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
      const data = await response.json();

      onSearch(data.items);

      // Navigate to another route if needed
      navigate('/');
    } catch (error) {
      console.error('Error fetching books:', error);
      // Handle error gracefully, show an error message to the user, etc.
    }
  }, [onSearch, navigate]);

  // Include handleSearch in the dependency array
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleSearch(query);
    }, 300);

    // Cleanup the timeout to avoid unnecessary requests
    return () => clearTimeout(delaySearch);
  }, [query, navigate, onSearch, handleSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
