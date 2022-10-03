const express = require('express');
const router = express.Router();
const {ping, getAll, getId, postProduct, updateProduct, deleteProduct} = require('../controllers/Products.js');

//Ping DB
router.get('/',ping);

//Get All Products
router.get('/products',getAll);

//Get by Product Id
router.get('/product/:_id',getId);

//Post new Product
router.post('/product/add',postProduct);

//Update Product
router.put('/product/update/:_id',updateProduct);

//Delete Product
router.delete('/product/delete/:_id',deleteProduct);

module.exports=router;