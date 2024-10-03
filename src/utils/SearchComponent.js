import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchComponent.module.css";
import SelectSearchBy from "./SelectSearchBy";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBy, setSearchBy] = useState("city");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(searchValue);
    console.log(searchBy);
    if (searchValue.trim() !== "") {
      navigate(
        `/search?searchBy=${searchBy}&searchValue=${encodeURIComponent(
          searchValue
        )}`
      );
    }
  };

  return (
    <form className={classes.searchBar} onSubmit={handleClick}>
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
          type="submit"
        >
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default SearchComponent;
