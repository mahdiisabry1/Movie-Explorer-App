import React from "react";
import { CiBookmark } from "react-icons/ci";

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
        <div className="flex flex-col justify-between p-3 relative text-white">
          <div className="flex gap-1">
            <h3 className="text-black text-sm font-semibold p-1.5 bg-amber-300 rounded-lg flex gap-1.5 hover:bg-black hover:text-amber-300 transition-all cursor-default">
              Add To Favourites{" "}
              <span className="flex items-center">
                <CiBookmark />
              </span>
            </h3>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">{title}</h1>
            <h4>{release_date}</h4>
            <h4>
              <span className="text-yellow-400">{vote_average}</span>/10
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
