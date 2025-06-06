const mysql = require("mysql2")
require("dotenv").config()

const connected = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
})

connected.connect(err => {
    if(err) console.log(err)
    console.log("Connected!")
})

module.exports = connected