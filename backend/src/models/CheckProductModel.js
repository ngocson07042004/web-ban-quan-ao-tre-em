const db = require("../libs/database")

const CheckProductModel = {
    getCheckOut: (callback) => {
        let sql = `SELECT o.idOrder, u.username, u.phone, u.address, p.nameProduct, p.price, p.imageUrl, o.quantity, o.size, o.statusOrder FROM order_tb AS o
        INNER JOIN user_tb AS u ON o.username = u.username
        INNER JOIN product_tb as p ON o.idProduct = p.idProduct`

        db.query(sql, (err, data) => callback(err, data))
    },

    postOrder: (getReq, callback) => {
        const { orders } = getReq.body

        const values = orders.map(o => [o.idOrder, o.idProduct, o.username, o.size, o.quantity])

        let sql = `INSERT INTO order_tb (idOrder, idProduct, username, size, quantity) VALUES ?`
        
        db.query(sql, [values], (err, data) => callback(err, data))
    },

    updateSize: (getReq, callback) => {
        const { chooseSize, id } = getReq.body
        
        let sql = `UPDATE order_tb SET size = ? WHERE idOrder = ?`

        db.query(sql, [chooseSize, id], (err, data) => callback(err, data))
    },

    orderSubmit: async (getReq, callback) => {
        try {
            const username = await getReq.user.username

            let sql = `UPDATE order_tb SET statusOrder = 
            'Đã đặt hàng' WHERE username = ? AND statusOrder = 'Chưa đặt hàng'`

            db.query(sql, [username], (err, data) => callback(err, data))
        }
        catch(err) {
            console.log(err)
        }
    }
}

module.exports = CheckProductModel