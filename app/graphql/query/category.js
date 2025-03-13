import { CategoryModel } from "../../mongoModels/category.js";

const DEFAULT_ITEMS_PER_PAGE = 10;
const DEFAULT_STARTING_PAGE = 0;

export const getAllCategories = async (input) => {
  try {
    const {
      itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
      currentPage = DEFAULT_STARTING_PAGE,
      query,
    } = input || {}; // Default values if input is not provided
    const filter = query ? { name: { $regex: query, $options: "i" } } : {}; // Case-insensitive search

    const categories = await CategoryModel.find(filter)
      .sort({ name: 1 }) // Sort alphabetically
      .skip(currentPage * itemsPerPage)
      .limit(itemsPerPage)
      .populate("experts cases")
      .exec(); // Execute the query

    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching categories."); // Optional: throw a custom error message
  }
};

export const getCategoryById = async (id) => {
  try {
    const category = await CategoryModel.findById(id)
      .populate("experts cases")
      .exec();

    return category;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching category by ID."); // Optional: throw a custom error message
  }
};
