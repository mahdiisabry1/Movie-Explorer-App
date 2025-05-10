import React from "react";
import { useFavourites } from "../context/FavouritesContext";
import MovieCard from "../ui/MovieCard";

const FavouritesPage = () => {
  const { favourites } = useFavourites();

  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Your Favourites</h2>
        {favourites.length === 0 ? (
          <p>No favourites added.</p>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...favourites].reverse().map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FavouritesPage;
