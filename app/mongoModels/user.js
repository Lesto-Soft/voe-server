import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
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
  password: {
    type: String,
    require: true,
  },
  position: {
    type: String,
  },
  admin: {
    type: Boolean,
    required: true,
  },
  systemOwner: {
    type: Boolean,
    require: true,
  },
  avatar: {
    type: String,
  },
  released: {
    type: Boolean,
  },
  inbox: [
    {
      type: Schema.Types.ObjectId,
      ref: "Notification",
    },
  ],
  regCaseIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Case",
    },
  ],
  categoryId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  commentId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  answerId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answer",
    },
  ],
});

module.exports = model("User", userSchema);
