const express = require("express");
const cors = require("cors")
const app = express();
const productRoute = require("./routes/productRoute");

app.use(cors())

app.use(express.json())

app.use("/api/v1", productRoute);
module.exports = app;
