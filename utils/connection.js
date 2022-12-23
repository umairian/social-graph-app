const { default: mongoose } = require("mongoose");
const config = require("../config");

exports.connectWithMongoDb = async function () {
    try {
        await mongoose.connect(config.get("db.connectionString"), {
            keepAlive: true,
        });
        console.log("✅ Database connected successfully!")
    } catch (err) {
        console.log("❌ Database Connection Failed!");
        console.log(err);
    }
}