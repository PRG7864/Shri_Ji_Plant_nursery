import express from 'express';
import {
  getRazorpayKey,
  createRazorpayOrder,
  verifyRazorpayPayment
} from '../controllers/paymentController.js';

const router = express.Router();

router.get('/razorpay-key', getRazorpayKey);
router.post('/razorpay/create-order', createRazorpayOrder);
router.post('/razorpay/verify', verifyRazorpayPayment);

export default router;
