import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight, Sparkles, Leaf } from 'lucide-react';
import { api } from '../../services/api';

const POPULAR_SEARCHES = [
  'Monstera Deliciosa',
  'Snake Plant',
  'Peace Lily',
  'ZZ Plant',
  'Bonsai Tree',
  'Air Purifying',
  'Pet Friendly',
  'Fluted Terracotta Pot'
];

const SearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) {
      setSearchTerm('');
      setResults([]);
      return;
    }

    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Debounced search
  useEffect(() => {
    if (!searchTerm.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await api.getProducts({ search: searchTerm, limit: 6 });
        setResults(data.products || []);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const handleSelectProduct = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onClose();
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#12372A]/80 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 md:p-12 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: -20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-3xl bg-[#FCFBF7] rounded-3xl shadow-2xl border border-[#8FAF91]/30 p-6 sm:p-8 mt-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#657A55] hover:text-[#12372A] hover:bg-[#F5F1E7] rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <div className="text-center mb-6">
              <span className="text-xs font-bold tracking-widest text-[#657A55] uppercase">
                GreenyCup Botanical Index
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A] mt-1">
                What are you growing?
              </h2>
            </div>

            {/* Search Input Box */}
            <form onSubmit={handleSubmit} className="relative mb-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search plants, care requirements, seeds, pots..."
                autoFocus
                className="w-full pl-12 pr-28 py-4 bg-[#F5F1E7] rounded-2xl border border-[#12372A]/10 text-sm sm:text-base font-medium text-[#18201B] placeholder-[#526057]/60 focus:outline-none focus:ring-2 focus:ring-[#1F513A]/20 focus:border-[#1F513A] transition-all"
              />
              <Search className="w-5 h-5 text-[#657A55] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Search</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Popular Search Chips */}
            {!searchTerm && (
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#526057] mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Popular botanical searches:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {POPULAR_SEARCHES.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSearchTerm(tag)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#F5F1E7] hover:bg-[#8FAF91]/20 text-[#12372A] border border-[#12372A]/5 hover:border-[#8FAF91] transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Live Results Preview */}
            {searchTerm && (
              <div className="mt-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10 text-xs text-[#526057] mb-4">
                  <span>{loading ? 'Searching garden...' : `Found ${results.length} botanical specimens`}</span>
                  {results.length > 0 && (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-[#1F513A] font-semibold hover:underline"
                    >
                      View all results →
                    </button>
                  )}
                </div>

                {loading ? (
                  <div className="py-12 text-center text-xs text-[#657A55] flex flex-col items-center gap-2">
                    <Leaf className="w-6 h-6 animate-bounce text-[#8FAF91]" />
                    <span>Searching our greenhouses...</span>
                  </div>
                ) : results.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto pr-1">
                    {results.map((item) => (
                      <div
                        key={item._id}
                        onClick={() => handleSelectProduct(item.slug)}
                        className="flex items-center gap-3 p-2.5 rounded-2xl bg-[#F5F1E7]/70 hover:bg-[#F5F1E7] border border-[#12372A]/5 hover:border-[#8FAF91] cursor-pointer transition-all group"
                      >
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform"
                        />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-serif font-bold text-xs text-[#12372A] group-hover:text-[#1F513A] truncate">
                            {item.name}
                          </h4>
                          {item.botanicalName && (
                            <p className="text-[10px] italic text-[#657A55] truncate">
                              {item.botanicalName}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs font-bold text-[#18201B]">
                              ₹{item.price}
                            </span>
                            {item.care?.light && (
                              <span className="text-[9px] bg-[#8FAF91]/20 text-[#12372A] px-1.5 py-0.5 rounded font-medium truncate max-w-[100px]">
                                {item.care.light}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="py-10 text-center text-xs text-[#526057]">
                    No plants matched &quot;{searchTerm}&quot;. Try searching for &quot;Monstera&quot;, &quot;Seeds&quot;, or &quot;Low Light&quot;.
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
