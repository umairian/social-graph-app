const { mergeResolvers } = require("@graphql-tools/merge");
const bookResolver = require("./book");
const userResolver = require("./user");

const resolvers = mergeResolvers([
  bookResolver,
  userResolver
]);

  module.exports = resolvers;