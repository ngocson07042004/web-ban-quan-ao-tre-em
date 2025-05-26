const express = require("express")
const routerUser = express.Router()
const upload = require("../libs/Multer")
const userController = require("../controllers/UserController")

//DELETE

// GET
routerUser.get("/get/api/all-user", userController.getAllUser)

//POST
routerUser.post("/post/api/login", userController.login)
routerUser.post("/post/api/register", upload.single("avatar"), userController.register)

module.exports = routerUser