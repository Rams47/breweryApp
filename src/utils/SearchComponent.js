import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchComponent.module.css";
import SelectSearchBy from "./SelectSearchBy";
import { Button } from "@mui/material";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("city");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleClick = () => {
    console.log(searchValue);
    console.log(searchBy);
  };

  return (
    <div className={classes.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        className={classes.searchInput}
      />
      <div className={classes.rightPart}>
        <SelectSearchBy searchBy={searchBy} setSearchBy={setSearchBy} />
        <Button
          sx={{
            backgroundColor: "transparent",
            color: "#000",
            "& .MuiSvgIcon-root": {
              color: "#36454F",
              "&:hover": {
                color: "blue",
              },
            },
          }}
          onClick={handleClick}
        >
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;
