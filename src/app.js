require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const userListRouter = require("./routes/userList");

app.use("/userList", userListRouter);

if (!module.parent) {
  app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
}

module.exports = app;
