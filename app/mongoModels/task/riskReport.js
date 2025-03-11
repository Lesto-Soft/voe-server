import { Schema, model } from "mongoose";

const riskReport = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  tasksWallId: {
    type: Schema.Types.ObjectId,
    ref: "TasksWall",
    require: true,
  },
  repeat: {
    type: Number,
  },
  other: {
    type: Number,
  },
  your: {
    type: Number,
  },
});

module.exports = model("RiskReport", riskReport);
