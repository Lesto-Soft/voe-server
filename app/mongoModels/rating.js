import { Schema, model } from "mongoose";

const ratingSchema = new mongoose.Schema({
  case: {
    type: Schema.Types.ObjectId,
    ref: "Case",
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = model("Rating", ratingSchema);
