import { Schema, model } from "mongoose";

const answerSchema = new Schema({
  date: {
    type: String,
    require: true,
  },
  content: {
    type: String,
  },
  attachments: [
    {
      type: String,
    },
  ],
  case: {
    type: Schema.Types.ObjectId,
    ref: "Case",
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  approved: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "AnswerHistory",
    },
  ],
});

module.exports = model("Answer", answerSchema);
