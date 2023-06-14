const Users = require("../models/user");

module.exports = {
  get: async (req, res) => {
    try {
      const users = await Users.find();
      return res.status(200).send({ users });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).message(err.message || "Something went wrong...");
    }
  },
  
};