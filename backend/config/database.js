const mongoose = require("mongoose");
URL = "";

const connectdb = () => {
  mongoose.connect(URL).then(() => {
    console.log("mongo connect success");
  });
};

module.exports = connectdb
