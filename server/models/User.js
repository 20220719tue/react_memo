const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  title: {
    type: String,
  },
  contents: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  Bold: {
    type: Boolean,
  },
  Italic: {
    type: Boolean,
  },
  Underline: {
    type: Boolean,
  },
  AlignLeft: {
    type: Boolean,
  },
  AlignCenter: {
    type: Boolean,
  },
  AlignRight: {
    type: Boolean,
  },
  color: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
