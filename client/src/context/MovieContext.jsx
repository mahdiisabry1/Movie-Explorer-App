/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrendingMovies = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_POPULAR_MOVIE_API}api_key=${
          import.meta.env.VITE_API_KEY
        }&include_adult=true`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
          },
        }
      );
      setMovies(res.data.results);
    } catch (error) {
      console.error("Error Fetching movies", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchMovies = async (query) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=5e05e80958f2a076bea98d5c0508e82a&query=${query}&include_adult=false&language=en-US&page=1`
      );
      console.log(res.data.results)
      setSearchMovies(res.data.results);
    } catch (error) {
      console.error("Error Loading Movies", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([
        fetchTrendingMovies(),
      ]);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, loading, searchMovies, fetchSearchMovies }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
