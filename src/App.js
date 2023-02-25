import {useEffect} from 'react';

import './App.css';
import SearchIcon from './search.svg';

// api test key 89ce9f35

const API_URL = 'http://omdbapi.com?apikey=89ce9f35';

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
                  
                />
                <img
                  src={SearchIcon}
                  alt="search"
                />
            </div>
        </div>
    );
}

export default App;