import mongoose from 'mongoose';

const careSchema = new mongoose.Schema(
  {
    light: { type: String, default: 'Bright Indirect' },
    water: { type: String, default: 'Every 7-10 days' },
    temperature: { type: String, default: '18°C - 30°C' },
    humidity: { type: String, default: '50% - 70%' },
    petFriendly: { type: Boolean, default: false },
    height: { type: String, default: '30 - 50 cm' },
    difficulty: { type: String, enum: ['Easy', 'Moderate', 'Expert'], default: 'Easy' },
    feeding: { type: String, default: 'Monthly organic liquid fertilizer' },
    repotting: { type: String, default: 'Every 1-2 years during spring' },
  },
  { _id: false }
);

const sizeVariantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // e.g. 'Small (4" Pot)', 'Medium (6" Pot)', 'Large (10" Pot)'
    price: { type: Number, required: true },
    originalPrice: { type: Number },
    inStock: { type: Boolean, default: true }
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    botanicalName: { type: String, trim: true, default: '' },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    shortDescription: { type: String, default: '' },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    categorySlug: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, min: 0 },
    discount: { type: Number, default: 0 },
    images: [{ type: String, required: true }],
    rating: { type: Number, default: 4.8, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    stock: { type: Number, default: 25, min: 0 },
    tags: [{ type: String }],
    spaces: [{ type: String }], // 'Living Room', 'Bedroom', 'Balcony', 'Office', 'Terrace', 'Garden'
    care: { type: careSchema, default: () => ({}) },
    sizes: [sizeVariantSchema],
    featured: { type: Boolean, default: false },
    bestseller: { type: Boolean, default: false },
    newArrival: { type: Boolean, default: false },
    isCombo: { type: Boolean, default: false },
    badge: { type: String, default: '' }, // e.g. 'Air Purifier', 'Rare Find', 'Bestseller', 'Top Rated'
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
