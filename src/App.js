import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = (query) => {
    // Implementasi pencarian film
    // Set hasil pencarian ke state movies
  };

  useEffect(() => {
    // Ambil data film awal, misalnya dari API
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchBar onSearch={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
