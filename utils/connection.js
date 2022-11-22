const { default: mongoose } = require("mongoose");
const config = require("../config");

exports.connectWithMongoDb = async function () {
    try {
        await mongoose.connect(config.get("db.connectionString"));
    } catch (err) {
        console.log("Connection Failed!");
        console.log(err);
    }
}