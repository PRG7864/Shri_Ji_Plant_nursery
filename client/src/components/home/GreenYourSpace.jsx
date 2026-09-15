import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Check } from 'lucide-react';

const spacesData = [
  {
    id: 'living-room',
    name: 'Living Room',
    headline: 'Lush architectural majesty for focal gathering spaces',
    description: 'Elevate corners with tall split-leaf Monsteras, Fiddle Leaf Figs, and cascading Pothos that bring organic texture to seating areas.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80',
    plants: [
      { name: 'Monstera Deliciosa', price: '₹549', slug: 'monstera-deliciosa' },
      { name: 'Fiddle Leaf Fig', price: '₹799', slug: 'fiddle-leaf-fig' },
      { name: 'Calathea Orbifolia', price: '₹699', slug: 'calathea-orbifolia' },
    ]
  },
  {
    id: 'bedroom',
    name: 'Bedroom Sanctuary',
    headline: 'Nighttime oxygen release & calming clean air',
    description: 'NASA studies prove that Snake Plants and Peace Lilies absorb CO2 and release soothing oxygen while you sleep, improving deep rest.',
    image: 'https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=1200&q=80',
    plants: [
      { name: 'Snake Plant Laurentii', price: '₹349', slug: 'snake-plant-laurentii' },
      { name: 'Peace Lily Spathiphyllum', price: '₹399', slug: 'peace-lily-spathiphyllum' },
      { name: 'ZZ Plant Raven', price: '₹449', slug: 'zz-plant-zamiifolia' },
    ]
  },
  {
    id: 'balcony',
    name: 'Balcony & Terrace',
    headline: 'Sun-drenched flowering paradise & morning fragrances',
    description: 'Transform concrete railings into blooming oases with sun-loving Bougainvillea, sweet Arabian Mogra Jasmine, and majestic Areca Palms.',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80',
    plants: [
      { name: 'Jasmine Mogra Sambac', price: '₹299', slug: 'jasmine-mogra-sambac' },
      { name: 'Areca Palm Luxury', price: '₹599', slug: 'areca-palm-luxury' },
      { name: 'Bougainvillea Magenta', price: '₹349', slug: 'bougainvillea-royal-magenta' },
    ]
  },
  {
    id: 'office',
    name: 'Work Desk & Office',
    headline: 'Cognitive focus & reduced digital screen fatigue',
    description: 'Studies demonstrate a 23% boost in concentration when keeping tabletop succulents, Jade money plants, and miniature Ginseng Bonsai.',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80',
    plants: [
      { name: 'Jade Money Plant', price: '₹299', slug: 'jade-plant-crassula' },
      { name: 'Ficus Bonsai 8-Yr', price: '₹1299', slug: 'ficus-ginseng-bonsai' },
      { name: 'Golden Pothos', price: '₹249', slug: 'golden-pothos-cascading' },
    ]
  }
];

const GreenYourSpace = () => {
  const [selectedSpace, setSelectedSpace] = useState(spacesData[0]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] border-b border-[#12372A]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            Living Environments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
            Your space. <br />
            <span className="italic font-normal">More alive.</span>
          </h2>
        </div>

        {/* Space Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {spacesData.map((space) => {
            const isActive = selectedSpace.id === space.id;
            return (
              <button
                key={space.id}
                type="button"
                onClick={() => setSelectedSpace(space)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#12372A] text-[#F5F1E7] shadow-md scale-105'
                    : 'bg-[#FCFBF7] text-[#18201B] border border-[#12372A]/10 hover:border-[#8FAF91]'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Dynamic Space Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Visual Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[16/10] shadow-2xl border-4 border-[#FCFBF7] bg-[#12372A]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedSpace.id}
                  src={selectedSpace.image}
                  alt={selectedSpace.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Details & Recommended Plants */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSpace.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1F513A]/10 text-xs font-bold text-[#1F513A] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#A47752]" />
                  <span>Curated for {selectedSpace.name}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                  {selectedSpace.headline}
                </h3>

                <p className="text-xs sm:text-sm text-[#526057] leading-relaxed">
                  {selectedSpace.description}
                </p>

                {/* Recommended Specimen Chips */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#657A55] block">
                    Recommended Plants:
                  </span>
                  {selectedSpace.plants.map((plant) => (
                    <Link
                      key={plant.slug}
                      to={`/product/${plant.slug}`}
                      className="flex items-center justify-between p-3 rounded-2xl bg-[#FCFBF7] hover:bg-[#F5F1E7] border border-[#12372A]/8 hover:border-[#8FAF91] transition-all group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-[#8FAF91]/20 text-[#12372A]">
                          <Leaf className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-serif font-bold text-xs sm:text-sm text-[#12372A] group-hover:text-[#1F513A]">
                          {plant.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#18201B]">{plant.price}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#657A55] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenYourSpace;
