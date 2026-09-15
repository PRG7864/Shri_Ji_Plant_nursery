import Order from '../models/Order.js';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Category from '../models/Category.js';

// @desc    Get Admin Dashboard Stats
// @route   GET /api/admin/stats
export const getAdminStats = async (req, res) => {
  try {
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});
    const totalCustomers = await User.countDocuments({ role: 'customer' });
    
    // Total Revenue calculation
    const completedOrders = await Order.find({ paymentStatus: 'Completed' });
    const totalRevenue = completedOrders.reduce((acc, order) => acc + (order.total || 0), 0);

    // Low stock products (< 15 items in stock)
    const lowStockProducts = await Product.find({ stock: { $lte: 20 } })
      .select('name slug stock price images categorySlug')
      .limit(8);

    // Recent orders
    const recentOrders = await Order.find({})
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(6);

    // Orders status distribution
    const statusCounts = await Order.aggregate([
      { $group: { _id: '$orderStatus', count: { $sum: 1 } } }
    ]);

    // Category breakdown
    const categories = await Category.find({}).select('name slug itemCount');

    res.json({
      totalRevenue,
      totalOrders,
      totalProducts,
      totalCustomers,
      lowStockProducts,
      recentOrders,
      statusCounts,
      categories
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
