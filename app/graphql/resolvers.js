import { getAllUsers, getUserById, getUserByUsername } from "./query/user.js";
import { getAllCategories, getCategoryById } from "./query/category.js";

export const resolvers = {
  Query: {
    // USER QUERIES
    getAllUsers: (_, { input }) => getAllUsers(input),
    getUserById: (_, { id }) => getUserById(id),
    getUserByUsername: (_, { username }) => getUserByUsername(username),
    // CATEGORY QUERIES
    getAllCategories: (_, { input }) => getAllCategories(input),
    getCategoryById: (_, { id }) => getCategoryById(id),
  },
};
