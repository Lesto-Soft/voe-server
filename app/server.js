import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware as apolloMiddleware } from "@apollo/server/express4";
import { readFile } from "node:fs/promises";
import { resolvers } from "./graphql/resolvers.js";
dotenv.config();
const typeDefs = await readFile("app/graphql/schema.graphql", "utf8");

const app = express();
app.use(cors(), express.json());
app.use("/static", express.static("public"));

const apolloServer = new ApolloServer({ typeDefs, resolvers });
await apolloServer.start();
app.use("/graphql", apolloMiddleware(apolloServer));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
