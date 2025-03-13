import {
  getAllCategories,
  getCategoryById,
} from "../../graphql/query/category.js";
import { CategoryModel } from "../../mongoModels/category.js";
import mockCategories from "../mockup-data/category.json";

jest.mock("../../mongoModels/category.js");

describe("Category Resolvers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getAllCategories should return all categories", async () => {
    CategoryModel.find.mockImplementation(() => ({
      sort: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockCategories),
    }));

    const input = { itemsPerPage: 2, currentPage: 0 };
    const categories = await getAllCategories(input);

    expect(categories).toEqual(mockCategories);
    expect(CategoryModel.find).toHaveBeenCalledWith({});
  });

  test("getCategoryById should return a category by ID", async () => {
    const mockCategory = mockCategories[0];
    CategoryModel.findById.mockImplementation(() => ({
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockCategory),
    }));

    const category = await getCategoryById(mockCategory._id);

    expect(category).toEqual(mockCategory);
    expect(CategoryModel.findById).toHaveBeenCalledWith(mockCategory._id);
  });
});
