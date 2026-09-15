import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Dr. Radhika Kulkarni',
    city: 'Pune, Maharashtra',
    plantBought: 'Monstera Deliciosa & Fluted Pots',
    text: 'The packaging was sheer perfection. Not a single drop of soil spilled, and the fenestrated leaves were glossy and immaculate. GreenyCup has set a new gold standard for online plant nurseries in India.',
    rating: 5
  },
  {
    name: 'Sameer Sen',
    city: 'South Delhi',
    plantBought: 'NASA Air Purifier Sanctuary Pack',
    text: 'I live in an apartment where air quality is a constant concern. Having the 4-pack Snake plant, Peace lily, and Areca palm in my bedroom and living room has genuinely refreshed the room atmosphere.',
    rating: 5
  },
  {
    name: 'Meera Nambiar',
    city: 'Kochi, Kerala',
    plantBought: '8-Year Ficus Ginseng Bonsai',
    text: 'The Bonsai arrived looking like museum sculpture. The trunk and exposed roots are stunning. Customer support also answered my pruning questions on WhatsApp in minutes!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            Community Stories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
            Loved by plant parents across India.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.name}
              className="bg-[#FCFBF7] rounded-3xl p-7 border border-[#12372A]/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
            >
              <div>
                {/* Star Ratings */}
                <div className="flex items-center gap-1 text-[#D4AF37] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-[#8FAF91]/30 mb-2" />

                <p className="text-xs sm:text-sm text-[#18201B] font-serif italic leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#12372A]/8 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#12372A]">
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-[#526057]">{item.city}</div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#1F513A] bg-[#8FAF91]/20 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
