import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Filter,
  SlidersHorizontal,
  Search,
  X,
  Sparkles,
  ArrowUpDown,
  Leaf
} from 'lucide-react';
import ProductCard from '../components/shop/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import { api } from '../services/api';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter state synced with URL params
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    search: searchParams.get('search') || '',
    light: searchParams.get('light') || 'all',
    petFriendly: searchParams.get('petFriendly') || '',
    inStock: searchParams.get('inStock') || '',
    space: searchParams.get('space') || 'all',
    sort: searchParams.get('sort') || 'featured',
    maxPrice: searchParams.get('maxPrice') || '',
  });

  // Sync state if URL query params change
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      category: searchParams.get('category') || 'all',
      search: searchParams.get('search') || '',
      space: searchParams.get('space') || 'all',
      sort: searchParams.get('sort') || 'featured',
    }));
  }, [searchParams]);

  // Fetch products
  useEffect(() => {
    const fetchCatalog = async () => {
      setLoading(true);
      try {
        const queryParams = {};
        if (filters.category && filters.category !== 'all') queryParams.category = filters.category;
        if (filters.search) queryParams.search = filters.search;
        if (filters.light && filters.light !== 'all') queryParams.light = filters.light;
        if (filters.petFriendly) queryParams.petFriendly = filters.petFriendly;
        if (filters.inStock) queryParams.inStock = filters.inStock;
        if (filters.space && filters.space !== 'all') queryParams.space = filters.space;
        if (filters.sort) queryParams.sort = filters.sort;
        if (filters.maxPrice) queryParams.maxPrice = filters.maxPrice;

        const data = await api.getProducts(queryParams);
        setProducts(data.products || []);
        setTotalCount(data.total || 0);
      } catch (err) {
        console.error('Failed to load shop products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, [filters]);

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      search: '',
      light: 'all',
      petFriendly: '',
      inStock: '',
      space: 'all',
      sort: 'featured',
      maxPrice: '',
    });
    setSearchParams({});
  };

  const removeFilterChip = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: key === 'category' || key === 'light' || key === 'space' ? 'all' : ''
    }));
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="space-y-2 border-b border-[#12372A]/10 pb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#657A55]">
            <Leaf className="w-3.5 h-3.5 text-[#1F513A]" />
            <span>GreenyCup Botanical Conservatory</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A]">
            Botanical Catalog
          </h1>
          <p className="text-xs sm:text-sm text-[#526057] max-w-xl">
            Explore {totalCount}+ living specimens, organic seeds, breathable pots, and essential botanical care tools.
          </p>
        </div>

        {/* Top Controls Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FCFBF7] p-4 rounded-2xl border border-[#12372A]/10 shadow-sm">
          {/* Mobile Filter Button */}
          <button
            type="button"
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#12372A] text-[#F5F1E7] text-xs font-bold"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filter Plants</span>
          </button>

          {/* Search in Catalog */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              placeholder="Search by plant name, species, space..."
              className="w-full pl-10 pr-8 py-2 rounded-xl bg-[#F5F1E7] border border-[#12372A]/10 text-xs text-[#18201B] placeholder-[#526057]/70 focus:outline-none focus:border-[#1F513A]"
            />
            {filters.search && (
              <button
                type="button"
                onClick={() => setFilters((prev) => ({ ...prev, search: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#657A55] hover:text-[#12372A]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <span className="text-xs text-[#657A55] font-semibold flex items-center gap-1">
              <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
            </span>
            <select
              value={filters.sort}
              onChange={(e) => setFilters((prev) => ({ ...prev, sort: e.target.value }))}
              className="px-3 py-2 rounded-xl bg-[#F5F1E7] border border-[#12372A]/10 text-xs font-bold text-[#12372A] focus:outline-none"
            >
              <option value="featured">Featured Curations</option>
              <option value="bestseller">Bestsellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">Newest Additions</option>
            </select>
          </div>
        </div>

        {/* Active Filter Chips */}
        {(filters.category !== 'all' || filters.light !== 'all' || filters.petFriendly || filters.inStock || filters.search || filters.space !== 'all') && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-[#657A55] font-semibold">Active filters:</span>
            {filters.category !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A] text-[#F5F1E7] text-[11px] font-medium">
                <span>Category: {filters.category}</span>
                <button type="button" onClick={() => removeFilterChip('category')}>✕</button>
              </span>
            )}
            {filters.search && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A] text-[#F5F1E7] text-[11px] font-medium">
                <span>&quot;{filters.search}&quot;</span>
                <button type="button" onClick={() => removeFilterChip('search')}>✕</button>
              </span>
            )}
            {filters.light !== 'all' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12372A] text-[#F5F1E7] text-[11px] font-medium">
                <span>Light: {filters.light}</span>
                <button type="button" onClick={() => removeFilterChip('light')}>✕</button>
              </span>
            )}
            {filters.petFriendly && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F513A] text-[#F5F1E7] text-[11px] font-medium">
                <span>🐾 Pet-Friendly</span>
                <button type="button" onClick={() => removeFilterChip('petFriendly')}>✕</button>
              </span>
            )}
            {filters.inStock && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F513A] text-[#F5F1E7] text-[11px] font-medium">
                <span>In Stock Only</span>
                <button type="button" onClick={() => removeFilterChip('inStock')}>✕</button>
              </span>
            )}
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-red-600 font-bold hover:underline ml-2"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Main Grid + Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              onReset={handleResetFilters}
            />
          </div>

          {/* Product Grid Area */}
          <div className="lg:col-span-9">
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div key={n} className="aspect-[4/5] bg-[#EADBCC]/30 rounded-3xl animate-pulse" />
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-[#FCFBF7] rounded-3xl p-12 text-center border border-[#12372A]/10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#8FAF91]/20 flex items-center justify-center mx-auto text-[#1F513A]">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#12372A]">
                  No botanical specimens found
                </h3>
                <p className="text-xs text-[#526057] max-w-sm mx-auto">
                  Try adjusting your filter settings or searching for a different plant species.
                </p>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 z-50 bg-[#12372A]/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#FCFBF7] p-6 overflow-y-auto lg:hidden shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#12372A]/10 mb-4">
                  <h3 className="font-serif font-bold text-lg text-[#12372A]">Filters</h3>
                  <button
                    type="button"
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1 text-[#657A55]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <FilterSidebar
                  filters={filters}
                  setFilters={setFilters}
                  onReset={handleResetFilters}
                />
              </div>

              <div className="pt-4 mt-6 border-t border-[#12372A]/10">
                <button
                  type="button"
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-3 rounded-xl bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider"
                >
                  Apply Filters ({totalCount} Plants)
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShopPage;
