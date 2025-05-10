import { useMovies } from "../context/MovieContext";
import MovieCard from "../ui/MovieCard";
import React, { useState } from "react";

const MoviesPage = () => {
  const { searchMovies } = useMovies();
  const [visibleCount] = useState(12);

  const visibleMovies = searchMovies.slice(0, visibleCount);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7">
        {visibleMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </>
  );
};

export default MoviesPage;
