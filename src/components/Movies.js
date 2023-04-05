import React from 'react';
import Movie from './Movie';

export default function Movies(props) {
    const { movies = [] } = props;
    console.log(movies);
    return (
        <div className='container movies'>

            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie} />
            )) : <h3>Nothing found</h3>}
        </div>
    )
}
