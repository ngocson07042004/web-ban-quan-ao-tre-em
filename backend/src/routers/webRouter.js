const express = require("express")
const router = express.Router()
const productController = require("../controllers/ProductController")

// GET
router.get("/get/api/all-product", productController.getAllProduct)

module.exports = router