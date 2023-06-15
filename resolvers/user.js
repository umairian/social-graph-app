const controllers = require("../controllers/user");

const resolvers = {
    Query: {
      user: controllers.getOne,
      users: controllers.getAll,
    },
    Mutation: {
      signup: controllers.signup,
      login: controllers.login
    }
  };

  module.exports = resolvers;