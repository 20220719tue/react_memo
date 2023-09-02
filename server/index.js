const express = require("express");
const router = express.Router();
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const config = require("./config/key");
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.post("/api/users/save", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ success: false, err }));
});

app.get("/api/users/list", (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
