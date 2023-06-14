const Users = require("../models/user");

module.exports = {
    getAll: async function () {
        try {
            const users = await Users.find();

            return users
        } catch (err) {
            console.log(err);
            return new Error("Something went wrong!");
        }
    },
    getOne: async (parent, args, contextValue, info) => {
        try {
            const { _id } = args;
          const user = await Users.findOne({
            _id
          });
          return user;
        } catch (err) {
          console.log(err);
          return new Error("Something went wrong!")
        }
      }
};