import React from 'react';
import { Filter, RotateCcw, Check, Sparkles, Sun, Heart, Layers } from 'lucide-react';

const CATEGORIES = [
  { slug: 'all', name: 'All Botanicals' },
  { slug: 'indoor-plants', name: 'Indoor Plants' },
  { slug: 'air-purifying', name: 'NASA Air Purifiers' },
  { slug: 'flowering-plants', name: 'Flowering Plants' },
  { slug: 'succulents-cacti', name: 'Succulents & Cacti' },
  { slug: 'bonsai', name: 'Artisan Bonsai' },
  { slug: 'outdoor-plants', name: 'Outdoor Plants' },
  { slug: 'seeds', name: 'Organic Seeds' },
  { slug: 'pots-planters', name: 'Pots & Planters' },
  { slug: 'soil-fertilizers', name: 'Soil & Bio-Fertilizers' },
  { slug: 'garden-tools', name: 'Garden Tools' },
  { slug: 'plant-combos', name: 'Curated Combos' },
];

const LIGHT_OPTIONS = [
  { value: 'all', label: 'All Light Levels' },
  { value: 'Indirect', label: 'Bright Indirect Light' },
  { value: 'Low', label: 'Low / Shade Tolerant' },
  { value: 'Direct', label: 'Direct Sunlight' },
];

const FilterSidebar = ({ filters, setFilters, onReset }) => {
  return (
    <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 space-y-7 sticky top-28 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#12372A]/10">
        <div className="flex items-center gap-2 text-[#12372A] font-serif font-bold text-lg">
          <Filter className="w-4 h-4 text-[#1F513A]" />
          <span>Filters</span>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="text-xs font-semibold text-[#657A55] hover:text-[#12372A] flex items-center gap-1 transition-colors"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Botanical Categories */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
          Category
        </h4>
        <div className="space-y-1 max-h-56 overflow-y-auto pr-1">
          {CATEGORIES.map((cat) => {
            const isSelected = filters.category === cat.slug || (!filters.category && cat.slug === 'all');
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setFilters((prev) => ({ ...prev, category: cat.slug }))}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all text-left ${
                  isSelected
                    ? 'bg-[#12372A] text-[#F5F1E7] font-bold shadow-sm'
                    : 'text-[#18201B] hover:bg-[#F5F1E7]'
                }`}
              >
                <span>{cat.name}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#8FAF91]" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sunlight Requirement */}
      <div className="space-y-2.5 pt-4 border-t border-[#12372A]/10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#657A55] flex items-center gap-1.5">
          <Sun className="w-3.5 h-3.5 text-[#A47752]" />
          <span>Sunlight</span>
        </h4>
        <div className="space-y-1">
          {LIGHT_OPTIONS.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2.5 text-xs text-[#18201B] cursor-pointer hover:text-[#1F513A] py-1"
            >
              <input
                type="radio"
                name="light"
                value={opt.value}
                checked={filters.light === opt.value || (!filters.light && opt.value === 'all')}
                onChange={() => setFilters((prev) => ({ ...prev, light: opt.value }))}
                className="accent-[#12372A] w-3.5 h-3.5"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Pet-Friendly & In-Stock Toggles */}
      <div className="space-y-3 pt-4 border-t border-[#12372A]/10">
        <h4 className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
          Preferences
        </h4>

        <label className="flex items-center justify-between p-3 rounded-2xl bg-[#F5F1E7]/70 border border-[#12372A]/5 cursor-pointer hover:border-[#8FAF91] transition-all">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#C86D51]" />
            <span className="text-xs font-bold text-[#12372A]">Pet-Friendly Only</span>
          </div>
          <input
            type="checkbox"
            checked={filters.petFriendly === 'true'}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                petFriendly: e.target.checked ? 'true' : ''
              }))
            }
            className="accent-[#1F513A] w-4 h-4 rounded cursor-pointer"
          />
        </label>

        <label className="flex items-center justify-between p-3 rounded-2xl bg-[#F5F1E7]/70 border border-[#12372A]/5 cursor-pointer hover:border-[#8FAF91] transition-all">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#1F513A]" />
            <span className="text-xs font-bold text-[#12372A]">In Stock Only</span>
          </div>
          <input
            type="checkbox"
            checked={filters.inStock === 'true'}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                inStock: e.target.checked ? 'true' : ''
              }))
            }
            className="accent-[#1F513A] w-4 h-4 rounded cursor-pointer"
          />
        </label>
      </div>

      {/* Max Price Slider */}
      <div className="space-y-3 pt-4 border-t border-[#12372A]/10">
        <div className="flex items-center justify-between text-xs font-bold text-[#12372A]">
          <span className="uppercase tracking-widest text-[#657A55]">Max Price</span>
          <span>₹{filters.maxPrice || 3000}</span>
        </div>
        <input
          type="range"
          min="200"
          max="3000"
          step="100"
          value={filters.maxPrice || 3000}
          onChange={(e) => setFilters((prev) => ({ ...prev, maxPrice: e.target.value }))}
          className="w-full accent-[#12372A] cursor-pointer"
        />
        <div className="flex justify-between text-[10px] text-[#657A55]">
          <span>₹200</span>
          <span>₹3,000+</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
