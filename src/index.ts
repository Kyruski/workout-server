const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema.graphql.ts");
const resolvers = require("./resolvers.graphql.ts");

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(express.static(path.join(__dirname, "/../../client/dist")));

app.listen(4000, () => console.log("Server running at port 4000"));

export {};
