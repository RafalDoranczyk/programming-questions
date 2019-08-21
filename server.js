// Importing modules
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const config = require("./config");
const ApprovedQuestion = require("./models/ApprovedQuestion");
const SuggestedQuestion = require("./models/SuggestedQuestion");
// Define Global Variables
const app = express();
const store = new MongoDBStore({
  uri: "mongodb+srv://Rafix111:Rasengan1@rq-2jsha.mongodb.net/RekrutacjaIT",
  collection: "sessions"
});
const PORT = process.env.PORT || 5000;
mongoose.connect(encodeURI(config.db || process.env.DB_CONNECT), {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.get("/api/questions-approved", (req, res) => {
  const q = "Przykładowe pytanie z Django ?";
  const a = "Odpowiedź";
  const newQuestion = new ApprovedQuestion({
    question: q,
    technology: "Django",
    answer: a,
    level: "senior",
    author: "Admin"
  });
  // newQuestion.save();
  ApprovedQuestion.find((err, doc) => res.json(doc));
});

app.get("/api/questions-pending", (req, res) => {
  let alreadyLiked;
  if (req.session.alreadyLiked) {
    alreadyLiked = req.session.alreadyLiked;
  } else {
    alreadyLiked = [];
  }
  SuggestedQuestion.find((err, allPendingQuestions) =>
    res.json({ allPendingQuestions, alreadyLiked })
  );
});

app.post("/api/questions-pending-send", (req, res) => {
  const { question, username, technology } = req.body;
  //xx
  const questionForMongo = new SuggestedQuestion({
    question,
    technology,
    answer: "Brak odpowiedzi",
    author: username,
    level: "?",
    likes: 0
  });
  questionForMongo.save();
  const succesfullMessage = "Twoje pytanie zostało dodane!";
  res.json(succesfullMessage);
});

app.post("/api/questions-like", (req, res) => {
  const { id, value } = req.body;
  if (req.session.alreadyLiked) {
    req.session.alreadyLiked = [...req.session.alreadyLiked, id];
  } else {
    req.session.alreadyLiked = [id];
  }
  const alreadyLiked = req.session.alreadyLiked;

  SuggestedQuestion.findOneAndUpdate(
    { _id: id },
    { $inc: { likes: value } },
    { new: true },
    (err, doc) => {
      if (err) {
        res.json(err);
      } else {
        const { likes } = doc;
        res.json({ likes, id, alreadyLiked });
      }
    }
  );
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server is working");
});
