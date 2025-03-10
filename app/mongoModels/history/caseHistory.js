import { Schema, model } from "mongoose";

const caseHistory = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  originalDate: {
    type: String,
  },
  dateOfChange: {
    type: String,
  },
  oldDescription: {
    type: String,
  },
  newDescription: {
    type: String,
  },
  oldPriority: {
    type: Number,
  },
  newPriority: {
    type: Number,
  },
  oldType: {
    type: Number,
  },
  newType: {
    type: Number,
  },
  oldCategoryId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  ],
  newCategoryId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
  ],
});

module.exports = model("CaseHistory", caseHistory);
