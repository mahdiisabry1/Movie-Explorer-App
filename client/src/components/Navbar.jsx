import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IoMenu } from "react-icons/io5";
import { HiTrendingUp } from "react-icons/hi";
import { IoBookmarks } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import Mode from "../ui/Mode";

const Navbar = () => {
  return (
    <>
      <div className="h-14 md:h-16 gap-5 w-full flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1>MOVIEEXPLORER</h1>
          <IoMenu className="text-3xl cursor-pointer" />
          <HiTrendingUp className="text-2xl cursor-pointer" />
          <IoBookmarks className="cursor-pointer" />
        </div>
        <div className="w-full flex">
          <TextField
            fullWidth
            label="Search"
            id="outlined-size-small"
            defaultValue=""
            size="small"
          />
          <div className="flex justify-center items-center w-10 text-3xl rounded-r-md cursor-pointer">
            <CiSearch />
          </div>
        </div>
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
        <Mode />
      </div>
    </>
  );
};

export default Navbar;
