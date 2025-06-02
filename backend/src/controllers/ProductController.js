const product = require("../models/ProductModel")

const ProductController = {
    getAllProduct: (req, res) => {
        product.AllProduct((err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    getProductWithCart: (req, res) => {
        product.getProductWithCart((err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    checkCart: (req, res) => {
        product.checkCart(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json({ data, exists: data.length > 0 })
        })
    },

    deleteProductWithCart: (req, res) => {
        product.deleteProductWithCart(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    postProductCart: (req, res) => {
        product.postProductCart(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    updateProductCart: (req, res) => {
        product.updateProductCart(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    updateAddProductCart: (req, res) => {
        product.updateAddProductCart(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    searchProduct: (req, res) => {
        product.searchProduct(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    }
}

module.exports = ProductController