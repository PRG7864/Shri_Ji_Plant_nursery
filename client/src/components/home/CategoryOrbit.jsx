import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Sun, Wind, Flower2, TreePine, Sprout, Container } from 'lucide-react';

const orbitCategories = [
  {
    id: 'indoor-plants',
    name: 'Indoor Plants',
    tagline: 'Lush low & indirect light tropicals',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1000&q=80',
    count: '12 Varieties',
    icon: Leaf,
    color: '#1F513A'
  },
  {
    id: 'air-purifying',
    name: 'Air Purifying',
    tagline: 'NASA-certified bedroom filters',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1000&q=80',
    count: '8 Varieties',
    icon: Wind,
    color: '#3D8C67'
  },
  {
    id: 'flowering-plants',
    name: 'Flowering Plants',
    tagline: 'Vibrant blooms & fragrant blooms',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=1000&q=80',
    count: '5 Varieties',
    icon: Flower2,
    color: '#C86D51'
  },
  {
    id: 'succulents-cacti',
    name: 'Succulents & Cacti',
    tagline: 'Architectural drought-tolerant gems',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1000&q=80',
    count: '6 Varieties',
    icon: Sparkles,
    color: '#A47752'
  },
  {
    id: 'bonsai',
    name: 'Artisan Bonsai',
    tagline: '8-12 year cultivated Zen living art',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=1000&q=80',
    count: '4 Varieties',
    icon: TreePine,
    color: '#12372A'
  },
  {
    id: 'outdoor-plants',
    name: 'Outdoor Plants',
    tagline: 'Sun-kissed balcony shrubs',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1000&q=80',
    count: '6 Varieties',
    icon: Sun,
    color: '#657A55'
  },
  {
    id: 'seeds',
    name: 'Organic Seeds',
    tagline: 'Heirloom herbs & culinary greens',
    image: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1000&q=80',
    count: '5 Varieties',
    icon: Sprout,
    color: '#2A6B4D'
  },
  {
    id: 'pots-planters',
    name: 'Artisan Planters',
    tagline: 'Fluted terracotta & matte ceramic',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80',
    count: '4 Styles',
    icon: Container,
    color: '#C4966F'
  }
];

const CategoryOrbit = () => {
  const [activeCategory, setActiveCategory] = useState(orbitCategories[0]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] border-y border-[#12372A]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            Botanical Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
            Find your kind of green.
          </h2>
          <p className="text-xs sm:text-sm text-[#526057] mt-3">
            Hover over any botanical group to preview the curated specimens cultivated in our greenhouses.
          </p>
        </div>

        {/* Orbit Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Categories List */}
          <div className="lg:col-span-4 space-y-3 order-2 lg:order-1">
            {orbitCategories.slice(0, 4).map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeCategory.id === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#12372A] text-[#F5F1E7] border-[#12372A] shadow-md translate-x-2'
                      : 'bg-[#FCFBF7] text-[#18201B] border-[#12372A]/8 hover:border-[#8FAF91] hover:bg-[#F5F1E7]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isActive ? 'bg-[#1F513A] text-[#8FAF91]' : 'bg-[#8FAF91]/15 text-[#1F513A]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm sm:text-base">
                        {cat.name}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-[#8FAF91]' : 'text-[#526057]'}`}>
                        {cat.tagline}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#8FAF91]/20 text-[#8FAF91]' : 'bg-[#12372A]/5 text-[#657A55]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Central Interactive Showcase Display */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FCFBF7] bg-[#12372A]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory.id}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12372A] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-6 inset-x-6 text-center text-[#FCFBF7] space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#8FAF91]">
                      {activeCategory.count} Available
                    </span>
                    <h3 className="font-serif text-2xl font-bold">
                      {activeCategory.name}
                    </h3>
                    <Link
                      to={`/shop?category=${activeCategory.id}`}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#FCFBF7] text-[#12372A] text-xs font-bold hover:bg-[#F5F1E7] transition-colors shadow-md"
                    >
                      <span>Explore Collection</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Categories List */}
          <div className="lg:col-span-4 space-y-3 order-3">
            {orbitCategories.slice(4, 8).map((cat) => {
              const IconComponent = cat.icon;
              const isActive = activeCategory.id === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-[#12372A] text-[#F5F1E7] border-[#12372A] shadow-md -translate-x-2'
                      : 'bg-[#FCFBF7] text-[#18201B] border-[#12372A]/8 hover:border-[#8FAF91] hover:bg-[#F5F1E7]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-xl ${
                        isActive ? 'bg-[#1F513A] text-[#8FAF91]' : 'bg-[#8FAF91]/15 text-[#1F513A]'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif font-bold text-sm sm:text-base">
                        {cat.name}
                      </div>
                      <div className={`text-xs ${isActive ? 'text-[#8FAF91]' : 'text-[#526057]'}`}>
                        {cat.tagline}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#8FAF91]/20 text-[#8FAF91]' : 'bg-[#12372A]/5 text-[#657A55]'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryOrbit;
