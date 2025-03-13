import { CaseModel } from "../../mongoModels/case.js";

const DEFAULT_ITEMS_PER_PAGE = 10;
const DEFAULT_STARTING_PAGE = 0;

export const getAllCases = async (input) => {
  const {
    itemsPerPage = DEFAULT_ITEMS_PER_PAGE,
    currentPage = DEFAULT_STARTING_PAGE,
    query,
  } = input || {};
  const filter = query ? { title: { $regex: query, $options: "i" } } : {};

  try {
    const cases = await CaseModel.find(filter)
      .populate("user categories answers comments")
      .sort({ createdAt: -1 })
      .skip(currentPage * itemsPerPage)
      .limit(itemsPerPage)
      .exec();

    return cases;
  } catch (error) {
    throw new Error("Failed to fetch cases");
  }
};

export const getCaseById = async (id) => {
  try {
    const found_case = await CaseModel.findById(id)
      .populate("user categories answers comments")
      .exec();
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
          _id: {
            month: { $month: "$createdAt" },
            type: "$type",
          },
          count: { $sum: 1 },
        },
      },
    ]);

    console.log(result);

    const formattedResult = result.reduce((acc, { _id, count }) => {
      const month = _id.month;
      const type = _id.type;

      if (!acc[month]) {
        acc[month] = { month, problems: 0, suggestions: 0 };
      }

      if (type === "PROBLEM") {
        acc[month].problems += count;
      } else if (type === "SUGGESTION") {
        acc[month].suggestions += count;
      }

      return acc;
    }, {});

    return Object.values(formattedResult);
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
          _id: {
            weekday: { $dayOfWeek: "$createdAt" },
            type: "$type",
          },
          count: { $sum: 1 },
        },
      },
    ]);

    const formattedResult = result.reduce((acc, { _id, count }) => {
      const weekday = _id.weekday;
      const type = _id.type;

      if (!acc[weekday]) {
        acc[weekday] = { weekday, problems: 0, suggestions: 0 };
      }

      if (type === "PROBLEM") {
        acc[weekday].problems += count;
      } else if (type === "SUGGESTION") {
        acc[weekday].suggestions += count;
      }

      return acc;
    }, {});

    return Object.values(formattedResult);
  } catch (error) {
    throw new Error("Failed to count cases by day");
  }
};
