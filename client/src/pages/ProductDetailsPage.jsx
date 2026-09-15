import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Star,
  Heart,
  ShoppingBag,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Leaf,
  ChevronRight,
  Share2,
  CheckCircle2
} from 'lucide-react';
import ImageGallery from '../components/product/ImageGallery';
import CareSpecsCard from '../components/product/CareSpecsCard';
import ReviewsSection from '../components/product/ReviewsSection';
import ProductCard from '../components/shop/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { api } from '../services/api';

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      window.scrollTo(0, 0);
      try {
        const data = await api.getProduct(slug);
        setProduct(data.product);
        setRelated(data.related || []);
        if (data.product.sizes && data.product.sizes.length > 0) {
          setSelectedSize(data.product.sizes[0]);
        }
      } catch (err) {
        console.error('Failed to load product details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-[#F5F1E7]">
        <div className="flex flex-col items-center gap-3">
          <Leaf className="w-8 h-8 animate-bounce text-[#1F513A]" />
          <span className="text-xs font-serif font-bold text-[#12372A]">
            Loading botanical specimen...
          </span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 bg-[#F5F1E7] text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#12372A]">Plant Not Found</h2>
        <p className="text-xs text-[#526057]">The requested botanical specimen is no longer in our conservatory.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase">
          Back to Shop
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product._id);
  const currentPrice = selectedSize ? selectedSize.price : product.price;
  const originalPrice = selectedSize?.originalPrice || product.originalPrice || currentPrice;

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize?.name || 'Standard', currentPrice);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize?.name || 'Standard', currentPrice);
    navigate('/checkout');
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-[#657A55]">
          <Link to="/" className="hover:text-[#12372A]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-[#12372A]">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/shop?category=${product.categorySlug}`} className="hover:text-[#12372A] capitalize">
            {product.category?.name || product.categorySlug?.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#12372A] font-bold truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Product Main Showcase (Left: Gallery, Right: Details) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6">
            <ImageGallery images={product.images} name={product.name} />
          </div>

          {/* Right Column: Plant Info & Purchase Box */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category & Badge */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-[#1F513A] bg-[#1F513A]/10 px-3 py-1 rounded-full">
                {product.category?.name || 'Botanical Specimen'}
              </span>
              {product.badge && (
                <span className="text-xs font-bold uppercase tracking-wider text-[#C86D51] bg-[#C86D51]/10 px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Title & Botanical Species */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A] leading-tight">
                {product.name}
              </h1>
              {product.botanicalName && (
                <p className="font-serif italic text-sm text-[#657A55] mt-1">
                  {product.botanicalName}
                </p>
              )}
            </div>

            {/* Rating Stars & Reviews Count */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={`w-4 h-4 ${
                      s <= Math.round(product.rating || 4.8) ? 'fill-current' : 'opacity-30'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-bold text-[#18201B]">{product.rating || 4.8}</span>
              <span className="text-xs text-[#526057]">
                ({product.reviewCount || 42} verified reviews)
              </span>
            </div>

            {/* Pricing Section */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
                ₹{currentPrice}
              </span>
              {originalPrice > currentPrice && (
                <>
                  <span className="text-base text-[#526057] line-through font-sans">
                    ₹{originalPrice}
                  </span>
                  <span className="text-xs font-bold text-[#C86D51] bg-[#C86D51]/10 px-2 py-0.5 rounded-full">
                    Save {Math.round(((originalPrice - currentPrice) / originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            {/* Short Editorial Blurb */}
            <p className="text-xs sm:text-sm text-[#526057] leading-relaxed">
              {product.shortDescription || product.description}
            </p>

            {/* Pot / Size Variants Selector */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12372A] block">
                  Select Pot & Planter Size:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize?.name === size.name;
                    return (
                      <button
                        key={size.name}
                        type="button"
                        onClick={() => setSelectedSize(size)}
                        className={`p-3 rounded-2xl border text-left transition-all ${
                          isSelected
                            ? 'border-[#12372A] bg-[#12372A] text-[#F5F1E7] shadow-md font-bold'
                            : 'border-[#12372A]/10 bg-[#FCFBF7] text-[#18201B] hover:border-[#8FAF91]'
                        }`}
                      >
                        <div className="text-xs leading-snug">{size.name}</div>
                        <div className={`text-xs mt-1 ${isSelected ? 'text-[#8FAF91]' : 'text-[#657A55]'}`}>
                          ₹{size.price}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector + Add to Cart + Wishlist */}
            <div className="space-y-3 pt-4 border-t border-[#12372A]/10">
              <div className="flex items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-[#12372A]/20 rounded-2xl bg-white p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-[#F5F1E7] rounded-xl text-[#12372A] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-bold text-[#18201B]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-[#F5F1E7] rounded-xl text-[#12372A] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Garden Cart Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 rounded-2xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-[#8FAF91]" />
                  <span>Add to Garden</span>
                </button>

                {/* Wishlist Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-2xl border transition-all ${
                    isFavorited
                      ? 'bg-[#C86D51] text-white border-[#C86D51]'
                      : 'bg-white border-[#12372A]/15 text-[#12372A] hover:border-[#C86D51] hover:text-[#C86D51]'
                  }`}
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Buy Now Direct Button */}
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-2xl border-2 border-[#12372A] text-[#12372A] hover:bg-[#12372A] hover:text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-colors text-center"
              >
                Instant Buy with 1-Click Checkout →
              </button>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#12372A]/10 text-center text-[11px] text-[#526057]">
              <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#FCFBF7]">
                <Truck className="w-4 h-4 text-[#1F513A]" />
                <span className="font-semibold text-[#12372A]">Safe Shipping</span>
                <span className="text-[10px]">Free over ₹599</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#FCFBF7]">
                <RefreshCw className="w-4 h-4 text-[#1F513A]" />
                <span className="font-semibold text-[#12372A]">7-Day Guarantee</span>
                <span className="text-[10px]">Healthy Arrival</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-xl bg-[#FCFBF7]">
                <ShieldCheck className="w-4 h-4 text-[#1F513A]" />
                <span className="font-semibold text-[#12372A]">Organic Soil</span>
                <span className="text-[10px]">Pre-fertilized</span>
              </div>
            </div>
          </div>
        </div>

        {/* Plant Care Visual Metadata Card */}
        <CareSpecsCard care={product.care} />

        {/* Tabbed In-Depth Sections (Description, Care Guide, Packaging Guarantee, Customer Reviews) */}
        <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-10 border border-[#12372A]/10 space-y-8">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#12372A]/10 overflow-x-auto gap-4 sm:gap-8 pb-4">
            {[
              { id: 'details', label: 'Plant Details & Origins' },
              { id: 'care', label: 'Botanical Care Schedule' },
              { id: 'packaging', label: 'Eco-Armor Delivery' },
              { id: 'reviews', label: `Verified Reviews (${product.reviewCount || 42})` },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs sm:text-sm font-bold uppercase tracking-wider pb-2 relative transition-colors shrink-0 ${
                  activeTab === tab.id
                    ? 'text-[#12372A] border-b-2 border-[#12372A]'
                    : 'text-[#657A55] hover:text-[#12372A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div>
            {activeTab === 'details' && (
              <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-[#526057] leading-relaxed">
                <h3 className="font-serif text-xl font-bold text-[#12372A]">
                  About {product.name}
                </h3>
                <p>{product.description}</p>
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {product.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-[#F5F1E7] text-xs font-medium text-[#12372A]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'care' && (
              <div className="space-y-6 max-w-3xl">
                <h3 className="font-serif text-xl font-bold text-[#12372A]">
                  Horticultural Routine & Maintenance
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#18201B]">
                  <div className="p-4 rounded-2xl bg-[#FAF8F2] space-y-1">
                    <strong className="text-[#12372A] block font-serif text-sm">Light & Position</strong>
                    <p className="text-[#526057]">{product.care?.light || 'Bright indirect sun. Avoid intense midday rays that may scorch tender leaf tips.'}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF8F2] space-y-1">
                    <strong className="text-[#12372A] block font-serif text-sm">Watering Routine</strong>
                    <p className="text-[#526057]">{product.care?.water || 'Allow top 2 inches of soil to dry before soaking thoroughly until water drains.'}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF8F2] space-y-1">
                    <strong className="text-[#12372A] block font-serif text-sm">Feeding & Nutrition</strong>
                    <p className="text-[#526057]">{product.care?.feeding || 'Apply diluted organic liquid seaweed fertilizer once monthly in growing season.'}</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF8F2] space-y-1">
                    <strong className="text-[#12372A] block font-serif text-sm">Repotting Cadence</strong>
                    <p className="text-[#526057]">{product.care?.repotting || 'Repot every 18-24 months into a container 2 inches larger in diameter.'}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'packaging' && (
              <div className="space-y-4 max-w-3xl text-xs sm:text-sm text-[#526057] leading-relaxed">
                <h3 className="font-serif text-xl font-bold text-[#12372A]">
                  GreenyCup Eco-Armor Transit Guarantee
                </h3>
                <p>
                  Live plants require specialized care during transportation. GreenyCup uses custom-designed, corrugated, ventilated boxes with recycled moisture-retention collar locks that keep the root ball secured and foliage buffered from shock.
                </p>
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F513A]" />
                    <span>Zero soil spillage design with biodegradable breathable mesh</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
                    <CheckCircle2 className="w-4 h-4 text-[#1F513A]" />
                    <span>Free replacement guarantee if damaged during transit</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <ReviewsSection
                productId={product._id}
                averageRating={product.rating}
                reviewCount={product.reviewCount}
              />
            )}
          </div>
        </div>

        {/* Related Botanical Recommendations */}
        {related.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-[#12372A]/10">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                Complementary Specimens
              </h2>
              <Link to={`/shop?category=${product.categorySlug}`} className="text-xs font-bold text-[#1F513A] hover:underline">
                View All in Category →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((item) => (
                <ProductCard key={item._id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
