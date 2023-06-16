const { mergeTypeDefs } = require('@graphql-tools/merge');
const bookSchema = require("./book");
const userSchema = require("./user");
const messageSchema = require("./message");

module.exports = mergeTypeDefs([
  bookSchema,
  userSchema,
  messageSchema
])