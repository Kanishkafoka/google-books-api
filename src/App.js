// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookDetails from './components/BookDetails';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
