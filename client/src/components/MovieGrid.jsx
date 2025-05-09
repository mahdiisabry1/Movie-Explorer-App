import React, { useState } from "react";
import MovieCard from "../ui/MovieCard";
import { useMovies } from "../context/MovieContext";

const MovieGrid = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const { movies, loading } = useMovies();
  if (loading) return "Loading More...";

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleMovies = movies.slice(0, visibleCount);
  const allLoaded = visibleCount >= movies.length;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
      <div className="w-full flex justify-center">
        {allLoaded ? (
          <p className="mt-4 text-[var(--text-clr)]]">🎉 That’s all for now.</p>
        ) : (
          <button
            onClick={handleLoadMore}
            className="mt-4 px-4 py-3 border-2 cursor-pointer hover:bg-black hover:text-white transition-all"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default MovieGrid;
