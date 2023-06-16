const { mergeResolvers } = require("@graphql-tools/merge");
const bookResolver = require("./book");
const userResolver = require("./user");
const messageResolver = require("./message");

const resolvers = mergeResolvers([
  bookResolver,
  userResolver,
  messageResolver
]);

  module.exports = resolvers;