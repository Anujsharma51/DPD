import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const RegionFilter = ({ setvalue, value, data, name }) => {
  return (
    <Box style={{ width: "20%", margin: "20px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Event region"
          name="EventRegion"
          onChange={(e) => setvalue(e.target.value)}
        >
          {data.map((el, i) => {
            return (
              <MenuItem key={i} value={el}>
                {el}
              </MenuItem>
            );
          })}
          {/* <MenuItem value={data.North_Bangalore}>
            {data.North_Bangalore}
          </MenuItem>
          <MenuItem value={data.South_Bangalore}>
            {data.South_Bangalore}
          </MenuItem>
          <MenuItem value={data.Central_Bangalore}>
            {data.Central_Bangalore}
          </MenuItem>
          <MenuItem value={data.East_Bangalore}>{data.East_Bangalore}</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
};

export default RegionFilter;
