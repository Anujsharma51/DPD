import React, { useState } from "react";
import styled from "../style/Style.module.css";
const Types = ({ form, setFrom }) => {
  // const [checkform, setCheckform] = useState([]);

  const [tags, setTags] = useState({});
  const handleChange = (e) => {
    setFrom({
      ...form,
      Tags: { ...form.Tags, [e.target.value]: e.target.checked },
    });

    // setCheckform([...checkform, e.target.name]);
    // let selectedTags = [...checkform];
    // const currentTag = e.target.value;
    // if (e.target.checked) {
    //   selectedTags.push(currentTag);
    // } else {
    //   selectedTags = selectedTags.filter((tag) => tag !== currentTag);
    // }
    // console.log("e.target.name:", e.target.name);

    // setFrom({ ...form, Tags: [...selectedTags] });
  };

  return (
    <div className={styled.checkboxDiv}>
      <div>
        <label>weekend</label>
        <input
          type="checkbox"
          value={"weekend"}
          onChange={(e) => handleChange(e)}
          name="weekend"
        />
      </div>
      <div>
        <label>full day</label>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          value="full day"
          name="full day"
        />
      </div>
      <div>
        <label>nightLife</label>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          value="night life"
          name="nightLife"
        />
      </div>
      <div>
        <label>outdoor</label>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          name="outdoor"
          value="outdoor"
        />
      </div>
      <div>
        <label>indoor</label>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          name="indoor"
          value="indoor"
        />
      </div>
      <div>
        <label>enter fee</label>
        <input
          type="checkbox"
          onChange={(e) => handleChange(e)}
          name="enter fee"
          value="enter fee"
        />
      </div>
    </div>
  );
};

export default Types;
