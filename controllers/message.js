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
        $or: [
          {
            sender: Types.ObjectId(sender),
            recipient: Types.ObjectId(recipient)
          },
          {
            sender: Types.ObjectId(recipient),
            recipient: Types.ObjectId(sender)
          }
        ]
      });
      return messages;
    } catch (err) {
      console.log(err);
      return new Error("Something went wrong!");
    }
  },
  sendMessage: async (parent, args, contextValue, info) => {
    try {
      const { sender, recipient, content } = args;
      const messages = await Messages.create({
        _id: Types.ObjectId(),
        recipient,
        sender,
        content
      });
      return messages;
    } catch (err) {
      console.log(err);
      return new Error("Something went wrong!");
    }
  },
};
