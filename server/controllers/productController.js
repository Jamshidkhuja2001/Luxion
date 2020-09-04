const Product = require("./../models/productModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      status: "Success",
      products,
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.send({
      status: "Success",
      product: newProduct,
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedUser = await Product.findOneAndUpdate(
      req.params.id,
      res.body,
      {
        new: true,
      }
    );
    res.send(updatedUser);
  } catch (err) {
    console.error(err.message);
  }
};
