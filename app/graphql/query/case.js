import { CaseModel } from "../../mongoModels/case.js";

export const getAllCases = async (input) => {
  const { itemsPerPage, currentPage, query } = input;
  const filter = query ? { title: { $regex: query, $options: "i" } } : {};

  try {
    const cases = await CaseModel.find(filter)
      .populate("user categories answers comments")
      .sort({ createdAt: -1 })
      .skip(currentPage * itemsPerPage)
      .limit(itemsPerPage);

    return cases;
  } catch (error) {
    throw new Error("Failed to fetch cases");
  }
};

export const getCaseById = async (id) => {
  try {
    const found_case = await CaseModel.findById(id).populate(
      "user categories answers comments"
    );

    return found_case;
  } catch (error) {
    throw new Error("Failed to fetch case");
  }
};

export const countCases = async () => {
  try {
    const count = await CaseModel.countDocuments();
    return count;
  } catch (error) {
    throw new Error("Failed to count cases");
  }
};

export const countByMonth = async ({ year }) => {
  try {
    const result = await CaseModel.aggregate([
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
          _id: { $month: "$createdAt" },
          count: { $sum: 1 },
        },
      },
    ]);

    return result;
  } catch (error) {
    throw new Error("Failed to count cases by month");
  }
};

export const countByDays = async ({ startDate, endDate }) => {
  try {
    const result = await CaseModel.aggregate([
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
          _id: { $dayOfMonth: "$createdAt" },
          count: { $sum: 1 },
        },
      },
    ]);

    return result;
  } catch (error) {
    throw new Error("Failed to count cases by day");
  }
};
