const express = require("express")
const cors = require("cors")
const http = require("http")
const path = require("path")
const cookieParser = require("cookie-parser")
require("dotenv").config()
const routerP = require("./src/routers/ApiProductRouter")
const routerU = require("./src/routers/ApiUserRouter")

// Config
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.URL_FRONTEND,
    methods: ["GET", "POST" ,"DELETE", "PUT"],
    credentials: true
}))
app.use("/users", express.static(path.join(__dirname, "users")))

// Server setup
const server = http.createServer(app)

// API routes
app.use("/", routerU)
app.use("/", routerP)

// Server running
server.listen(port, () => console.log(`Server is running on port ${port}`))