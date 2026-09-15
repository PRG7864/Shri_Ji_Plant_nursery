import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName: { type: String, required: true },
    userLocation: { type: String, default: 'India' },
    rating: { type: Number, required: true, min: 1, max: 5 },
    title: { type: String, required: true },
    comment: { type: String, required: true },
    verifiedBuyer: { type: Boolean, default: true },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model('Review', reviewSchema);
