import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Heart,
  ShoppingBag,
  User as UserIcon,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Leaf,
  Compass,
  BookOpen,
  HelpCircle,
  ShieldCheck,
  LogOut,
  Package
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const Navbar = ({ onOpenSearch }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const { totalItemsCount, setIsCartOpen } = useCart();
  const { wishlistCount } = useWishlist();
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsUserMenuOpen(false);
  }, [location.pathname]);

  const plantCategories = [
    { name: 'Indoor Plants', slug: 'indoor-plants', desc: 'Lush low & medium light foliage' },
    { name: 'Air Purifying', slug: 'air-purifying', desc: 'NASA certified natural oxygen filters' },
    { name: 'Flowering Plants', slug: 'flowering-plants', desc: 'Vibrant scented blossoms' },
    { name: 'Succulents & Cacti', slug: 'succulents-cacti', desc: 'Drought-hardy architectural gems' },
    { name: 'Artisan Bonsai', slug: 'bonsai', desc: '8-12 year cultivated living art' },
    { name: 'Outdoor Plants', slug: 'outdoor-plants', desc: 'Sun-kissed balcony & garden shrubs' },
  ];

  const spacesList = [
    { name: 'Living Room', icon: '🛋️' },
    { name: 'Bedroom', icon: '🛏️' },
    { name: 'Work Desk / Office', icon: '💻' },
    { name: 'Balcony Garden', icon: '🌿' },
    { name: 'Sun Terrace', icon: '☀️' },
    { name: 'Entrance & Foyer', icon: '🚪' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-sm'
            : 'bg-[#F5F1E7]/90 backdrop-blur-md py-4 border-b border-[#12372A]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Hamburger & Desktop Navigation */}
            <div className="flex items-center gap-8">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-[#12372A] hover:text-[#1F513A] focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#18201B]">
                {/* Plants with Mega Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => navigate('/shop?category=indoor-plants')}
                    className="flex items-center gap-1.5 hover:text-[#1F513A] transition-colors py-2 group"
                  >
                    <span>Plants</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-[#657A55] transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-[680px] -ml-12 mt-2 bg-[#FCFBF7] rounded-2xl shadow-xl border border-[#12372A]/10 p-6 z-50 overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-6">
                          {/* Categories List */}
                          <div className="col-span-7 border-r border-[#12372A]/8 pr-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
                                Botanical Collections
                              </span>
                              <Link
                                to="/shop"
                                className="text-xs text-[#1F513A] font-semibold hover:underline"
                              >
                                View All (40+) →
                              </Link>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                              {plantCategories.map((cat) => (
                                <Link
                                  key={cat.slug}
                                  to={`/shop?category=${cat.slug}`}
                                  className="group p-2.5 rounded-xl hover:bg-[#F5F1E7]/80 transition-all block"
                                >
                                  <div className="font-semibold text-xs text-[#12372A] group-hover:text-[#1F513A] flex items-center gap-1.5">
                                    <Leaf className="w-3 h-3 text-[#8FAF91] group-hover:scale-110 transition-transform" />
                                    {cat.name}
                                  </div>
                                  <div className="text-[11px] text-[#526057] mt-0.5 leading-tight">
                                    {cat.desc}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Shop By Space */}
                          <div className="col-span-5">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#657A55] block mb-4">
                              Shop by Space
                            </span>
                            <div className="space-y-1.5">
                              {spacesList.map((space) => (
                                <Link
                                  key={space.name}
                                  to={`/shop?space=${encodeURIComponent(space.name)}`}
                                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-[#18201B] hover:bg-[#8FAF91]/15 hover:text-[#12372A] transition-colors"
                                >
                                  <span className="flex items-center gap-2">
                                    <span>{space.icon}</span>
                                    <span>{space.name}</span>
                                  </span>
                                  <span className="text-[10px] text-[#8FAF91] font-mono">→</span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Mega Menu Footer Highlight */}
                        <div className="mt-5 pt-4 border-t border-[#12372A]/8 flex items-center justify-between text-xs bg-[#F5F1E7]/50 -mx-6 -mb-6 p-4 px-6">
                          <span className="flex items-center gap-1.5 text-[#12372A] font-medium">
                            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                            Not sure which plant fits your home?
                          </span>
                          <Link
                            to="/quiz"
                            className="bg-[#12372A] text-[#F5F1E7] px-3.5 py-1.5 rounded-full text-xs font-semibold hover:bg-[#1F513A] transition-colors"
                          >
                            Take 60-Sec Plant Quiz →
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/shop?category=seeds"
                  className="hover:text-[#1F513A] transition-colors"
                >
                  Seeds
                </Link>

                <Link
                  to="/shop?category=pots-planters"
                  className="hover:text-[#1F513A] transition-colors"
                >
                  Planters
                </Link>

                <Link
                  to="/quiz"
                  className="hover:text-[#1F513A] transition-colors flex items-center gap-1 text-[#1F513A] font-semibold"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Plant Quiz</span>
                </Link>

                <Link
                  to="/care-journal"
                  className="hover:text-[#1F513A] transition-colors"
                >
                  Care Journal
                </Link>

                <Link
                  to="/about"
                  className="hover:text-[#1F513A] transition-colors text-xs text-[#526057]"
                >
                  About
                </Link>
              </nav>
            </div>

            {/* Center: Brand Typographic Logo */}
            <div className="text-center">
              <Link to="/" className="inline-block group">
                <div className="flex items-center justify-center gap-1.5">
                  <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.18em] text-[#12372A] group-hover:text-[#1F513A] transition-colors uppercase">
                    GREENYCUP
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#8FAF91] mb-1 group-hover:scale-125 transition-transform" />
                </div>
                <div className="text-[10px] tracking-[0.25em] text-[#657A55] uppercase font-sans font-medium -mt-1 hidden sm:block">
                  Bring life home
                </div>
              </Link>
            </div>

            {/* Right: Actions (Search, Wishlist, Cart, Account) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search Trigger */}
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search nursery catalog"
                className="p-2 text-[#18201B] hover:text-[#1F513A] hover:bg-[#8FAF91]/15 rounded-full transition-colors relative"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon with count */}
              <Link
                to="/wishlist"
                aria-label="View Wishlist"
                className="p-2 text-[#18201B] hover:text-[#1F513A] hover:bg-[#8FAF91]/15 rounded-full transition-colors relative"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#C86D51] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse-subtle">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger with count */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label="Open Cart"
                className="p-2 text-[#18201B] hover:text-[#1F513A] hover:bg-[#8FAF91]/15 rounded-full transition-colors relative"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItemsCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#12372A] text-[#F5F1E7] text-[10px] font-bold rounded-full flex items-center justify-center">
                    {totalItemsCount}
                  </span>
                )}
              </button>

              {/* User Account Menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  aria-label="User account"
                  className={`p-2 rounded-full transition-colors ${
                    isAuthenticated
                      ? 'bg-[#12372A] text-[#F5F1E7] hover:bg-[#1F513A]'
                      : 'text-[#18201B] hover:text-[#1F513A] hover:bg-[#8FAF91]/15'
                  }`}
                >
                  <UserIcon className="w-5 h-5" />
                </button>

                {/* Account Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-56 bg-[#FCFBF7] rounded-2xl shadow-xl border border-[#12372A]/10 py-2 z-50"
                    >
                      {isAuthenticated ? (
                        <>
                          <div className="px-4 py-2 border-b border-[#12372A]/8">
                            <div className="font-semibold text-xs text-[#12372A] truncate">
                              {user?.name}
                            </div>
                            <div className="text-[11px] text-[#526057] truncate">
                              {user?.email}
                            </div>
                            {isAdmin && (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-[#8FAF91]/20 text-[#12372A] text-[9px] font-bold uppercase rounded-md">
                                Curator Admin
                              </span>
                            )}
                          </div>

                          <Link
                            to="/account"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#18201B] hover:bg-[#F5F1E7]"
                          >
                            <UserIcon className="w-3.5 h-3.5 text-[#657A55]" />
                            My Profile & Addresses
                          </Link>

                          <Link
                            to="/account?tab=orders"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#18201B] hover:bg-[#F5F1E7]"
                          >
                            <Package className="w-3.5 h-3.5 text-[#657A55]" />
                            My Orders & Tracking
                          </Link>

                          {isAdmin && (
                            <Link
                              to="/admin"
                              onClick={() => setIsUserMenuOpen(false)}
                              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-[#1F513A] bg-[#8FAF91]/10 hover:bg-[#8FAF91]/20"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-[#1F513A]" />
                              Admin Portal
                            </Link>
                          )}

                          <div className="border-t border-[#12372A]/8 mt-1">
                            <button
                              type="button"
                              onClick={() => {
                                logout();
                                setIsUserMenuOpen(false);
                              }}
                              className="w-full flex items-center gap-2 px-4 py-2 text-xs font-medium text-red-600 hover:bg-red-50 text-left"
                            >
                              <LogOut className="w-3.5 h-3.5 text-red-500" />
                              Sign Out
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="p-3 space-y-2">
                          <p className="text-xs text-[#526057] px-1">
                            Sign in to save your botanical wishlist and track orders.
                          </p>
                          <Link
                            to="/login"
                            onClick={() => setIsUserMenuOpen(false)}
                            className="block text-center w-full bg-[#12372A] text-[#F5F1E7] py-2 rounded-xl text-xs font-semibold hover:bg-[#1F513A] transition-colors"
                          >
                            Sign In / Register
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-80 max-w-[85vw] bg-[#FCFBF7] z-50 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#12372A]/10">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="font-serif text-xl font-bold text-[#12372A]">
                  GREENYCUP
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-gray-100 text-[#12372A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-4 text-sm font-medium text-[#18201B]">
                <Link
                  to="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#12372A] font-semibold border-b border-[#12372A]/5"
                >
                  🌿 All Botanical Plants
                </Link>

                <div className="pl-2 space-y-2 text-xs text-[#526057]">
                  {plantCategories.map(cat => (
                    <Link
                      key={cat.slug}
                      to={`/shop?category=${cat.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1 hover:text-[#12372A]"
                    >
                      • {cat.name}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/shop?category=seeds"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#12372A] font-semibold border-b border-[#12372A]/5"
                >
                  🌱 Organic Seeds
                </Link>

                <Link
                  to="/shop?category=pots-planters"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#12372A] font-semibold border-b border-[#12372A]/5"
                >
                  🪴 Artisan Pots & Planters
                </Link>

                <Link
                  to="/quiz"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-2 text-[#1F513A] font-bold border-b border-[#12372A]/5"
                >
                  <Compass className="w-4 h-4" />
                  Take Plant Recommendation Quiz
                </Link>

                <Link
                  to="/care-journal"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#12372A] font-semibold border-b border-[#12372A]/5"
                >
                  📖 Plant Care Journal
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#526057]"
                >
                  About GreenyCup
                </Link>

                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-[#526057]"
                >
                  Plant Doctor & Contact
                </Link>
              </div>
            </div>

            <div className="pt-6 border-t border-[#12372A]/10">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <div className="text-xs text-[#526057]">Signed in as <strong className="text-[#12372A]">{user?.name}</strong></div>
                  <Link
                    to="/account"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-center w-full bg-[#12372A] text-[#F5F1E7] py-2.5 rounded-xl text-xs font-semibold"
                  >
                    My Account
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center w-full bg-[#12372A] text-[#F5F1E7] py-2.5 rounded-xl text-xs font-semibold"
                >
                  Sign In / Register
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
