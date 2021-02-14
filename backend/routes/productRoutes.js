const express = require("express");
const router = express.Router();
const {getProductById,getProducts} = require('../controllers/productcontroller')



router.route("/").get(getProducts);
router.route("/:id").get(getProductById)



module.exports = router;
