import React  from "react";
import Header from "./Header";
import useNowPlayingHook from "../customHooks/useNowPlayingHook";
import MainContainer from "./MainContainer";
import MovieCategoriesContainer from "./MovieCategoriesContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {

  useNowPlayingHook();
  const movies = useSelector(store => store.movies.nowPlayingMovies)
  const showGPTSearch = useSelector(store=>store.gpt.showGPTSearch);



  return (
    <div className="bg-black h-screen">
      <Header></Header>
      {showGPTSearch && <div>
        <GptSearch/>
      </div>
      }
      { !showGPTSearch && movies && <div>
      <MainContainer nowPlayingMovies={movies}/>
      <MovieCategoriesContainer/>
      </div> }   
    </div>
  );
};

export default Browse;
