import Product from '../models/Product.js';
import Category from '../models/Category.js';

// @desc    Get all products with filters, search, and sorting
// @route   GET /api/products
export const getProducts = async (req, res) => {
  try {
    const {
      search,
      category,
      light,
      petFriendly,
      difficulty,
      space,
      minPrice,
      maxPrice,
      inStock,
      sort,
      featured,
      bestseller,
      newArrival,
      isCombo,
      page = 1,
      limit = 100
    } = req.query;

    const query = {};

    // Search keyword in name, botanical name, description, tags
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { botanicalName: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    // Category filter
    if (category && category !== 'all') {
      const catList = category.split(',');
      query.categorySlug = { $in: catList };
    }

    // Light requirement
    if (light && light !== 'all') {
      query['care.light'] = { $regex: light, $options: 'i' };
    }

    // Pet friendly filter
    if (petFriendly === 'true') {
      query['care.petFriendly'] = true;
    }

    // Difficulty
    if (difficulty && difficulty !== 'all') {
      query['care.difficulty'] = difficulty;
    }

    // Space / Environment
    if (space && space !== 'all') {
      query.spaces = { $in: [new RegExp(space, 'i')] };
    }

    // Price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Stock
    if (inStock === 'true') {
      query.stock = { $gt: 0 };
    }

    // Badges / Flags
    if (featured === 'true') query.featured = true;
    if (bestseller === 'true') query.bestseller = true;
    if (newArrival === 'true') query.newArrival = true;
    if (isCombo === 'true') query.isCombo = true;

    // Sorting
    let sortOption = { createdAt: -1 };
    if (sort === 'price-asc') sortOption = { price: 1 };
    else if (sort === 'price-desc') sortOption = { price: -1 };
    else if (sort === 'rating') sortOption = { rating: -1, reviewCount: -1 };
    else if (sort === 'newest') sortOption = { createdAt: -1 };
    else if (sort === 'bestseller') sortOption = { bestseller: -1, rating: -1 };
    else if (sort === 'featured') sortOption = { featured: -1, rating: -1 };

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const total = await Product.countDocuments(query);
    const products = await Product.find(query)
      .populate('category', 'name slug image')
      .sort(sortOption)
      .skip(skip)
      .limit(limitNum);

    res.json({
      products,
      page: pageNum,
      pages: Math.ceil(total / limitNum) || 1,
      total
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get product by slug or id
// @route   GET /api/products/:slugOrId
export const getProductBySlugOrId = async (req, res) => {
  try {
    const { slugOrId } = req.params;
    let product;

    if (slugOrId.match(/^[0-9a-fA-F]{24}$/)) {
      product = await Product.findById(slugOrId).populate('category', 'name slug image');
    }

    if (!product) {
      product = await Product.findOne({ slug: slugOrId }).populate('category', 'name slug image');
    }

    if (!product) {
      return res.status(404).json({ message: 'Botanical product not found' });
    }

    // Get related products in same category
    const related = await Product.find({
      category: product.category._id,
      _id: { $ne: product._id }
    }).limit(4);

    res.json({ product, related });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a product (Admin)
// @route   POST /api/products
export const createProduct = async (req, res) => {
  try {
    const { name, categorySlug } = req.body;
    const category = await Category.findOne({ slug: categorySlug });
    if (!category) {
      return res.status(400).json({ message: 'Invalid category slug' });
    }

    const slug = req.body.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    const product = new Product({
      ...req.body,
      slug,
      category: category._id,
      categorySlug: category.slug
    });

    const createdProduct = await product.save();
    
    // Update category count
    category.itemCount += 1;
    await category.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a product (Admin)
// @route   PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (req.body.categorySlug && req.body.categorySlug !== product.categorySlug) {
      const category = await Category.findOne({ slug: req.body.categorySlug });
      if (category) {
        product.category = category._id;
        product.categorySlug = category.slug;
      }
    }

    Object.assign(product, req.body);
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a product (Admin)
// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();
    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
