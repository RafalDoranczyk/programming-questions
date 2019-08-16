const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApprovedQuestion = new Schema({
  question: { type: String, required: true },
  technology: { type: String, required: true },
  answer: { type: String, required: true },
  answerList: { type: Array, required: false },
  level: { type: String, required: false },
  date: { type: Date, default: Date.now },
  createdBy: { type: String, required: false }
});

module.exports = mongoose.model("questions-approved", ApprovedQuestion);
