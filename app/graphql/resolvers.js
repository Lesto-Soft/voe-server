import {
  countByMonth,
  countByDays,
  countCases,
  getAllCases,
  getCaseById,
} from "./query/case.js";
import { getAllUsers } from "./query/user.js";

export const resolvers = {
  Query: {
    getAllUsers: (_, { input }) => getAllUsers(input),
    getAllCases: (_, { input }) => getAllCases(input),
    // CASE QUERIES
    getCaseById: (_, { id }) => getCaseById(id),
    countCases: () => countCases(),
    countByMonth: (_, { year }) => countByMonth(year),
    countByDays: (_, { startDate, endDate }) => countByDays(startDate, endDate),
  },
};
