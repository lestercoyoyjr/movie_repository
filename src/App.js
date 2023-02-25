import {useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';

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

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // For now, just the info from the movies
        console.log(data.Search);
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

            <div className='container'>
              <div className='movie'>
                <div>
                  <p>{movie1.Year}</p>
                </div>

                <div>
                    <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title}/>
                </div>
              </div>
            </div>
        </div>
    );
}

export default App;