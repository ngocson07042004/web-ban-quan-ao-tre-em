const bcrypt = require("bcryptjs")
const db = require("../libs/database")

const UserModel = {
    isCheckUser: (sql = "", values = []) => {
        return new Promise((resolve, reject) => {
            db.query(sql, values, (err, data) => {
                if (err) return reject(err)
                if (data.length === 0) return resolve(false)
                return resolve(true)
            })
        })
    },

    getUser: (sql = "", values = []) => {
        return new Promise((resolve, reject) => {
            db.query(sql, values, (err, data) => {
                if (err) return reject(err)
                if (data.length > 0) return resolve(data)
                return resolve("Not Found")
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
        const { username, password, email, role, fullname, phone, gender, address } = getReq.body
        const avatar = getReq.file ? getReq.file.filename : "1744741307078.5808.jpg"
        
        try {
            const hashPassword = await bcrypt.hash(password, 10)

            let sql = `INSERT INTO user_tb 
                (username, email, password, role, fullname, avatar, gender, phone, address) 
                VALUES (?)`

            const values = [username, email, hashPassword, role, fullname, avatar, gender, phone, address]

            db.query(sql, [values], (err, data) => callback(err, data))
        }
        catch(err) {
            console.log(err)
        }
    },

    changePassword: async (getReq, callback) => {
        const { username, password, role } = getReq.body
        
        try {
            const hashPassword = await bcrypt.hash(password, 10)

            let sql = `UPDATE user_tb SET password = ? WHERE username = ? AND role = ?`
            const values = [hashPassword, username, role]

            db.query(sql, values, (err, data) => callback(err, data))
        }
        catch(err) {
            console.log(err)
        }
    }
}

module.exports = UserModel