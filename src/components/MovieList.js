import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSelectedMovie } from "../utils/movieSlice";

const MovieList = ({ title, movies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onMovieCardClick = (item, rect) => {
    setModalPosition({ top: 0, left: 0 });   
    setModalPosition({
      top: 0,
      left: rect.x +rect.width,
    });
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalPosition({ top: 0, left: 0 });
  };

  const playMovie = (movie) => {
    dispatch(addSelectedMovie(movie));
    navigate("/playMovie");
  };
  return (
    movies && (
      <div className="p-2 bg-black">
        <h1 className="text-white md:font-bold font-light">{title}</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex relative">
            {movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                ref={(el) => (movies.current[index] = el)}
                onClick={onMovieCardClick}
              />
            ))}

            {isModalOpen && modalContent && (
              <div
                className="absolute bg-black border border-gray-800 bg-opacity-60 shadow-lg rounded-md p-4 w-1/6 h-[100%]"
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
                  <h2 className="text-lg text-white">{modalContent.title}</h2>
                  <p className="text-sm text-white">{modalContent.overview}</p>
                  <div>
                    <button
                      type="button"
                      className="py-2.5 px-5 me-2 mb-2  font-bold text-gray-900 bg-white rounded-lg border border-black hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-xl bg-opacity-50 "
                      onClick={() => playMovie(modalContent)}
                    >
                      <span>▶️</span> Play
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
