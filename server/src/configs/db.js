const express = require("express");

const mongoose = require("mongoose");

const conn = mongoose.connect(
  "mongodb+srv://anuj:anuj@cluster0.p6luyyv.mongodb.net/dpd?retryWrites=true&w=majority"
);
module.exports = conn;
