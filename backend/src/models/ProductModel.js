const db = require("../libs/database")

const ProductModel = {
    AllProduct: (callback) => {
        let sql = `SELECT * FROM product_tb`

        db.query(sql, (err, data) => callback(err, data))
    },
    
    getProductWithCart: (callback) => {
        let sql = `SELECT idCart, u.username, p.idProduct, p.imageUrl, p.nameProduct, p.price, c.quantity, c.size 
                    FROM cart_tb AS c
                    INNER JOIN user_tb AS u ON c.username = u.username
                    INNER JOIN product_tb as p ON c.idProduct = p.idProduct
                `

        db.query(sql, (err, data) => callback(err, data))
    }, 

    checkCart: (getReq, callback) => {
        const { user, idProduct } = getReq.query
        const sql = `SELECT * FROM cart_tb WHERE username = ? AND idProduct = ?`

        db.query(sql, [user, idProduct], (err, data) => callback(err, data))
    },

    deleteProductWithCart: (getReq, callback) => {
        let sql = `DELETE FROM cart_tb WHERE idCart = ?`
        let { idCart } = getReq.params

        db.query(sql, [idCart], (err, data) => callback(err, data))
    },

    postProductCart: (getReq, callback) => {
        const { uid, user, idProduct, quantity } = getReq.body
        
        let sql = `INSERT INTO cart_tb (idCart, username, idProduct, quantity) VALUES (?, ?, ?, ?)`

        db.query(sql, [uid, user, idProduct, quantity], (err, data) => callback(err, data))
    },

    updateProductCart: (getReq, callback) => {
        const { user, idProduct, quantity } = getReq.body
        let sql = `UPDATE cart_tb SET quantity = ? WHERE username = ? AND idProduct = ?`
        
        db.query(sql, [quantity, user, idProduct], (err, data) => callback(err, data))
    },

    updateAddProductCart: (getReq, callback) => {
        const { user, idProduct, quantity } = getReq.body
        let sql = `UPDATE cart_tb SET quantity = quantity + ? WHERE username = ? AND idProduct = ?`
        
        db.query(sql, [quantity, user, idProduct], (err, data) => callback(err, data))
    },

    searchProduct: (getReq, callback) => {
        const search = getReq.query.q || ""

        let sql = `SELECT * FROM product_tb WHERE nameProduct LIKE ?`
        db.query(sql, [`%${search}%`], (err, data) => callback(err, data))
    }
}

module.exports = ProductModel