import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  date: {
    type: String,
    require: true,
  },
  content: {
    type: String,
  },
  case: {
    type: Schema.Types.ObjectId,
    ref: "Case",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  answer: {
    type: Schema.Types.ObjectId,
    ref: "Answer",
  },
  attachments: [
    {
      type: String,
    },
  ],
});

module.exports = model("Comment", commentSchema);
