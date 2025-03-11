import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  description: {
    type: String,
    require: true,
  },
  dateCreation: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  status: {
    type: Number,
  },
  taskNumber: {
    type: Number,
  },
  attachments: [
    {
      type: String,
    },
  ],
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: "TaskHistory",
      //   require: true,
    },
  ],
  taskPostIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "TaskPost",
      require: true,
    },
  ],
});

module.exports = model("Task", taskSchema);
