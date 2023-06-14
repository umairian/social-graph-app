const controllers = require("../controllers/user");

const resolvers = {
    Query: {
      user: controllers.getOne,
      users: controllers.getAll,
    },
    Mutation: {
      signup: controllers.signup
    }
  };

  module.exports = resolvers;