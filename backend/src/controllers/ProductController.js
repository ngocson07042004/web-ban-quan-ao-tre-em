const product = require("../models/ProductModel")

const ProductController = {
    getAllProduct: (req, res) => {
        product.AllProduct(req, (err, data) => {
            if(err) return res.json("Error")
            return res.json(data)
        })
    }
}

module.exports = ProductController