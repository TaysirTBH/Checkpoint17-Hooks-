import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {

    return (

        <section className='App-List'>
            {movies.map((movie) => (
               <MovieCard key={movie.id} {...movie}/>
        ))}
        </section>
    )
}

export default MovieList
