const express = require("express")
const routerProduct = express.Router()
const productController = require("../controllers/ProductController")
const { authorMiddleware } = require("../libs/JwtUtil")

//DELETE
routerProduct.delete("/delete/api/cart-product/:idCart", authorMiddleware, productController.deleteProductWithCart)

// GET
routerProduct.get("/get/api/all-product", productController.getAllProduct)
routerProduct.get("/get/api/cart-product", authorMiddleware, productController.getProductWithCart)
routerProduct.get("/get/api/check-cart", authorMiddleware, productController.checkCart)
routerProduct.get("/get/api/search", productController.searchProduct)


// PUT
routerProduct.put("/put/api/cart-product", authorMiddleware, productController.updateProductCart)
routerProduct.put("/put/api/add-to-cart", authorMiddleware, productController.updateAddProductCart)

//POST
routerProduct.post("/post/api/add-to-cart", authorMiddleware, productController.postProductCart)

module.exports = routerProduct