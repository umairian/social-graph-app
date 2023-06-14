const { mergeTypeDefs } = require('@graphql-tools/merge');
const bookSchema = require("./book");
const userSchema = require("./user");

module.exports = mergeTypeDefs([
  bookSchema,
  userSchema
])