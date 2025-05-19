const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const UserModel = require("../models/UserModel")
require("dotenv").config()

const UserController = {
    getAllUser: (req, res) => {
        UserModel.getAllUser((err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    },

    login: (req, res) => {
        UserModel.login(req, async(err, data) => {
            if(err) return res.json("Error")
            if(data.length === 0) return res.json("Not User")

            const user = data[0]
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.json("Not Password")
            }

            const token = jwt.sign(
                { auth: user.username || user.email || user.phone, role: user.role }, 
                process.env.JWT_SECRET, 
                { expiresIn: "10m" }
            )
            return res.json({ token })
        })
    }
}

module.exports = UserController