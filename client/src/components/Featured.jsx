/* eslint-disable no-unused-vars */
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useMovies } from "../context/MovieContext";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Featured = () => {
  const variants = {
    enter: {
      x: "100%",
    },
    center: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-100%",
    },
  };
  const { upcomingMovies } = useMovies();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === upcomingMovies.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? upcomingMovies.length - 1 : prev - 1
    );
  };

  const currentMovie = upcomingMovies?.[currentIndex];
  if (!currentMovie) return null;

  if (!currentMovie) return null;
  return (
    <>
      <div className="w-full h-[570px] relative overflow-hidden border-[var(--border-clr)]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentMovie.id}
            src={`https://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
            className="absolute top-0 left-0 w-full h-full object-cover"
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        <div className="absolute right-0 bg-black/75 h-full w-2/5 shadow-2xl p-4">
          <div className="p-4 text-white text-4xl font-bold">
            <h1>{currentMovie.title}</h1>
          </div>
          <div className="p-4 text-white text-sm font-bold">
            <h4>{currentMovie.release_date?.slice(0, 4)}</h4>
            <h4>Upcoming</h4>
          </div>
          <p className="p-4 text-amber-50">{currentMovie.overview}</p>
          <div className="p-4 text-white text-sm font-bold">
            <h4>
              Popularity:{" "}
              <span className="text-amber-200">{currentMovie.popularity}</span>
            </h4>
            <h3>
              Trailer - <span className="text-red-500">Not Available</span>
            </h3>
          </div>
          <div className="p-4 text-white text-sm font-bold">
            <button className="px-5 py-2 border-2">More..</button>
          </div>
        </div>

        <div className="flex items-center absolute right-0 bottom-0 text-stone-50 gap-1 m-2">
          <div
            className="p-6 text-2xl bg-gray-600 hover:bg-gray-400 hover:text-black cursor-pointer"
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </div>
          <div
            className="p-6 text-2xl bg-gray-600 hover:bg-gray-400 hover:text-black cursor-pointer"
            onClick={handleNext}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
