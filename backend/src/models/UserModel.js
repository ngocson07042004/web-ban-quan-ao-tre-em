const db = require("../database")

const UserModel = {
    isUsername: (req, res) => {
        const { username } = req.body
        let sql = `SELECT * FROM users WHERE username = ? `

        db.query(sql, [username], (err, data) => {
            if(err) return false
            if(data.lenth > 0) 
                return true
            else 
                return false
        })
    },

    getAllUser: (callback) => {
        let sql = `SELECT * FROM user_tb`

        db.query(sql, (err, data) => callback(err, data))
    },

    login: (getReq, callback) => {
        const { identifier, password, role } = getReq.body
        let sql = `SELECT * FROM users WHERE email = ? OR username = ? OR phone = ? and password = ? AND role = ?`

        db.query(sql, [identifier, identifier, identifier, password , role], (err, data) => callback(err, data))
    }
}

module.exports = UserModel