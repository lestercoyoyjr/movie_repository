import {useEffect} from 'react';

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
        <h1>App</h1>
    );
}

export default App;