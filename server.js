// Importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config");
const ApprovedQuestion = require("./models/ApprovedQuestion");
const SuggestedQuestion = require("./models/SuggestedQuestion");
// Define Global Variables
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect(encodeURI(config.db || process.env.DB_CONNECT), {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/questions-approved", (req, res) => {
  ApprovedQuestion.find((err, doc) => res.json(doc));
});

app.get("/api/questions-pending", (req, res) => {
  SuggestedQuestion.find((err, doc) => res.json(doc));
});

app.post("/api/questions-pending-send", (req, res) => {
  const { question, username, technology } = req.body;

  const questionForMongo = new SuggestedQuestion({
    question,
    technology,
    answer: "Brak odpowiedzi",
    createdBy: username,
    level: "?",
    likes: 0
  });
  questionForMongo.save();
  const succesfullMessage = "Twoje pytanie zostało dodane!";
  res.json(succesfullMessage);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log("server is working");
});
