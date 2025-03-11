import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  position: {
    type: String,
  },
  priviledge: {
    type: Schema.Types.ObjectId,
    ref: "Priviledge",
  },
  avatar: {
    type: String,
  },
  inbox: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notification",
    },
  ],
  cases: [
    {
      type: Schema.Types.ObjectId,
      ref: "Case",
    },
  ],
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  answers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
  ],
});

module.exports = model("User", userSchema);
