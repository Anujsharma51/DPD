const express = require("express");

const CreateEvent = require("../models/CreateEvent.model");
const CreateingRoute = express.Router();

CreateingRoute.post("/", async (req, res, next) => {
  const createdData = await CreateEvent(req.body);

  createdData.save((err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});
CreateingRoute.get("/data", async (req, res, next) => {
  const data = await CreateEvent.find({});
  res.send(data);
});
CreateingRoute.get("/data/filter", async (req, res, next) => {
  const data = await CreateEvent.find(req.query);

  res.send(data);
});

module.exports = CreateingRoute;
