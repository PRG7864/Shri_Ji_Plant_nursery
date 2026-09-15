import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const mainCategories = [
  {
    title: 'Indoor Plants',
    description: 'Fiddle leaf figs, monsteras, pothos, and calatheas for cozy interior living.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=indoor-plants',
    tag: '12 Varieties',
    colSpan: 'md:col-span-8'
  },
  {
    title: 'Artisan Pots & Planters',
    description: 'Fluted terracotta, Scandinavian matte ceramic, and solid wood stands.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=pots-planters',
    tag: 'Artisan Clay',
    colSpan: 'md:col-span-4'
  },
  {
    title: 'NASA Air Purifiers',
    description: 'Snake plants, peace lilies, and spider plants that scrub toxins day & night.',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=air-purifying',
    tag: 'Healthy Home',
    colSpan: 'md:col-span-4'
  },
  {
    title: 'Artisan Bonsai Specimens',
    description: '8 to 12-year cultivated Ficus and Chinese Elm trees with exposed banyan roots.',
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=bonsai',
    tag: 'Zen Living Art',
    colSpan: 'md:col-span-4'
  },
  {
    title: 'Curated Plant Combos',
    description: 'Pre-matched collections for bedrooms, beginners, and desk sanctuaries.',
    image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=800&q=80',
    link: '/shop?category=plant-combos',
    tag: 'Save up to 43%',
    colSpan: 'md:col-span-4'
  }
];

const CategoryCards = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
              Botanical Collections
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
              Curated by botanical craft.
            </h2>
          </div>
          <Link
            to="/shop"
            className="mt-4 md:mt-0 text-xs font-bold text-[#12372A] hover:text-[#1F513A] uppercase tracking-wider flex items-center gap-1 group"
          >
            <span>View All Categories</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Editorial Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {mainCategories.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.colSpan} group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-card-elevated border border-[#12372A]/10 min-h-[300px] flex flex-col justify-end p-6 sm:p-8 bg-[#12372A]`}
              data-cursor="EXPLORE"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-90"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12372A] via-[#12372A]/40 to-transparent" />

              {/* Content */}
              <div className="relative z-10 text-[#FCFBF7] space-y-2">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#12372A]/80 backdrop-blur-md text-[#8FAF91] border border-[#8FAF91]/30">
                  {item.tag}
                </span>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                    {item.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-[#FCFBF7] text-[#12372A] flex items-center justify-center shrink-0 group-hover:bg-[#8FAF91] group-hover:text-[#12372A] transition-colors shadow-md">
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#8FAF91] max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Full Card Link */}
              <Link to={item.link} className="absolute inset-0 z-20" aria-label={item.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
