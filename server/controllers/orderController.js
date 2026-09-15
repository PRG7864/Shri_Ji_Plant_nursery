import Order from '../models/Order.js';
import Product from '../models/Product.js';

// @desc    Create new order
// @route   POST /api/orders
export const createOrder = async (req, res) => {
  try {
    const {
      items,
      shippingAddress,
      paymentMethod,
      couponCode,
      discountAmount = 0
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: 'Cart items cannot be empty' });
    }

    if (!shippingAddress || !shippingAddress.fullName || !shippingAddress.addressLine1 || !shippingAddress.pincode) {
      return res.status(400).json({ message: 'Complete shipping address is required' });
    }

    // Verify items and calculate subtotal
    let subtotal = 0;
    const validatedItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId || item.product);
      if (!product) {
        return res.status(404).json({ message: `Product not found for ID ${item.productId || item.product}` });
      }

      const itemPrice = item.price || product.price;
      subtotal += itemPrice * item.quantity;

      validatedItems.push({
        product: product._id,
        name: product.name,
        slug: product.slug,
        image: product.images[0],
        price: itemPrice,
        quantity: item.quantity,
        size: item.size || 'Standard'
      });

      // Update product stock
      product.stock = Math.max(0, product.stock - item.quantity);
      await product.save();
    }

    // Free shipping threshold: orders >= 599 get free shipping, else 99
    const shippingFee = subtotal >= 599 ? 0 : 99;
    const total = Math.max(0, subtotal + shippingFee - discountAmount);

    // Generate unique Verdora Order Number
    const orderNumber = `VD-${Math.floor(10000 + Math.random() * 90000)}`;

    const order = new Order({
      orderNumber,
      user: req.user ? req.user._id : null,
      guestEmail: shippingAddress.email,
      items: validatedItems,
      shippingAddress,
      paymentMethod: paymentMethod || 'UPI',
      paymentStatus: paymentMethod === 'COD' ? 'Pending' : 'Completed',
      paymentDetails: {
        transactionId: paymentMethod === 'COD' ? 'COD-PAY' : `TXN-VD-${Date.now().toString().slice(-8)}`,
        paymentDate: new Date()
      },
      subtotal,
      shippingFee,
      discountAmount,
      couponCode: couponCode || '',
      total,
      orderStatus: 'Processing',
      trackingTimeline: [
        {
          status: 'Order Placed',
          message: 'Order received and being prepared by Verdora Nursery specialists.',
          timestamp: new Date()
        }
      ],
      estimatedDelivery: new Date(Date.now() + 4 * 86400000) // 4 days delivery
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get logged in user orders
// @route   GET /api/orders/my-orders
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get order by ID or Order Number
// @route   GET /api/orders/:idOrNumber
export const getOrderByIdOrNumber = async (req, res) => {
  try {
    const { idOrNumber } = req.params;
    let order;

    if (idOrNumber.match(/^[0-9a-fA-F]{24}$/)) {
      order = await Order.findById(idOrNumber).populate('user', 'name email');
    }

    if (!order) {
      order = await Order.findOne({ orderNumber: idOrNumber.toUpperCase() }).populate('user', 'name email');
    }

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all orders (Admin)
// @route   GET /api/orders
export const getAllOrders = async (req, res) => {
  try {
    const { status, limit = 50 } = req.query;
    const query = {};
    if (status && status !== 'all') {
      query.orderStatus = status;
    }

    const orders = await Order.find(query)
      .populate('user', 'name email')
      .sort({ createdAt: -1 })
      .limit(Number(limit));

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update order status (Admin)
// @route   PUT /api/orders/:id/status
export const updateOrderStatus = async (req, res) => {
  try {
    const { status, note } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.orderStatus = status;
    if (status === 'Delivered') {
      order.paymentStatus = 'Completed';
    }

    order.trackingTimeline.push({
      status,
      message: note || `Order status updated to ${status}`,
      timestamp: new Date()
    });

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
