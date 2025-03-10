import { Schema, model } from "mongoose";

const tasksWallSchema = new Schema({
  creatorId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  caseId: {
    type: Schema.Types.ObjectId,
    ref: "Case",
  },
  riskIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "RiskReport",
    },
  ],
  // whyIds: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Why",
  //   },
  // ],
  attachments: [
    {
      type: String,
    },
  ],
});

module.exports = model("TasksWall", tasksWallSchema);
