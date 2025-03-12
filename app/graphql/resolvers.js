import { getAllUsers } from "./query/user.js";

export const resolvers = {
  Query: {
    getAllUsers: (_, { input }) => getAllUsers(input),
    getUserById: (_, { id }) => getUserById(id),
    getUserByUsername: (_, { username }) => getUserByUsername(username),
    getAllCategories: (_, { input }) => getAllCategories(input),
    getCategoryById: (_, { id }) => getCategoryById(id),
  },
};
