const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema.graphql.ts");
const resolvers = require("./resolvers.graphql.ts");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

export {};
