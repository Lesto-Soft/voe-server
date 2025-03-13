import { RoleModel } from "../../mongoModels/role.js";

export const getAllRoles = async () => {
  try {
    const roles = await RoleModel.find().populate("users").exec();
    return roles;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching roles."); // Optional: throw a custom error message
  }
};
