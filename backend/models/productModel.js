const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
  pid: {
    type: String,
    required: [true, "this is required"],
  },
  productName: {
    type: String,
    required: [true, "Please enter the prod name"],
  },

  qty: {
    type: Number,
    required: [true, "Please enter qty"],
  },

  lastOrder:{
    type:String,
    required:[true, "Date is required"],
  }


});

module.exports = mongoose.model("Product", productSchema);
