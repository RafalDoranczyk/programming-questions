const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuggestedQuestion = new Schema({
  question: { type: String, required: true },
  technology: { type: String, required: true },
  answer: { type: String, required: false },
  level: { type: String, required: true },
  author: { type: String, required: true },
  likes: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("questions-pending", SuggestedQuestion);
