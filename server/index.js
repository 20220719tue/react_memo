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

// 메모 저장
app.post("/api/users/save", (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ success: false, err }));
});

// 메모 리스트 불러오기
app.get("/api/users/list", (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 메모 삭제
app.delete("/api/users/delete", (req, res) => {
  User.findOneAndRemove(req._id)
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ success: false, err }));
});

// 메모 수정
app.put("/api/users/modify", (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.body._id },
    {
      title: req.body.title,
      contents: req.body.contents,
      Bold: req.body.Bold,
      Italic: req.body.Italic,
      Underline: req.body.Underline,
      Strikethrough: req.body.Strikethrough,
      AlignLeft: req.body.AlignLeft,
      AlignCenter: req.body.AlignCenter,
      AlignRight: req.body.AlignRight,
      color: req.body.color,
    }
  )
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.json({ success: false, err }));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
