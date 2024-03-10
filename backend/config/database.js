const mongoose = require("mongoose");
URL = "mongodb://localhost:27017/stockDB";

const connectdb = () => {
  mongoose.connect(URL).then(() => {
    console.log("mongo connect success");
  });
};

module.exports = connectdb
