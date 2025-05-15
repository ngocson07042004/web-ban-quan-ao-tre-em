const db = require("../database")

const ProductModel = {
    AllProduct: (getReq, callback) => {
        let sql = `SELECT * FROM product_tb`

        db.query(sql, (err, data) => callback(err, data))
    }
}

module.exports = ProductModel