import {
  getAllUsers,
  getUserById,
  getUserByUsername,
} from "../../graphql/query/user.js";
import { UserModel } from "../../mongoModels/user.js";
import mockUsers from "../mockup-data/users.json";

jest.mock("../../mongoModels/user.js");

describe("User Resolvers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("getAllUsers should return all users", async () => {
    UserModel.find.mockImplementation(() => ({
      populate: jest.fn().mockReturnThis(),
      sort: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockUsers),
    }));

    const input = { itemsPerPage: 2, currentPage: 0 };
    const users = await getAllUsers(input);

    expect(users).toEqual(mockUsers);
    expect(UserModel.find).toHaveBeenCalledWith({});
  });

  test("getUserById should return a user by ID", async () => {
    //get first user from mock data
    const mockUser = mockUsers[0];
    UserModel.findById.mockImplementation(() => ({
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockUser),
    }));

    //Get user with real method
    const user = await getUserById(mockUser._id);

    //compare the result user with the mock user
    expect(user).toEqual(mockUser);
    //Check if the method is called with the correct ID
    expect(UserModel.findById).toHaveBeenCalledWith(mockUser._id);
  });

  test("getUserByUsername should return a user by username", async () => {
    const mockUser = mockUsers[0];
    UserModel.findOne.mockImplementation(() => ({
      populate: jest.fn().mockReturnThis(),
      exec: jest.fn().mockResolvedValue(mockUser),
    }));

    const input = { username: mockUser.username };
    const user = await getUserByUsername(input);

    expect(user).toEqual(mockUser);
    expect(UserModel.findOne).toHaveBeenCalledWith({
      username: { $regex: `^${mockUser.username}$`, $options: "i" },
    });
  });
});
