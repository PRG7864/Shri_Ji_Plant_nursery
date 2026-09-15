import express from 'express';
import { getProductReviews, createProductReview } from '../controllers/reviewController.js';
import { optionalAuth } from '../middleware/authMiddleware.js';

const router = express.Router({ mergeParams: true });

router.route('/:productId')
  .get(getProductReviews)
  .post(optionalAuth, createProductReview);

export default router;
