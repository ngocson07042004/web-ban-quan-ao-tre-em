const express = require("express")
const routerCheck = express.Router()
const CheckProductController = require("../controllers/CheckProductController")
const { authorMiddleware } = require("../libs/JwtUtil")

//GET
routerCheck.get("/get/api/check-out", CheckProductController.getCheckOut)

//POST
routerCheck.post("/post/api/add-to-order", authorMiddleware, CheckProductController.postOrder)

//PUT
routerCheck.put("/put/api/check-size-update/:id", authorMiddleware, CheckProductController.updateSize)
routerCheck.put("/put/api/order-submit", authorMiddleware, CheckProductController.orderSubmit)

module.exports = routerCheck