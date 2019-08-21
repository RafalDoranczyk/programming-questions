const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApprovedQuestion = new Schema({
  question: { type: String, required: true },
  technology: { type: String, required: true },
  answer: { type: String, required: true },
  level: { type: String, required: false, default: "Brak" },
  author: { type: String, required: false }
});

module.exports = mongoose.model("questions-approved", ApprovedQuestion);
