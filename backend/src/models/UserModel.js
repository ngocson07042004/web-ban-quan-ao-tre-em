const bcrypt = require("bcryptjs")
const db = require("../libs/database")

const UserModel = {
   isUsername: (username) => {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM user_tb WHERE username = ?"
            db.query(sql, [username], (err, data) => {
                if (err) return reject(err)
                if (data.length === 0) return resolve(false)
                return resolve(true)
            })
        })
    },

    getAllUser: (callback) => {
        let sql = `SELECT * FROM user_tb`

        db.query(sql, (err, data) => callback(err, data))
    },

    login: (getReq, callback) => {
        const { username, role } = getReq.body
        let sql = `SELECT * FROM user_tb WHERE username = ? AND role = ?`
        
        db.query(sql, [username, role], (err, data) => callback(err, data))
    },

    register: async (getReq, callback) => {
        const { username, password, email, role, phone, gender, address, hashCode } = getReq.body
        const avatar = getReq.file ? getReq.file.filename : "1744741307078.5808.jpg"

        try {
            const hashPassword = await bcrypt.hash(password, 10)
            const code = await bcrypt.hash(hashCode, 10)

            let sql = `INSERT INTO user_tb (username, email, password, confirmPassword, 
                role, avatar, gender, phone, address, hashCode) VALUES (?)`
            const values = [username, email, hashPassword, hashPassword, role, avatar, gender, phone, address, code]

            db.query(sql, [values], (err, data) => callback(err, data))
        }
        catch(err) {
            console.log(err)
        }
    }
}

module.exports = UserModel