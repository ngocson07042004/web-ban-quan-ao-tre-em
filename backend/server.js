const express = require("express")
const cors = require("cors")
const http = require("http")
const path = require("path")
const router = require("./src/routers/webRouter")
const setupServer = require("./src/Socket")

// Config
require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
app.use("/users", express.static(path.join(__dirname, "users")))

// Server setup
const server = http.createServer(app)

// API routes
app.use("/", router)

// Socket
setupServer(server)


// Server running
server.listen(port, () => console.log(`Server is running on port ${port}`))