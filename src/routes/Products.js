import express from 'express';
import productsControllers from '../controllers/Products.js';

const router = express.Router();

//Get All Products
router.get('/products', productsControllers.getAll);

//Get by Product Id
router.get('/product/:_id', productsControllers.getId);

//Post new Product
router.post('/product/add', productsControllers.postProduct);

//Update Product
router.put('/product/update/:_id', productsControllers.updateProduct);

//Delete Product
router.delete('/product/delete/:_id', productsControllers.deleteProduct);

export default router;
