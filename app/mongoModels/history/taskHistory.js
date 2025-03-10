import { Schema, model } from "mongoose";

const taskHistory = new Schema({
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
  originalDueDate: {
    type: String,
  },
  newDueDate: {
    type: String,
  },
});

module.exports = model("TaskHistory", taskHistory);
