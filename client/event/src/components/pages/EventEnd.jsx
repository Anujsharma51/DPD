import React, { useState } from "react";

import styled from "../style/Style.module.css";

const EventEnd = ({ form, setFrom }) => {
  // console.log("props:", props);
  const [endEvent, setendEvent] = useState();

  const handleEventEnd = (e) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styled.calDiv}>
      <label className={styled.label}>End date</label>

      <input
        type="Date"
        name="EndDate"
        onChange={(e) => handleEventEnd(e)}
        required
      />
    </div>
  );
};

export default EventEnd;
