const express = require('express');
const router = express.Router();
const {ping, getAll, getId, postProduct} = require('../controllers/Products.js');

//Ping DB
router.get('/',ping);

//Get All Products
router.get('/products',getAll);

//Get by Product Id
router.get('/product/:_id',getId);

//Post new Product
router.post('/product/add',postProduct);

module.exports=router;