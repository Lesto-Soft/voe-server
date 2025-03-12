import { getAllUsers } from "./query/user.js";

export const resolvers = {
  Query: {
    getAllUsers: (_, { input }) => getAllUsers(input),
  },
};
