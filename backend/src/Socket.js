const { Server } = require("socket.io")
require("dotenv").config()
const db = require("./database")

const url_frontend = process.env.URL_FRONTEND

function setupServer(server){
  const io = new Server(server, { cors: { origin: url_frontend, methods: ["GET", "POST"] } })

  io.on("connection", socket => {
    console.log("connected")
    
    // Khi người dùng mất kết nối
    socket.on("disconnect", () => {
      console.log("disconnected")
    })
  })
}

module.exports = setupServer