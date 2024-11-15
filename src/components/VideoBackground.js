import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, DEFAULT_POSTER } from "../utils/constants";
import { addTrailerVideo, noTrailerFound } from "../utils/movieSlice";

const VideoBackground = ({ movieId }) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailer);
  const fetchTrailer = async (movieId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const data = await response.json();
    if (data.results) {
      const trailVideos = data?.results.filter((video) => {
        return video.type === "Trailer";
      });
      const trailer = trailVideos.length ? trailVideos[0] : data?.results[0];
      dispatch(addTrailerVideo(trailer));
    }
  };

  useEffect(() => {
    fetchTrailer(movieId);
  }, [movieId]);

  return (
    <div>
      {trailerVideo && (
        <>
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo?.key +
              "?&autoplay=1&mute=1"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
};

export default VideoBackground;
