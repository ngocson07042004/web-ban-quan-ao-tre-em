const express = require("express")
const router = express.Router()
const productController = require("../controllers/ProductController")
const userController = require("../controllers/UserController")

//DELETE
router.delete("/delete/api/cart-product/:idCart", productController.deleteProductWithCart)

// GET
router.get("/get/api/all-user", userController.getAllUser)
router.get("/get/api/all-product", productController.getAllProduct)
router.get("/get/api/cart-product", productController.getProductWithCart)

//POST
router.post("/post/api", userController.login)
router.post("/post/api/add-to-cart", productController.postProductCart)

module.exports = router