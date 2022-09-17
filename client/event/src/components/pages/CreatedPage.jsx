import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import styled from "../style/Style.module.css";
import Types from "./Types";
import EventStart from "./EventStart";
import EventEnd from "./EventEnd";
import EventRegion from "./EventRegion";
import EventType from "./EventType";
import { Button } from "@mui/material";
import { createEventFrom } from "../Redux/action";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import Loder from "./Loder";
const CreatedPage = () => {
  const [from, setFrom] = useState({});

  const handleChange = (e) => {
    setFrom({ ...from, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let Tags = Object.keys(from.Tags);

    const payload = { ...from, Tags };

    dispatch(createEventFrom(payload, navigate));
  };

  const state = useSelector((state) => state.isLoading);
  if (state) {
    return <Loder />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styled.main}>
        <TextField
          id="demo-helper-text-aligned"
          placeholder="Event Name"
          onChange={(e) => handleChange(e)}
          name="EventName"
          required
        />

        <EventStart setFrom={setFrom} form={from} />
        <EventEnd setFrom={setFrom} form={from} />
        <EventRegion setFrom={setFrom} form={from} />
        <EventType setFrom={setFrom} form={from} />
        <Types setFrom={setFrom} form={from} />
        <Button
          type="submit"
          variant="contained"
          color="success"
          style={{ width: "30%", margin: "auto", marginBottom: "20px" }}
        >
          Create Event
        </Button>
      </div>
    </form>
  );
};

export default CreatedPage;
