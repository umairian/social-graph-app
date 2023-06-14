const convict = require("convict");

// Define a schema
var config = convict({
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  ip: {
    doc: "The IP address to bind.",
    format: "ipaddress",
    default: "127.0.0.1",
    env: "IP_ADDRESS",
  },
  port: {
    doc: "The port to bind.",
    format: Number,
    default: 8080,
    env: "PORT",
    arg: "port",
  },
  db: {
    connectionString: {
      doc: "Connection string to connect with mongodb",
      format: "*",
      default: "",
      env: "DB_CONNECTION_STRING"
    }
  },
  jwt_secret: {
    doc: "JWT Secret key",
    format: String,
    default: "",
    env: "JWT_SECRET",
  },
});

// Load environment dependent configuration
let env = config.get("env");
if (env === "development") {
  config.loadFile(__dirname + "/environments/" + env + ".json");
}

// Perform validation
config.validate({ allowed: "strict" });

module.exports = config;
