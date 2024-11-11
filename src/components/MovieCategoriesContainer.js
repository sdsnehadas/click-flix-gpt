import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieCategoriesContainer = () => {

  const movies = useSelector(store=>store.movies)
  return (
    <div className='mt-56 md:-mt-56 relative z-20  bg-black'>
      <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies}/>
      <MovieList title="Popular Movies" movies={movies.popularMovies}/>
      <MovieList title="Top Rated Movies" movies={movies.topRatedMovies}/>
      <MovieList title="Upcoming Movies" movies={movies.upcomingMovies}/>
      <MovieList title="Popular TV" movies={movies.popularTV}/>
    </div>
  )
}

export default MovieCategoriesContainer