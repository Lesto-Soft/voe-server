import { Schema, model } from "mongoose";

const priviledgeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
});

module.exports = model("Priviledge", priviledgeSchema);
