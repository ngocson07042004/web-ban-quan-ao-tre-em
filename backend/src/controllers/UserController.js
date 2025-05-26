const bcrypt = require("bcryptjs")
const UserModel = require("../models/UserModel")
const { createKey, signToken, verifyToken } = require("../libs/JwtUtil")

require("dotenv").config()

const UserController = {
    getAllUser: (req, res) => {
        UserModel.getAllUser((err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    },

    register: async (req, res) => {
        const { username } = req.body

        try {
            const isExist = await UserModel.isUsername(username)
            if (isExist) return res.json("Username is exist")
            
            UserModel.register(req, (err, data) => {
                if (err) return res.json("Error")
                return res.json(data)
            })
        } 
        catch (err) {
            console.error(err)
        }
    },


    login: (req, res) => {
        const { hashCode, password } = req.body

        UserModel.login(req, async (err, data) => {
            if (err) return res.json("Error")
            if (data.length === 0) return res.json("User not found")

            try {
                const user = data[0]
                
                const isPassword  = await bcrypt.compare(password, user.password)
                const isHashCode = await bcrypt.compare(hashCode, user.hashCode)

                if (!isPassword ) return res.json("Password is not valid")

                if(!isHashCode) return res.json("Code is not valid")

                const payload = { username: user.username, email: user.email, phone: user.phone }
                const code = createKey(hashCode)
                const token = signToken(payload, code, "1h")
                res.cookie("token", token, { maxAge: 60 * 60 * 1000, httpOnly: true })
                res.cookie("secret", code, { maxAge: 60 * 60 * 1000, httpOnly: true })
                console.log({ token, code, user, success: true })
                return res.json({ token, code, user, success: true })
            }
            catch(err) {
                console.log(err)
            }
        })
    }
}

module.exports = UserController