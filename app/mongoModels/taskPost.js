import { Schema, model } from "mongoose";

const taskPost = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
  },
  attachment: [
    {
      type: String,
    },
  ],
});

module.exports = model("TaskPost", taskPost);
