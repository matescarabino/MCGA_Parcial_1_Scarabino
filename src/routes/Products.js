import express from 'express';
import productsControllers from '../controllers/Products.js';
import checkAuth from '../middlewares/authMiddleware.js';

import { ADMIN } from '../constants/roles.js';

const router = express.Router();

router.get('/', checkAuth([ADMIN]), productsControllers.getAll);
router.get('/:_id', checkAuth([ADMIN]), productsControllers.getId);
router.post('/add', checkAuth([ADMIN]), productsControllers.postProduct);
router.put('/update/:_id', checkAuth([ADMIN]), productsControllers.updateProduct);
router.delete('/delete/:_id', checkAuth([ADMIN]), productsControllers.deleteProduct);

export default router;
