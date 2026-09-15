import React from 'react';
import { Camera, ArrowUpRight } from 'lucide-react';

const galleryPhotos = [
  {
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80',
    handle: '@botanical_corner_blr'
  },
  {
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80',
    handle: '@mumbai_greenhouse'
  },
  {
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80',
    handle: '@urban_jungle_delhi'
  },
  {
    image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80',
    handle: '@zen_bonsai_pune'
  },
  {
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    handle: '@balcony_blooms_hyd'
  },
  {
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
    handle: '@terracotta_living'
  }
];

const InstaGallery = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] border-b border-[#12372A]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#657A55]">
            <Camera className="w-4 h-4 text-[#1F513A]" />
            <span>#VerdoraHomes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
            Living spaces in bloom.
          </h2>
          <p className="text-xs sm:text-sm text-[#526057] mt-2">
            Tag @VerdoraBotanicals to be featured in our digital conservatory.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryPhotos.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm bg-[#12372A]"
            >
              <img
                src={item.image}
                alt="Verdora community garden"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-[#12372A]/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-3 text-center text-[#FCFBF7]">
                <Camera className="w-6 h-6 text-[#8FAF91] mb-1" />
                <span className="text-[10px] font-mono">{item.handle}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#instagram"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#12372A] hover:text-[#1F513A] transition-colors"
          >
            <span>Follow our digital conservatory</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstaGallery;
