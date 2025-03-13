import { Schema, model } from "mongoose";

const roleSchema = new Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  description: {
    type: String,
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

export const RoleModel = model("Role", roleSchema);
