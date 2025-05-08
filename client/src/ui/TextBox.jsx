import React from "react";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";

const TextBox = ({ placeholder = "Search", showIcon = true }) => {
  return (
    <>
      <div className="w-full flex">
        <TextField
          fullWidth
          label={placeholder}
          id="outlined-size-small"
          defaultValue=""
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "var(--text-clr)", // Text color
              "& fieldset": {
                borderColor: "var(--text-clr)", // Default border
              },
              "&:hover fieldset": {
                borderColor: "var(--text-clr)", // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--text-clr)", // Focused border
              },
            },
            "& .MuiInputLabel-root": {
              color: "var(--text-clr)", // Label color
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "var(--text-clr)", // Focused label
            },
          }}
        />
        {showIcon && (
          <div className="flex justify-center items-center w-10 text-3xl rounded-r-md cursor-pointer">
            <CiSearch />
          </div>
        )}
      </div>
    </>
  );
};

export default TextBox;
