const express = require("express");
const app = express();

app.use(express.json());

/// List of all questions
const questions = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi",
  },
  {
    id: 2,
    question: "What is the capital of USA?",
    options: ["New York", "Washington", "Chicago", "Los Angeles"],
    answer: "Washington",
  },
  {
    id: 3,
    question: "What is the capital of Canada?",
    options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
    answer: "Ottawa",
  },
  {
    id: 4,
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    answer: "Sydney",
  },
];

/// READ Request Handlers
app.get("/", (req, res) => {
  res.send("Quizziz Server!!");
});

/// GET ALL QUESTIONS
app.get("/api/questions", (req, res) => {
  res.send(questions);
});

/// GET QUESTION BY ID
app.get("/api/questions/:id", (req, res) => {
  const question = questions.find(
    (element) => element.id === parseInt(req.params.id)
  );

  if (!question)
    res
      .status(404)
      .send(
        '<h2 style="font-family: Popins; color: #000;">Ooops... Cant find what you are looking for!</h2>'
      );
  res.send(question);
});

/// PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
