const Products = require('../models/products');



//Ping
const ping = (req, res) => {
        res.send("DB Connected!");
};

//Get All Products
const getAll = (req, res) => {
    Products.find()
        .then((data) => res.status(200).json({ msg: "All Products", data, error: false }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

//Get by Product Id
const getId = (req, res) => {
    const {_id} = req.params;
    Products.findById(parseInt(_id))
        .then((data) => res.status(200).json({ msg: "Product by Id", data, error: false }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

// Post new Product
const postProduct = (req, res) => {
    const { _id, name, price, stock, description } = req.body;
    const newProduct = { _id, name, price, stock, description };
    Products.create(newProduct)
        .then((data) => res.status(201).json({ msg: "Product added: ", data, error: false }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};
// Exports
module.exports = {
    ping,
    getAll,
    getId,
    postProduct
};
