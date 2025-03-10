import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  date: {
    type: String,
  },
  description: {
    type: String,
  },
  read: {
    type: Boolean,
  },
  caseId: {
    type: Schema.Types.ObjectId,
    ref: "Case",
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  answerId: {
    type: Schema.Types.ObjectId,
    ref: "Answer",
  },
});

module.exports = model("Notification", notificationSchema);
