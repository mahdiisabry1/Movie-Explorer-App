import TextField from "@mui/material/TextField";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const TextBox = ({
  placeholder = "Search All Movies",
  showIcon = true,
  onFocus,
  textValue,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleNavigate = () => {
    if (inputValue?.trim()) {
      navigate("/movies");
    }
  };

  const handleInputChange = (e) => {
    const value = e?.target?.value ?? ""
    setInputValue(value);
    if (onChange) onChange(e);
  };

  return (
    <>
      <div className="w-full flex grow-1">
        <TextField
          fullWidth
          label={placeholder}
          id="outlined-size-small"
          value={textValue}
          defaultValue=""
          onFocus={onFocus}
          onChange={(onChange, handleInputChange)}
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
        {showIcon && inputValue.trim() && (
          <div
            className="absolute h-full right-0 flex justify-center items-center w-10 text-3xl rounded-r-md cursor-pointer"
            onClick={handleNavigate}
          >
            <CiSearch />
          </div>
        )}
      </div>
    </>
  );
};

export default TextBox;
