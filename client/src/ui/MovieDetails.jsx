import React, { useEffect } from "react";

const MovieDetails = ({ movie, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

  if (!movie) return null;

  return (
    <>
      <div
        className="fixed inset-0 backdrop-blur-sm bg-opacity-60 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <div
          className="flex bg-white rounded-lg w-[70%] h-[30rem] text-black relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-[45%] p-6 flex flex-col z-10">
            <div className="flex gap-4 ">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-24 h-36 object-cover rounded shadow"
              />
              <div>
                <h2 className="text-3xl font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <p className="text-sm">{movie.vote_average}/10</p>
                <div className="text-sm mt-2">popularity: {movie.popularity}</div>
              </div>
            </div>
            <p className="text-gray-700 mt-9">{movie.overview}</p>
          </div>
          <div className="w-[55%] relative h-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white/5 to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
