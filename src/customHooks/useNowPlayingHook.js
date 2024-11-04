import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingHook = () =>{
    const dispatch = useDispatch();

    const getNowPlayingMoviies = async () =>{
      const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results))
      console.log("nowplaying", data)
    }
  
    useEffect(()=>{
  getNowPlayingMoviies();
    },[])
}

export default useNowPlayingHook