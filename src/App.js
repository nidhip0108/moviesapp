import React, { useState, useEffect } from 'react';
import './App.css';
import Searchicon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = process.env.REACT_APP_API;

const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();


        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input
                    placeholder='search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={Searchicon}
                    alt="search1"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))}
                        </div>) : (

                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )

            }
            <div className="container">
                <MovieCard movie1={movies[0]} />
            </div>
        </div>
    )
}




export default App;