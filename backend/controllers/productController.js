const Product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  const productlist = await Product.find();
  // res.status(200).json({
  //   productlist,
  // });

   res.send({productlist});
};

exports.addProducts = async (req, res) => {
  const addProducts = await Product.insertMany(req.body);
  res.send(true)
};

exports.updateProducts = async (req, res) => {
  const updateProducts = await Product.findByIdAndUpdate(
    req.params.id,
    req.body 
  );

  res.send(true);
  
};

exports.removeProducts = async (req, res) => {

  const removeProduct = await Product.findByIdAndDelete(req.params.id)

  res.status(200).json({

    removeProduct,
    message: "remove success"
  })
};
