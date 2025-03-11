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
    type: Number,
    require: true,
  },
  attachments: [
    {
      type: String,
    },
  ],
  priority: {
    type: Number,
    require: true,
  },
  status: {
    type: Number,
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
      user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        require: true,
      },
      rate: {
        type: Number,
        require: true,
      },
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
