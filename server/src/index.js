const express = require("express");
const conn = require("./configs/db");
const cors = require("cors");
const app = express();
app.use(cors());

const EventCreate = require("./controllers/eventCreate.controller");

app.use(express.json());

app.use("/", EventCreate);
app.listen(8080, async () => {
  try {
    await conn;
    console.log(`server is running on port 8080`);
  } catch {
    console.log(`server is showing error`);
  }
});
