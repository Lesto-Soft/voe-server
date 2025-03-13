import request from "supertest";
import mongoose from "mongoose";
import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";
import { createApp } from "../app.js"; // Import the createApp function

let app;

// Check if the environment is CI or if the '--skip-db' argument is passed
const skipDatabaseTests =
  process.env.CI === "true" || process.argv.includes("--skip-db");

beforeAll(async () => {
  if (!skipDatabaseTests) {
    app = await createApp(); // Start the app only if not skipping DB tests
  }
});

afterAll(async () => {
  if (!skipDatabaseTests) {
    // Close the database connection after tests are complete
    await mongoose.connection.close();
  }
});

describe("GraphQL API", () => {
  it("should respond with a 200 status for /graphql", async () => {
    if (skipDatabaseTests) {
      // Skip the actual test logic if database tests are being skipped
      console.log("Skipping database test in CI");
      return;
    }

    const res = await request(app).post("/graphql").send({
      query: "{ __typename }",
    });

    expect(res.statusCode).toBe(200);
  });
});
