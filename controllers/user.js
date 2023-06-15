const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");
const Users = require("../models/user");
const config = require("../config")

module.exports = {
  getAll: async function () {
    try {
      const users = await Users.find();

      return users;
    } catch (err) {
      console.log(err);
      return new Error("Something went wrong!");
    }
  },
  getOne: async (parent, args, contextValue, info) => {
    try {
      const { _id } = args;
      const user = await Users.findOne({
        _id,
      });
      return user;
    } catch (err) {
      console.log(err);
      return new Error("Something went wrong!");
    }
  },
  signup: async (parent, args, contextValue, info) => {
    try {
      const { name, email, password, profile_url, dob } = args;

      const emailFound = await Users.findOne({
        email
      });

      if(emailFound) {
        throw Error("Email already exists");
      }

      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);
      let newUser = await Users.create({
        _id: Types.ObjectId(),
        name,
        email,
        password: hashedPassword,
        dob,
        profile_url
      });

      newUser = newUser.toObject();
      delete newUser.password;

      const token = jwt.sign(newUser, config.get("jwt_secret"))

      return { user: newUser, token };
    } catch (err) {
      console.log(err);
      return Error(err.message || "Something went wrong!");
    }
  },
  login: async (parent, args, contextValue, info) => {
    try {
      const { email, password, } = args;

      let user = await Users.findOne({
        email
      });

      if(!user) {
        throw Error("Invalid Email");
      }

      const passwordMatched = bcrypt.compare(password, user.password);
      if(!passwordMatched) {
        throw Error("Incorrect Password")
      }

      user = user.toObject();
      delete user.password;

      const token = jwt.sign(user, config.get("jwt_secret"))

      return { user, token };
    } catch (err) {
      console.log(err);
      return Error(err.message || "Something went wrong!");
    }
  },
};
