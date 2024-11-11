import React, { useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const onMovieCardClick = (item, rect) => {
    setModalPosition({ top: 0, left: 0 })
    setModalPosition({
      top: rect.top +10,
      left: rect.right ,
    });
    setModalContent(item);
    setIsModalOpen(true);
  }

  const closeModal = () =>{
    setIsModalOpen(false);
    setModalPosition({ top: 0, left: 0 })
  }

  return (
    movies && <div className="p-2 bg-black">
      <h1 className="text-white md:font-bold font-light">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex relative">
          {movies.map((movie, index) => (
            <MovieCard key={movie.id} movie={movie} ref={(el) => (movies.current[index] = el)} onClick={onMovieCardClick}
/>
          ))}

{isModalOpen && modalContent && (

        <div
          className="absolute bg-white border border-gray-300 shadow-lg rounded-md p-4 w-1/6"
          style={{
            top: `${modalPosition.top}px`,
            left: `${modalPosition.left}px`,
          }}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 text-gray-500 hover:text-gray-700 font-bold text-xl"
            >
              &times;
            </button>
            <h2 className="text-lg">{modalContent.title}</h2>
            <p className="text-sm">{modalContent.overview}</p>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
