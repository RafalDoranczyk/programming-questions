const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuggestedQuestion = new Schema({
  question: { type: String, required: true },
  technology: { type: String, required: true },
  answer: { type: String, required: false },
  date: { type: Date, default: Date.now },
  author: { type: String, required: true },
  likes: { type: Number, required: true }
});

module.exports = mongoose.model("suggestedQuestions", SuggestedQuestion);
