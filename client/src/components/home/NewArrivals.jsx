import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from '../shop/ProductCard';
import { api } from '../../services/api';

const NewArrivals = () => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const data = await api.getProducts({ newArrival: 'true', limit: 6 });
        setArrivals(data.products || []);
      } catch (err) {
        console.error('Failed to load new arrivals:', err);
      }
    };
    fetchNewArrivals();
  }, []);

  const scrollContainer = (direction) => {
    const container = document.getElementById('arrivals-scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (arrivals.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] border-b border-[#12372A]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#657A55]">
              <Sparkles className="w-3.5 h-3.5 text-[#1F513A]" />
              <span>Just Potted</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
              Fresh from the <br />
              <span className="italic font-normal">greenhouse.</span>
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollContainer('left')}
              className="p-3 rounded-full border border-[#12372A]/15 bg-[#FCFBF7] hover:bg-[#12372A] text-[#12372A] hover:text-[#F5F1E7] transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollContainer('right')}
              className="p-3 rounded-full border border-[#12372A]/15 bg-[#FCFBF7] hover:bg-[#12372A] text-[#12372A] hover:text-[#F5F1E7] transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          id="arrivals-scroll-container"
          className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar scroll-smooth snap-x"
        >
          {arrivals.map((product) => (
            <div
              key={product._id}
              className="w-[280px] sm:w-[300px] shrink-0 snap-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
