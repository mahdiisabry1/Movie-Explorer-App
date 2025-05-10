/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    try {
      const storedFavourites = localStorage.getItem("favourites");
      if (storedFavourites) {
        setFavourites(JSON.parse(storedFavourites));
      }
    } catch (e) {
      console.error("Error reading from localStorage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } catch (e) {
      console.error("Error writing to localStorage", e);
    }
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavourites((prev) => {
      if (prev.find((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
