import { Schema, model } from "mongoose";

const notificationSchema = new Schema({
  content: {
    type: String,
  },
  date: {
    type: String,
    require: true,
  },
  read: {
    type: Boolean,
    require: true,
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

export const NotificationModel = model("Notification", notificationSchema);
