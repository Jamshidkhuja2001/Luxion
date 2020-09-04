const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require("../controllers/productController");
const { create } = require("../models/productModel");

const router = express.Router();

router.route("/luxion").get(getAllProducts).post(createProduct);
router.route("/update").patch(updateProduct);

module.exports = router;
