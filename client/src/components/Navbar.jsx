import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { HiTrendingUp } from "react-icons/hi";
import { IoBookmarks } from "react-icons/io5";
import { Link } from "react-router-dom";
import Mode from "../ui/Mode";
import TextBox from "../ui/TextBox";
import SearchResults from "../ui/SearchResults";
import { useMovies } from "../context/MovieContext";

const Navbar = ({ onTrendingClick }) => {
  // To Control The Menu Div
  const [isOpen, setIsOpen] = useState(false);
  const [showRecentSearches, setShowRecentSearches] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);
  const { fetchSearchMovies } = useMovies();

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    fetchSearchMovies(query);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowRecentSearches(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Overlay Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[var(--base-rev)] text-[var(--text-rev)] z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-hidden`}
      >
        <div className="">
          <h1 className="text-3xl font-bold">Overlay Menu</h1>
          {/* menu content here */}
        </div>
        <button
          className="absolute text-[var(--text-rev)] text-4xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
      </div>

      {/* The Navigation bar */}
      <div className="h-10 flex justify-center items-end">
        <Link to="/">MOVIE-EXPLORER-APP-LOGO</Link>
      </div>
      <div className="h-12 md:h-16 gap-5 w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          {/* Logo */}

          <IoMenu
            className="text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <HiTrendingUp
            className="text-2xl cursor-pointer"
            onClick={onTrendingClick}
          />
          <Link to="/favourites">
            <IoBookmarks className="cursor-pointer" />
          </Link>
        </div>
        <div className="flex grow-1 gap-2.5">
          <div className="relative flex grow-1 flex-col" ref={searchRef}>
            <TextBox
              placeholder="Search"
              showIcon={true}
              onFocus={() => setShowRecentSearches(true)}
              onChange={handleInputChange}
            />
            <div className="">{showRecentSearches && <SearchResults />}</div>
          </div>
          <div className="flex gap-2">
            <Link to="/sign-in">
              <Button
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "var(--base-rev)",
                  color: "var(--text-rev)",
                }}
              >
                Sign&nbsp;In
              </Button>
            </Link>
            {/* Handle Dark and Light Mode */}
            <Mode />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
