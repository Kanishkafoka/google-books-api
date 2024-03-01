// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import BookList from './BookList';

import backgroundImageWebp from '../creative-composition-world-book-day_23-2148883765.avif';
import backgroundImageJpeg from '../creative-composition-world-book-day_23-2148883765.avif';

const Home = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div
      className="min-h-screen p-8"
      style={{
        backgroundImage: `url(${backgroundImageWebp}), url(${backgroundImageJpeg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-75 p-8 rounded-md">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/details/123')}
        >
          Go to Details
        </button>

        <SearchBar onSearch={handleSearch} />

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Search Results</h2>
          <BookList books={searchResults} />
        </div>
      </div>
    </div>
  );
};

export default Home;
