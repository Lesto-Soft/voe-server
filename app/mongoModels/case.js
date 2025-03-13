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
  categories: [
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
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  answers: [
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

export const CaseModel = model("Case", caseSchema);
