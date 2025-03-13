import { getAllUsers, getUserById, getUserByUsername } from "./query/user.js";
import { getAllCategories, getCategoryById } from "./query/category.js";
import {
  countByMonth,
  countByDays,
  countCases,
  getAllCases,
  getCaseById,
} from "./query/case.js";

export const resolvers = {
  Query: {
    // USER QUERIES
    getAllUsers: (_, { input }) => getAllUsers(input),
    getUserById: (_, { id }) => getUserById(id),
    getUserByUsername: (_, { username }) => getUserByUsername(username),

    // CATEGORY QUERIES
    getAllCategories: (_, { input }) => getAllCategories(input),
    getCategoryById: (_, { id }) => getCategoryById(id),

    // CASE QUERIES
    getAllCases: (_, { input }) => getAllCases(input),
    getCaseById: (_, { id }) => getCaseById(id),
    countCases: () => countCases(),
    countByMonth: (_, { year }) => countByMonth(year),
    countByDays: (_, { startDate, endDate }) => countByDays(startDate, endDate),
  },
};
