import React, { useRef } from "react";
import { DEFAULT_POSTER, IMG_CDN_URL } from "../utils/constants";


const MovieCard = ({ movie, onClick  }) => {
  const { poster_path } = movie;
  const itemRef = useRef(null);

  const addDefaultImg = (e) => {
    e.target.src = DEFAULT_POSTER;
  };

  const handleClick = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      onClick(movie, rect);
    }
  };

  return (
    <div>
      <div className="w-36 md:w-48 pr-4">
        <img
          ref={itemRef}
          src={IMG_CDN_URL + poster_path}
          alt="movie-poster"
          onError={addDefaultImg}
          className="cursor-pointer"
          onClick={handleClick}
        ></img>
      </div>
    </div>
  );
};

export default MovieCard;
