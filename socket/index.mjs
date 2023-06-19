import { Server } from "socket.io";
import Messages from "../models/message.js";

import server from "../app.mjs";
import { Types } from "mongoose";

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Maintain a list of connected users
const connectedUsers = {};

io.on("connection", (socket) => {
  console.log("socket");
  
  // Handle client authentication
  socket.on('authenticate', (userId) => {
    console.log(`User authenticated: ${userId}`);
    connectedUsers[userId] = socket; // Associate the user ID with the socket object
  });
  
  socket.on('message', async (data) => {
    const { sender, recipient, content } = data;

    await Messages.create({
      _id: Types.ObjectId(),
      sender,
      recipient,
      content
    });

    console.log(`Received message from ${sender} to ${recipient}: ${content}`);

    if (recipient in connectedUsers) {
      // Emit the message to the recipient client
      console.log("MESSAGEE SENT!")
      connectedUsers[recipient].emit('message', { sender, content, recipient });
    } else {
      console.log(`Recipient ${recipient} is not connected.`);
      // Handle the case when the recipient is not connected
      // You can emit an error message or take other actions.
    }
  });
});

export default io;
