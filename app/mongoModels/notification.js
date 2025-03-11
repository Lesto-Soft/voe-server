import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  date: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  read: {
    type: Boolean,
  },
  case: {
    type: Schema.Types.ObjectId,
    ref: "Case",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  answer: {
    type: Schema.Types.ObjectId,
    ref: "Answer",
  },
});

module.exports = model("Notification", notificationSchema);
