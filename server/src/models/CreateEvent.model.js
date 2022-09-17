const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
  EventName: { type: String, required: true },
  StartDate: { type: String, required: true },
  EndDate: { type: String, required: true },
  EventRegion: { type: String, required: true },
  EventType: { type: String, required: true },
  Tags: { type: Array, required: true },
});

const Created = mongoose.model("createdData", createSchema);

module.exports = Created;
