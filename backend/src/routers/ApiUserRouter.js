const express = require("express")
const routerUser = express.Router()
const upload = require("../libs/Multer")
const userController = require("../controllers/UserController")
const { authorMiddleware } = require("../libs/JwtUtil")

//PUT
routerUser.put("/put/api/change-password", userController.changePassword)

// GET
routerUser.get("/get/api/all-user", userController.getAllUser)

//POST
routerUser.post("/post/api/login", userController.login)
routerUser.post("/post/api/register", upload.single("avatar"), userController.register)
routerUser.post("/post/api/logout", userController.logout)

module.exports = routerUser