import React, { useState } from "react";

import styled from "../style/Style.module.css";

const EventStart = ({ form, setFrom }) => {
  const [startEvent, setstartEvent] = useState("");
  const handleEventStart = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className={styled.calDiv}>
      <label
        className={styled.label}
        // style={{
        //   color: "red",
        //   position: "absolute",
        //   top: 0,
        //   left: "30px",
        //   bordertop: "none",
        //   background: "white",
        //   padding: "0 7px 0 7 px",
        // }}
      >
        Start date
      </label>
      <input
        type="Date"
        name="StartDate"
        onChange={(e) => handleEventStart(e)}
        required
      />
    </div>
  );
};

export default EventStart;
