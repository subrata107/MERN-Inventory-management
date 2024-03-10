const express = require("express");
const {
  getProducts,
  addProducts,
  updateProducts,
  removeProducts,
} = require("../controllers/productController");
const router = express.Router();

router.route("/products").get(getProducts);
router.route("/new").post(addProducts);
router.route("/:id").put(updateProducts).delete(removeProducts);
module.exports = router;
