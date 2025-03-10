import { Schema, model } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  descriptionProblem: {
    type: String,
  },
  descriptionSuggestion: {
    type: String,
  },
  expertUserIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  caseIds: [
    {
      type: Schema.Types.ObjectId,
      ref: "Case",
    },
  ],
});

module.exports = model("Category", categorySchema);
