import {
  getAllCases,
  getCaseById,
  countCases,
  countByMonth,
  countByDays,
} from "../../graphql/query/case.js";
import { CaseModel } from "../../mongoModels/case.js";
import mockCases from "../mockup-data/case.json";

jest.mock("../../mongoModels/case.js");

describe("Case Resolvers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getAllCases should return all cases", async () => {
    CaseModel.find.mockImplementation(() => ({
      populate: jest.fn().mockReturnThis(),
      sort: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockCases),
    }));

    const input = { itemsPerPage: 2, currentPage: 0 };
    const cases = await getAllCases(input);

    expect(cases).toEqual(mockCases);
    expect(CaseModel.find).toHaveBeenCalledWith({});
  });

  test("getCaseById should return a case by ID", async () => {
    const mockCase = mockCases[0];
    CaseModel.findById.mockImplementation(() => ({
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockCase),
    }));

    const caseData = await getCaseById(mockCase._id);

    expect(caseData).toEqual(mockCase);
    expect(CaseModel.findById).toHaveBeenCalledWith(mockCase._id);
  });

  test("countCases should return the total number of cases", async () => {
    CaseModel.countDocuments.mockResolvedValue(mockCases.length);

    const count = await countCases();

    expect(count).toEqual(mockCases.length);
    expect(CaseModel.countDocuments).toHaveBeenCalled();
  });

  test("countByMonth should return the count of cases grouped by month", async () => {
    const year = 2023;
    const mockResult = [
      { _id: { month: 10, type: "PROBLEM" }, count: 2 },
      { _id: { month: 11, type: "SUGGESTION" }, count: 1 },
    ];
    const expectedResult = [
      { month: 10, problems: 2, suggestions: 0 },
      { month: 11, problems: 0, suggestions: 1 },
    ];
    CaseModel.aggregate.mockResolvedValue(mockResult);

    const result = await countByMonth({ year });

    expect(result).toEqual(expectedResult);
    expect(CaseModel.aggregate).toHaveBeenCalledWith([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${year}-01-01`),
            $lt: new Date(`${year + 1}-01-01`),
          },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: "$createdAt" },
            type: "$type",
          },
          count: { $sum: 1 },
        },
      },
    ]);
  });

  test("countByDays should return the count of cases grouped by day", async () => {
    const startDate = "2023-10-01";
    const endDate = "2023-10-31";
    const mockResult = [
      { _id: { weekday: 1, type: "PROBLEM" }, count: 1 },
      { _id: { weekday: 2, type: "SUGGESTION" }, count: 1 },
    ];
    const expectedResult = [
      { weekday: 1, problems: 1, suggestions: 0 },
      { weekday: 2, problems: 0, suggestions: 1 },
    ];
    CaseModel.aggregate.mockResolvedValue(mockResult);

    const result = await countByDays({ startDate, endDate });

    expect(result).toEqual(expectedResult);
    expect(CaseModel.aggregate).toHaveBeenCalledWith([
      {
        $match: {
          createdAt: {
            $gte: new Date(startDate),
            $lt: new Date(endDate),
          },
        },
      },
      {
        $group: {
          _id: {
            weekday: { $dayOfWeek: "$createdAt" },
            type: "$type",
          },
          count: { $sum: 1 },
        },
      },
    ]);
  });
});
