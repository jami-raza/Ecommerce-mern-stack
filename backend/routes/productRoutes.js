const express = require("express");
const router = express.Router();
const {getProductById,getProducts, deleteProduct, createProduct, updateProduct} = require('../controllers/productcontroller')
const { protect, admin } = require("../middlerware/authMiddleware");


router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct)



module.exports = router;
