import { CategoryModel } from "../../mongoModels/category.js";

export const getAllCategories = async (input) => {
  const { itemsPerPage = 10, currentPage = 0, query } = input || {}; // Default values if input is not provided
  const filter = query ? { name: { $regex: query, $options: "i" } } : {}; // Case-insensitive search

  const categories = await CategoryModel.find(filter) //TODO: populate(see columns)
    .sort({ name: 1 }) // Sort alphabetically
    .skip(currentPage * itemsPerPage)
    .limit(itemsPerPage)
    .exec(); // Execute the query

  return categories;
};

export const getCategoryById = async (id) => {
  const category = await CategoryModel.findById(id)
    .populate("categories cases answers comments avatar priviledge")
    .exec();

  if (!category) {
    throw new Error("Category not found");
  }

  return category;
};
