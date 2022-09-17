import React from "react";

import styled from "../style/Style.module.css";
const DateFilter = ({ startDateFilter, setStartDateFilter, date }) => {
  return (
    <div style={{ position: "relative" }}>
      <label className={styled.label}>{date}:</label>
      <input
        style={{ height: "100%", padding: "15px" }}
        type="Date"
        name="StartDate"
        onChange={(e) => setStartDateFilter(e.target.value)}
      />
    </div>
  );
};

export default DateFilter;
