import React, { useState } from "react";
import { FaHistory } from "react-icons/fa";
import { useMovies } from "../context/MovieContext";
import SearchCard from "./SearchCard";

const SearchResults = ({ onSelect }) => {
  const { searchMovies } = useMovies();
  const [visibleCount] = useState(4);

  const visibleMovies = searchMovies.slice(0, visibleCount);

  return (
    <>
      <div className="absolute top-full mt-2 w-full bg-white shadow-lg border border-gray-300 rounded-md z-20">
        <div>
          <div className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
            <FaHistory />
            <span>Recent</span>
          </div>
        </div>
        <div className="p-2 cursor-pointer flex items-center gap-2">
          <div className="grid grid-cols-1">
            {visibleMovies.map((movie, index) => (
              <SearchCard key={index} {...movie} onSelect={onSelect}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResults;
