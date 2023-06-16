const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Types } = require("mongoose");
const Messages = require("../models/message");
const config = require("../config")

module.exports = {
  get: async (parent, args, contextValue, info) => {
    try {
      const { sender, recipient } = args;
      console.log("THISSS")
      console.log(sender, recipient)
      const messages = await Messages.find({
        sender: Types.ObjectId(sender),
        recipient: Types.ObjectId(recipient)
      });
      return messages;
    } catch (err) {
      console.log(err);
      return new Error("Something went wrong!");
    }
  },
};
