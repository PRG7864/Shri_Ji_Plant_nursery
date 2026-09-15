import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, PackagePlus } from 'lucide-react';
import ProductCard from '../shop/ProductCard';
import { api } from '../../services/api';

const PlantCombos = () => {
  const [combos, setCombos] = useState([]);

  useEffect(() => {
    const fetchCombos = async () => {
      try {
        const data = await api.getProducts({ isCombo: 'true', limit: 4 });
        setCombos(data.products || []);
      } catch (err) {
        console.error('Failed to load combos:', err);
      }
    };
    fetchCombos();
  }, []);

  if (combos.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#657A55]">
              <PackagePlus className="w-4 h-4 text-[#1F513A]" />
              <span>Curated Value Bundles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
              Plant combos & starter kits.
            </h2>
            <p className="text-xs sm:text-sm text-[#526057] mt-2 max-w-lg">
              Pre-matched pairings of complementary botanical specimens and planters, bundled at up to 43% savings.
            </p>
          </div>
          <Link
            to="/shop?category=plant-combos"
            className="mt-4 md:mt-0 text-xs font-bold text-[#12372A] hover:text-[#1F513A] uppercase tracking-wider flex items-center gap-1 group"
          >
            <span>View All Combos</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {combos.map((combo) => (
            <ProductCard key={combo._id} product={combo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCombos;
