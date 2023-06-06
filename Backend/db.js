const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const url = process.env.CONNECT_KEY;

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
