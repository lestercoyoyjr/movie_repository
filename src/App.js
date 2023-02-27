import {useEffect, useState} from 'react';

import './App.css';
import SearchIcon from './search.svg';

import MovieCard from './MovieCard';

// api test key 89ce9f35

const API_URL = 'http://omdbapi.com?apikey=89ce9f35';

const movie1 = {
    "Title": "The Amazing Spiderman 2 Webb Cut",
    "Year": "2021",
    "imdbID": "tt18351128",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

const App = () => {

  const [movies, setMovies] = useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // For now, just the info from the movies
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                  placeholder="Search for movies"
                  onChange={() => {}}
                />
                <img
                  src={SearchIcon}
                  alt="search"
                  onClick={() => {}}
                />
            </div>

            {
              movies?.length > 0
              ? (
                <div className='container'>
                  {movies.map((movie) => (
                    <MovieCard movie = {movie}/>
                  ))}
                </div>
              ) : (
                <div className='empty'>
                  <h2>No movies found</h2>
                </div>
              ) 
            }

        </div>
    );
}

export default App;