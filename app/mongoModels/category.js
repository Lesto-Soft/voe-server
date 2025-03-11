import { Schema, model } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  problem: {
    type: String,
  },
  suggestion: {
    type: String,
  },
  experts: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  cases: [
    {
      type: Schema.Types.ObjectId,
      ref: "Case",
    },
  ],
});

module.exports = model("Category", categorySchema);
