import { Schema, model } from "mongoose";

const answerHistory = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  old_content: {
    type: String,
  },
  new_content: {
    type: String,
  },
  initial_date: {
    type: String,
    require: true,
  },
  date_change: {
    type: String,
    require: true,
  },
});

module.exports = model("AnswerHistory", answerHistory);
