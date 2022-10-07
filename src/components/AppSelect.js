import React, { useState } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

const AppSelect = ({
  items = [],
  label,
  menuItemsLableProp = "label",
  name,
  onChange,
  value,
}) => {
  const [selected, setSelected] = useState("");

  const raiseSelect = ({ target: input }) => {
    setSelected(input.value);
    if (onChange) onChange(input.value);
  };

  return (
    <Grid item>
      <FormControl fullWidth>
        <InputLabel style={{ marginLeft: -13 }} shrink id={name}>
          {label}
        </InputLabel>
        <Select
          variant="standard"
          fullWidth
          labelId={name}
          name={name}
          onChange={raiseSelect}
          value={value || selected}
        >
          {items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item[menuItemsLableProp]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default AppSelect;
