import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Mode = () => {
  const [selectedOption, setSelectedOption] = useState("Light"); // Default value
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (selectedOption === "Dark") {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [selectedOption]);

  return (
    <>
      <div>
        <Button
          id="basic-button"
          variant="contained"
          sx={{
            backgroundColor: "var(--base-clr)",
            color: "var(--text-clr)",
          }}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {selectedOption}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              setSelectedOption("Light");
              handleClose();
            }}
          >
            Light
          </MenuItem>
          <MenuItem
            onClick={() => {
              setSelectedOption("Dark");
              handleClose();
            }}
          >
            Dark
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default Mode;
