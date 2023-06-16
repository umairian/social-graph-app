import { Server } from "socket.io";

import config from "./config/index.js";
import server from "./app.mjs";
const port = config.get("port");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log("socket");
  socket.on("message", (message) => {
    console.log(message)
  })
});

server.listen(port, () => {
  console.log(`🚀 Server running at port: ${port}`);
});
