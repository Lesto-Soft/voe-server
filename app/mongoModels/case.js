import { Schema, model } from "mongoose";

const caseSchema = new Schema({
  content: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    enum: ["PROBLEM", "SUGGESTION"],
    require: true,
  },
  attachments: [
    {
      type: String,
    },
  ],
  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    require: true,
  },
  status: {
    type: String,
    enum: ["OPEN", "IN_PROGRESS", "CLOSED"],
    require: true,
  },
  case_number: {
    type: Number,
    require: true,
  },
  category: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  answer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
  ],
  rating: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  readBy: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  history: [{ type: Schema.Types.ObjectId, ref: "CaseHistory" }],
});

module.exports = model("Case", caseSchema);
