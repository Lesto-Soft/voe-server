import { UserModel } from "../../mongoModels/user.js";

export const getAllUsers = async (input) => {
  const { itemsPerPage, currentPage, query } = input;
  const filter = query ? { name: { $regex: query, $options: "i" } } : {};

  const users = await UserModel.find(filter)
    .populate("categories cases answers comments avatar priviledge")
    .sort({ username: 1 })
    .skip(currentPage * itemsPerPage)
    .limit(itemsPerPage);

  return users;
};

export const getUserById = async (id) => {
  const user = await UserModel.findById(id)
    .populate("categories cases answers comments avatar priviledge")
    .exec();

  return users;
};

export const getUserByUsername = async (input) => {
  const { username } = input;

  // Find the user by their username (case-insensitive)
  const user = await UserModel.findOne({
    username: { $regex: `^${username}$`, $options: "i" },
  })
    .populate("categories cases answers comments avatar priviledge") // Adjust based on schema relationships
    .exec();

  // If user is not found, throw an error
  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
