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
