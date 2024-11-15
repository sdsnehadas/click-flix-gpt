import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { DEFAULT_POSTER } from "../utils/constants";

const PlayMovie = () => {
  const movie = useSelector((store) => store.movies.selectedMovie);
  return (
    <div className="pt-[40%] md:pt-0">
      {movie && <VideoBackground movieId={movie.id} />}
      
    </div>
  );
};

export default PlayMovie;
