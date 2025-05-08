import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { HiTrendingUp } from "react-icons/hi";
import { IoBookmarks } from "react-icons/io5";
import { Link } from "react-router-dom";
import Mode from "../ui/Mode";
import TextBox from "../ui/TextBox";

const Navbar = () => {
  // To Control The Menu Div
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Overlay Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black text-white z-50 transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-hidden`}
      >
        <div className="">
          <h1 className="text-3xl font-bold">Overlay Menu</h1>
          {/* menu content here */}
        </div>
        <button
          className="absolute text-white text-4xl cursor-pointer"
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
          <HiTrendingUp className="text-2xl cursor-pointer" />
          <IoBookmarks className="cursor-pointer" />
        </div>
        <TextBox placeholder="Search" showIcon={true}/>
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
    </>
  );
};

export default Navbar;
