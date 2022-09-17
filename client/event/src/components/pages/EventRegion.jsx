import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EventRegion = ({ form, setFrom }) => {
  const [region, setregion] = useState("");
  const handleChangeSelecte = (e) => {
    setregion(e.target.value);
    setFrom({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Event region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Event region"
            name="EventRegion"
            onChange={handleChangeSelecte}
            required
          >
            <MenuItem value={"North Bangalore"}>North Bangalore</MenuItem>
            <MenuItem value={"South Bangalore"}>South Bangalore</MenuItem>
            <MenuItem value={"Central Bangalore"}>Central Bangalore</MenuItem>
            <MenuItem value={"East Bangalore"}>East Bangalore</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default EventRegion;
