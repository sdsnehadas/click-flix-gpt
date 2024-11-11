import React, { useRef } from "react";
//import ChatBot from "react-chatbotify";
//import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { searchMoviesByName } from "../utils/movieSlice";
import MovieList from "./MovieList";

const GptSearch = () => {
  const dispatch = useDispatch();
  const searchResult = useSelector(store=>store.movies);

  const searchInput = useRef(null)
  const handleGPTSearch = async () =>{
   const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchInput.current.value}&include_adult=false&language=en-US&page=1`,API_OPTIONS)
   const data = await response.json();
   dispatch(searchMoviesByName(data.results))
   /*const gptQuery = "Act as movie recommendation System and suggest some movies for the query" + searchInput.current.value + "only provide comma separated names of 10 movies" 
   const response = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery}],
    model: 'gpt-3.5-turbo',
  });
  console.log("response from gpt", response.choices)*/

  }

  return (
    <div>
    <div className="md:pt-[10%] pt-[50%] flex justify-center">
      <form className="md:w-1/2 w-full bg-slate-300 grid grid-cols-12" onSubmit={e=>e.preventDefault()}>
        <input
        ref={searchInput}
          type="text"
          id="username-success"
          className="p-4 m-4 col-span-8 md:col-span-9 bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full dark:bg-gray-700 dark:border-green-500"
          placeholder="What's on your mind ?"
        />
        <button type="button" className="md:col-span-3 col-span-4 p-4 m-4  text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-small rounded-lg text-sm text-center" onClick={handleGPTSearch}>Ask GPT</button>
      </form>
      {/* <ChatBot/> */}
    </div>
    <div className='mt-20 bg-black'>
      <MovieList title="Your search Results" movies={searchResult.gptSearchMovies}/></div>
    </div>

  );
};

export default GptSearch;
