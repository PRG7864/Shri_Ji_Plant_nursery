import express from 'express';
import {
  createOrder,
  getMyOrders,
  getOrderByIdOrNumber,
  getAllOrders,
  updateOrderStatus,
} from '../controllers/orderController.js';
import { protect, optionalAuth, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', optionalAuth, createOrder);
router.get('/my-orders', protect, getMyOrders);
router.get('/:idOrNumber', getOrderByIdOrNumber);

// Admin routes
router.get('/', protect, adminOnly, getAllOrders);
router.put('/:id/status', protect, adminOnly, updateOrderStatus);

export default router;
