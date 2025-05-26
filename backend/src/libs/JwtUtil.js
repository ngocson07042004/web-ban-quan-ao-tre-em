const jwt = require("jsonwebtoken")
const SHA256 = require("crypto-js/sha256")

require("dotenv").config()

const createKey = (hash) => {
  return SHA256(hash + process.env.JWT_SECRET).toString()
}

const signToken = (payload, secretKey, expiresIn = "1m") => { 
  return jwt.sign(payload, secretKey, { expiresIn })
}

const verifyToken = (token, secret, callback) => {
  jwt.verify(token, secret, (err, decode) => callback(err, decode))
}

const authorMiddleware = (req, res, next) => {
  const { token, secret } = req.cookies
  
  if (!token) return res.json("Token not provided")
  if (!secret) return res.json("Secret key not provided")
  
  verifyToken(token, secret, (err, decode) => {
    if (err) return res.json("Invalid or expired token")
    req.user = decode
    next()
  })
}

module.exports = { createKey, signToken, verifyToken, authorMiddleware }