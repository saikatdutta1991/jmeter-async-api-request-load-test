const { v4: uuidv4 } = require("uuid");
const express = require("express");
const app = express();
const port = 3000;

const statuses = ["PENDING", "COMPLETED", "FAILED"];

app.get("/add-job", (req, res) => {
  res.send({ id: uuidv4(), status: "PENDING" });
});

app.get("/job-status", (req, res) => {
  res.send({ status: getRandomStatus() });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`);
});

let getRandomStatus = () => {
  var randomIndex = Math.floor(Math.random() * statuses.length);
  return statuses[randomIndex];
};
