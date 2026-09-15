import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { connectDB, closeDB } from '../config/db.js';
import Category from '../models/Category.js';
import Product from '../models/Product.js';
import User from '../models/User.js';
import Order from '../models/Order.js';
import Review from '../models/Review.js';
import { categoriesData, productsData, reviewsSeedData } from './seedData.js';

dotenv.config();

export const seedDatabase = async () => {
  try {
    console.log('🌱 Starting Verdora Database Seeding...');
    
    // Clear existing collections
    await Category.deleteMany({});
    await Product.deleteMany({});
    await User.deleteMany({});
    await Order.deleteMany({});
    await Review.deleteMany({});

    // Seed Demo Users
    const adminUser = await User.create({
      name: 'Verdora Curator (Admin)',
      email: 'admin@verdora.com',
      password: 'admin123',
      phone: '+91 98765 43210',
      role: 'admin',
      addresses: [{
        fullName: 'Verdora Botanical HQ',
        phone: '+91 98765 43210',
        addressLine1: '42 Greenhouse Boulevard, Indiranagar',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560038',
        isDefault: true
      }]
    });

    const customerUser = await User.create({
      name: 'Aarav Mehta',
      email: 'customer@verdora.com',
      password: 'customer123',
      phone: '+91 98111 22334',
      role: 'customer',
      addresses: [{
        fullName: 'Aarav Mehta',
        phone: '+91 98111 22334',
        addressLine1: 'Flat 402, Lotus Greens, Bandra West',
        addressLine2: 'Near Jogger’s Park',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400050',
        isDefault: true
      }]
    });

    console.log('👥 Demo Users Created: admin@verdora.com / customer@verdora.com');

    // Seed Categories
    const createdCategories = await Category.insertMany(categoriesData);
    const categoryMap = {};
    createdCategories.forEach(cat => {
      categoryMap[cat.slug] = cat._id;
    });

    console.log(`📁 Seeded ${createdCategories.length} Categories`);

    // Prepare Products with correct category ObjectId refs
    const preparedProducts = productsData.map(p => {
      const categoryId = categoryMap[p.categorySlug] || createdCategories[0]._id;
      return {
        ...p,
        category: categoryId
      };
    });

    const createdProducts = await Product.insertMany(preparedProducts);
    console.log(`🌿 Seeded ${createdProducts.length} Botanical Products`);

    // Update Category itemCount
    for (const cat of createdCategories) {
      const count = await Product.countDocuments({ category: cat._id });
      cat.itemCount = count;
      await cat.save();
    }

    // Seed Sample Reviews on first 4 products
    for (let i = 0; i < Math.min(4, createdProducts.length); i++) {
      const reviewInfo = reviewsSeedData[i % reviewsSeedData.length];
      await Review.create({
        product: createdProducts[i]._id,
        user: customerUser._id,
        userName: reviewInfo.userName,
        userLocation: reviewInfo.userLocation,
        rating: reviewInfo.rating,
        title: reviewInfo.title,
        comment: reviewInfo.comment,
        verifiedBuyer: reviewInfo.verifiedBuyer
      });
    }

    // Seed a Demo Order for Aarav Mehta
    const sampleProduct1 = createdProducts[0];
    const sampleProduct2 = createdProducts[2];
    await Order.create({
      orderNumber: 'VD-10293',
      user: customerUser._id,
      items: [
        {
          product: sampleProduct1._id,
          name: sampleProduct1.name,
          slug: sampleProduct1.slug,
          image: sampleProduct1.images[0],
          price: sampleProduct1.price,
          quantity: 1,
          size: 'Medium (6" Nursery Pot)'
        },
        {
          product: sampleProduct2._id,
          name: sampleProduct2.name,
          slug: sampleProduct2.slug,
          image: sampleProduct2.images[0],
          price: sampleProduct2.price,
          quantity: 2,
          size: 'Standard (6" Pot)'
        }
      ],
      shippingAddress: {
        ...customerUser.addresses[0].toObject(),
        email: customerUser.email
      },
      paymentMethod: 'UPI',
      paymentStatus: 'Completed',
      paymentDetails: {
        transactionId: 'UPI-VD-98716298371'
      },
      subtotal: sampleProduct1.price + (sampleProduct2.price * 2),
      shippingFee: 0,
      discountAmount: 100,
      couponCode: 'VERDORA100',
      total: sampleProduct1.price + (sampleProduct2.price * 2) - 100,
      orderStatus: 'Shipped',
      trackingTimeline: [
        { status: 'Order Placed', message: 'Order received and confirmed by Verdora Nursery', timestamp: new Date(Date.now() - 2 * 86400000) },
        { status: 'Packed', message: 'Specimens carefully inspected & secured in Eco-Armor packaging', timestamp: new Date(Date.now() - 1 * 86400000) },
        { status: 'Shipped', message: 'Dispatched via Verdora Green Express (Tracking #VD-EX-99182)', timestamp: new Date() }
      ],
      estimatedDelivery: new Date(Date.now() + 2 * 86400000)
    });

    console.log('📦 Sample Demo Order Created (VD-10293)');
    console.log('✨ Verdora Seeding Completed Successfully!');
    return true;
  } catch (error) {
    console.error('❌ Error in Database Seeding:', error);
    throw error;
  }
};

// If run directly via node seed/seedRunner.js
if (process.argv[1]?.endsWith('seedRunner.js')) {
  (async () => {
    await connectDB();
    await seedDatabase();
    await closeDB();
    process.exit(0);
  })();
}
