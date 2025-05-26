const db = require("../libs/database")
const { Block, Blockchain } = require("../libs/blockchain")

const ProductModel = {
    AllProduct: (callback) => {
        let sql = `SELECT * FROM product_tb`

        db.query(sql, (err, data) => callback(err, data))
    },
    
    // Cart
    getProductWithCart: (callback) => {
        let sql = `SELECT c.idCart, u.username, p.imageUrl, p.nameProduct, p.price FROM cart_tb AS c
                    INNER JOIN user_tb AS u ON c.username = u.username
                    INNER JOIN product_tb as p ON c.idProduct = p.idProduct
                `

        db.query(sql, (err, data) => callback(err, data))
    }, 

    deleteProductWithCart: (getReq, callback) => {
        let sql = `DELETE FROM cart_tb WHERE idCart = ?`
        let { idCart } = getReq.params

        db.query(sql, [idCart], (err, data) => callback(err, data))
    },

    postProductCart: (getReq, callback) => {
        const { uid, user, idProduct } = getReq.body

        // const blockchain = new Blockchain()
        // const data = { user, idProduct }
        // const previousHash = blockchain.getLatestBlock().hash
        // const block = new Block(data, previousHash)
        // blockchain.addBlock(block)

        // const idCart = block.getHash()
        
        let sql = `INSERT INTO cart_tb (idCart, username, idProduct) VALUES (?, ?, ?)`
        db.query(sql, [uid, user, idProduct], (err, data) => callback(err, data))
    },

}

module.exports = ProductModel