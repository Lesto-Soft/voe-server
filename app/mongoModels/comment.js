import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  caseId: {
    type: Schema.Types.ObjectId,
    ref: "Case",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  answerId: {
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
