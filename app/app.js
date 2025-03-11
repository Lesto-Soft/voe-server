import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from "node:fs/promises";
import { resolvers } from "./graphql/resolvers.js";

dotenv.config();

// Function to start Apollo Server and set up the Express app
export async function createApp() {
  // Read the schema file asynchronously
  const typeDefs = await readFile("app/graphql/schema.graphql", "utf8");

  // Initialize the Express app
  const app = express();
  app.use(cors(), express.json());
  app.use("/static", express.static("public"));

  // Initialize Apollo Server
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  await apolloServer.start();

  // Use Apollo middleware with Express
  app.use("/graphql", apolloMiddleware(apolloServer));

  return app; // Return the app instance
}
