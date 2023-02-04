import express from 'express';
import productsControllers from '../controllers/Products.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', productsControllers.getAll);
router.get('/:_id', productsControllers.getId);
router.post('/add', productsControllers.postProduct);
router.put('/update/:_id', productsControllers.updateProduct);
router.delete('/delete/:_id', productsControllers.deleteProduct);

export default router;
