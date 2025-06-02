const product = require("../models/CheckProductModel")

const CheckProductController = {
    getCheckOut: (req, res) => {
        product.getCheckOut((err, data) => {
           if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    postOrder: (req, res) => {
        product.postOrder(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    updateSize: (req, res) => {
        product.updateSize(req, (err, data) => {
            if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    },

    orderSubmit: (req, res) => {
        product.orderSubmit(req, (err, data) => {
             if(err) {
                console.log(err)
                return res.json("Error")
            }
            return res.json(data)
        })
    }
}

module.exports = CheckProductController