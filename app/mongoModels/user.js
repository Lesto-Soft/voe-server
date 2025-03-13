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
  role: {
    type: Schema.Types.ObjectId,
    ref: "Role",
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

export const UserModel = model("User", userSchema);
