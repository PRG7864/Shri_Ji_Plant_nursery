import Review from '../models/Review.js';
import Product from '../models/Product.js';

// @desc    Get reviews for a product
// @route   GET /api/reviews/:productId
export const getProductReviews = async (req, res) => {
  try {
    const { productId } = req.params;
    const reviews = await Review.find({ product: productId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product review
// @route   POST /api/reviews/:productId
export const createProductReview = async (req, res) => {
  try {
    const { productId } = req.params;
    const { rating, title, comment, userName, userLocation } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const review = await Review.create({
      product: productId,
      user: req.user ? req.user._id : null,
      userName: userName || (req.user ? req.user.name : 'Botanical Enthusiast'),
      userLocation: userLocation || 'India',
      rating: Number(rating),
      title,
      comment,
      verifiedBuyer: true
    });

    // Recalculate average rating for product
    const allReviews = await Review.find({ product: productId });
    const avgRating = allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length;
    
    product.rating = Number(avgRating.toFixed(1));
    product.reviewCount = allReviews.length;
    await product.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
