import express from 'express';
import productsControllers from '../controllers/Products.js';
import checkAuth from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', checkAuth(), productsControllers.getAll);
router.get('/:_id', productsControllers.getId);
router.post('/add', checkAuth(), productsControllers.postProduct);
router.put('/update/:_id', checkAuth(), productsControllers.updateProduct);
router.delete('/delete/:_id', checkAuth(), productsControllers.deleteProduct);

export default router;
