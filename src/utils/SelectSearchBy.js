import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const CustomFormControl = styled(FormControl)({
  borderLeft: "1px solid #ccc",
  borderRight: "1px solid #ccc",
  borderTop: "none",
  borderBottom: "none",
  display: "flex",
  margin: "0 auto",
});

const CustomSelect = styled(Select)({
  border: "none",
  "&:before": {
    display: "none",
  },
  "&:after": {
    display: "none",
  },
  "& .MuiSelect-select": {
    padding: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export default function SelectSearchBy({ searchBy, setSearchBy }) {
  const handleChange = (event) => {
    setSearchBy(event.target.value);
    console.log(searchBy);
  };

  return (
    <CustomFormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <CustomSelect value={searchBy} onChange={handleChange} displayEmpty>
        <MenuItem value="city">City</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="type">Type</MenuItem>
      </CustomSelect>
    </CustomFormControl>
  );
}
