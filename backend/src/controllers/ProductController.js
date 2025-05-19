const product = require("../models/ProductModel")

const ProductController = {
    getAllProduct: (req, res) => {
        product.AllProduct((err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    },

    getProductWithCart:(req, res) => {
        product.getProductWithCart((err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    },

    deleteProductWithCart: (req, res) => {
        product.deleteProductWithCart(req, (err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    },

    postProductCart: (req, res) => {
        product.postProductCart(req, (err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    }
}

module.exports = ProductController