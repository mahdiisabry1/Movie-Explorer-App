import React from "react";

const SearchCard = ({ poster_path, title, release_date }) => {
  return (
    <>
      <div className="group relative w-full h-80 rounded-lg flex overflow-hidden hover: transition-all">
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex flex-col justify-end p-3 relative text-white">
          <div>
            <h4 className="font-extrabold">{title}</h4>
          </div>
          <div>
            <h6>{release_date}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
