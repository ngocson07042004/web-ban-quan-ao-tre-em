const bcrypt = require("bcryptjs")
const UserModel = require("../models/UserModel")
const { createKey, signToken, verifyToken } = require("../libs/JwtUtil")

require("dotenv").config()

const UserController = {
    getAllUser: (req, res) => {
        UserModel.getAllUser((err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    register: async (req, res) => {
        const { username } = req.body

        try {
            const sql = `SELECT username FROM user_tb WHERE username = ?`
            const isExist = await UserModel.isCheckUser(sql, [username])
            if (isExist) return res.json("Username is exist")
            
            UserModel.register(req, (err, data) => {
                if(err) {
                    console.log(err)
                    return res.json("Error")
                }
                return res.json(data)
            })
        } 
        catch (err) {
            console.error(err)
        }
    },

    changePassword: async (req, res) => {
        const { username, role, hashCode } = req.body

        try {
            const sql = `SELECT * FROM user_tb WHERE username = ? AND role = ?`
            const isExist = await UserModel.isCheckUser(sql, [username, role])
            if(!isExist) return res.json("Username is not exist")
            
            const data = await UserModel.getUser("SELECT * FROM user_tb WHERE username = ?", [username])
            const user = await data[0]

            const isHashCode = await bcrypt.compare(hashCode, user.hashCode)
            if(!isHashCode) return ("Code is not valid")
        
            UserModel.changePassword(req, (err, data) => {
                if(err) {
                    console.log(err)
                    return res.json("Error")
                }
                return res.json(data)
            })
        }
        catch(err) {
            console.log(err)
        }
    },

    login: (req, res) => {
        const { hashCode, password } = req.body

        UserModel.login(req, async (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            if (data.length === 0) return res.json("User not found")

            try {
                const user = await data[0]
                
                const isPassword  = await bcrypt.compare(password, user.password)
                const isHashCode = await bcrypt.compare(hashCode, user.hashCode)

                if (!isPassword ) return res.json("Password is not valid")

                if(!isHashCode) return res.json("Code is not valid")

                const payload = { username: user.username, email: user.email, phone: user.phone }
                const code = createKey(hashCode)
                const token = signToken(payload, code, "5m")
                res.cookie("token", token, { maxAge: 5 * 60 * 1000, httpOnly: true, domain: process.env.URL_FRONTEND })
                res.cookie("secret", code, { maxAge: 5 * 60 * 1000, httpOnly: true, domain: process.env.URL_FRONTEND })
                return res.json({ token, code, user, success: true })
            }
            catch(err) {
                console.log(err)
            }
        })
    },
    
    logout: (req, res) => {
        res.clearCookie("token", { httpOnly: true })
        res.clearCookie("secret", { httpOnly: true })
        return res.json("Success")
    }
}

module.exports = UserController