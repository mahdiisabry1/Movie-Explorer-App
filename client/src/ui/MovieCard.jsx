import React from "react";

const MovieCard = ({ backdrop_path, title, release_date, vote_average }) => {
  return (
    <>
      <div className="group relative w-full h-80 rounded-lg flex overflow-hidden hover: transition-all">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${backdrop_path}`}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-end p-3 relative text-white">
          <h1 className="text-2xl font-extrabold">{title}</h1>
          <h4>{release_date}</h4>
          <h4>{vote_average}</h4>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
