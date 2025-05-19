const jwt = require('jsonwebtoken')
require("dotenv").config()

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader)
        return res.status(401).json({ error: 'Bạn chưa đăng nhập' })

    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.json("Not Token")
        req.user = user
        next()
    })
}

const requireRole = role => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.json("Not Role")
        }
        next()
    }
}

module.exports = { verifyToken, requireRole }