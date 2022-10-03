const Products = require('../models/products');

//Ping
const ping = (req, res) => {
        res.send("OK. DB Connected!");
};

//Get All
const getAll = (req, res) => {
    Products.find()
        .then((data) => res.status(200).json({ msg: "All Products", data, error: false }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

//Get
const getId = (req, res) => {
    const {_id} = req.params;
    Products.findById(parseInt(_id))
        .then((data) => res.status(200).json({ msg: "Product by Id", data, error: false }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

// Post
const postProduct = (req, res) => {
    const { _id, name, price, stock, description } = req.body;
    const newProduct = { _id, name, price, stock, description };
    Products.create(newProduct)
        .then((data) => res.status(201).json({ msg: "Product added: ", data, error: false }))
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

// Update
const updateProduct = (req, res) => {
    const { _id } = req.params;
    Products.findByIdAndUpdate(parseInt(_id), req.body, { new: true })
        .then((data) => {
            if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${_id}`, data: {}, error: true });
            return res.status(202).json({ msg: "Product updated", data, error: false });
        })
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

// Delete
const deleteProduct = (req, res) => {
    const { _id } = req.params;
    Products.findByIdAndUpdate(parseInt(_id), {isDeleted: true})
        .then((data) => {
            if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}`, data: {}, error: true });
            return res.status(202).json({ msg: "Product deleted", data, error: false });
        })
        .catch((err) => res.status(500).json({ msg: `Error: ${err}`, data: {}, error: true }));
};

// Exports
module.exports = {
    ping,
    getAll,
    getId,
    postProduct,
    updateProduct,
    deleteProduct
};
