import { Schema, model } from "mongoose";

const caseSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  type: {
    type: Number,
    require: true,
  },
  date: {
    type: String,
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
  answer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer",
      require: true,
    },
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      require: true,
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
