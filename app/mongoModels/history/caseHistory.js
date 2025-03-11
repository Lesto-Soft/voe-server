import { Schema, model } from "mongoose";

const caseHistory = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  initial_date: {
    type: String,
    required: true,
  },
  date_change: {
    type: String,
    required: true,
  },
  old_content: {
    type: String,
  },
  new_content: {
    type: String,
  },
  old_priority: {
    type: Number,
  },
  new_priority: {
    type: Number,
  },
  old_type: {
    type: Number,
  },
  new_type: {
    type: Number,
  },
  old_categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  ],
  new_categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  ],
});

module.exports = model("CaseHistory", caseHistory);
