import React from 'react';

const MovieCard = ({ movie }) => {
    // Check if movie is undefined or null
    if (!movie) {
        return <div>Loading...</div>;
    }

    // Extract movie properties with default values for safety
    const { Year = 'Unknown Year', Poster = 'N/A', Title = 'Unknown Title', Type = 'Unknown Type' } = movie;

    return (
        <div className="movie">
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img
                    src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
                    alt={Title}
                />
            </div>
            <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
