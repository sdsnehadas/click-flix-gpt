import React  from "react";
import Header from "./Header";
import useNowPlayingHook from "../customHooks/useNowPlayingHook";
import MainContainer from "./MainContainer";
import MovieCategoriesContainer from "./MovieCategoriesContainer";
import { useSelector } from "react-redux";

const Browse = () => {

  useNowPlayingHook();
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  console.log("inside browse", movies)



  return (
    <div className="">
      <Header></Header>
      {movies && <div>
      <MainContainer nowPlayingMovies={movies}/>
      <MovieCategoriesContainer/>
      </div> }   
    </div>
  );
};

export default Browse;
