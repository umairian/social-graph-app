const config = require("./config");
const server = require("./app.js");
const port = config.get("port");


server.listen(port, () => {
  console.log(`🚀 Server running at port: ${port}`);
});
