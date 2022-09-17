import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const EventType = ({ form, setFrom }) => {
  const [type, setType] = React.useState("");
  const handleChangesetType = (e) => {
    setType(e.target.value);
    setFrom({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Event type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Event type"
            name="EventType"
            onChange={handleChangesetType}
            required
          >
            <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
            <MenuItem value={"Spiritual"}>Spiritual</MenuItem>
            <MenuItem value={"Sports"}>Sports</MenuItem>
            <MenuItem value={"Professional"}>Professional</MenuItem>
            <MenuItem value={"Political"}>Political</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default EventType;
