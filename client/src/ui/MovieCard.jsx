import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import MovieDetails from "./MovieDetails";
import { useFavourites } from "../context/FavouritesContext";

const MovieCard = ({
  id,
  backdrop_path,
  poster_path,
  title,
  release_date,
  vote_average,
  overview,
  popularity,
}) => {
  const movie = {
    id,
    backdrop_path,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    popularity,
  };
  const { favourites, addToFavourites } = useFavourites();

  const isAlreadyFavourited = favourites.some((fav) => fav.id === id);


  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group relative w-full h-80 rounded-lg flex overflow-hidden hover: transition-all z-20"
        onClick={() => setShowModal(true)}
      >
        <div className="overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face${backdrop_path}`}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </div>
        <div className="flex w-full flex-col justify-between p-3 relative text-white">
          <div className="flex gap-1 z-40">
            <h3
              className={`text-sm font-semibold p-1.5 rounded-lg flex gap-1.5 transition-all cursor-default ${
                isAlreadyFavourited
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-amber-300 text-black hover:bg-black hover:text-amber-300"
              }`}
              onClick={(e) => {
                e.stopPropagation(); 
                if (!isAlreadyFavourited) addToFavourites(movie);
              }}
            >
              {isAlreadyFavourited ? "Remove" : "Add To Favourites"}{" "}
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
            <div
              className="overflow-hidden w-full cursor-pointer h-0 group-hover:h-8 transition-all duration-500 ease-in-out hover:text-black"
              onClick={() => setShowModal(true)}
            >
              <div className="text-center bg-black hover:bg-amber-300 bg-opacity-70 py-1 rounded">
                <p className="text-sm font-medium">Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <MovieDetails movie={movie} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default MovieCard;
