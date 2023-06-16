import config from "./config/index.js";
import server from "./app.mjs";
const port = config.get("port");

import socket from "./socket/index.mjs";

server.listen(port, () => {
  console.log(`🚀 Server running at port: ${port}`);
});
