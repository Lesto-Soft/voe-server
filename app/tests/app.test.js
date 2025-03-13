import request from "supertest";
import mongoose from "mongoose";
import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";
import { createApp } from "../app.js"; // Import the createApp function

let app;

beforeAll(async () => {
  app = await createApp(); // Start the app before tests
});

afterAll(async () => {
  // Close the database connection after tests are complete
  await mongoose.connection.close();
});

describe("GraphQL API", () => {
  it("should respond with a 200 status for /graphql", async () => {
    const res = await request(app).post("/graphql").send({
      query: "{ __typename }",
    });

    expect(res.statusCode).toBe(200);
  });
});
