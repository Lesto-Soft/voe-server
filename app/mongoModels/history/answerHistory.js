import { Schema, model } from "mongoose";

const answerHistory = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  oldDescription: {
    type: String,
  },
  newDescription: {
    type: String,
  },
  originalDate: {
    type: String,
  },
  dateOfChange: {
    type: String,
  },
});

module.exports = model("AnswerHistory", answerHistory);
