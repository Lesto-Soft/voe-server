import { UserModel } from "../../mongoModels/user.js";

const DEFAULT_ITEMS_PER_PAGE = 10;
const DEFAULT_STARTING_PAGE = 0;

export const getAllUsers = async (input) => {
  try {
    const {
      itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
      currentPage = DEFAULT_STARTING_PAGE,
      query,
    } = input || {}; // Default values if input is not provided
    const filter = query ? { name: { $regex: query, $options: "i" } } : {}; // Case-insensitive search

    const users = await UserModel.find(filter)
      .populate("categories cases answers comments avatar priviledge")
      .sort({ username: 1 })
      .skip(currentPage * itemsPerPage)
      .limit(itemsPerPage)
      .exec();

    return users;
  } catch (error) {
    // Handle any error that might occur in the try block
    console.log(error); // Log the error, or you could send a more specific response if needed
    throw new Error("Error fetching users."); // Optional: throw a custom error message
  }
};

export const getUserById = async (id) => {
  try {
    const user = await UserModel.findById(id)
      .populate("categories cases answers comments avatar priviledge")
      .exec();

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching user by ID."); // Optional: throw a custom error message
  }
};

export const getUserByUsername = async (input) => {
  try {
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
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching user by username."); // Optional: throw a custom error message
  }
};
