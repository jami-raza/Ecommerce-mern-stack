const Product = require("../model/productModel");
const asyncHandler = require("express-async-handler");

// @desc    Fetch all products
// @route   Get /api/products
// @access  Public

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    
    res.json(products);
  })

// @desc    Fetch Single product
// @route   Get /api/products/:id
// @access  Public

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found nothing" });
    }
  })

module.exports = {getProducts,getProductById};
