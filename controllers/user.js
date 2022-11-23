
module.exports = {
  get: async (req, res) => {
    try {
      return res.status(200).send("Users");
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).message(err.message || "Something went wrong...");
    }
  }
};