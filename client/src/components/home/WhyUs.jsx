import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, PackageCheck, Truck, RefreshCw, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Sprout,
    title: 'Nursery Fresh Specimens',
    description: 'Every plant is actively nurtured by expert botanists and shipped in nutrient-rich organic soil.'
  },
  {
    icon: PackageCheck,
    title: 'Eco-Armor Packaging',
    description: 'Custom ventilated, shock-absorbent packaging engineered so live plants arrive in pristine condition.'
  },
  {
    icon: Truck,
    title: 'Fast Doorstep Express',
    description: 'Reliable all-India delivery with real-time route temperature and delivery milestone tracking.'
  },
  {
    icon: RefreshCw,
    title: '7-Day Plant Guarantee',
    description: 'If your plant arrives damaged or stressed from transit, we replace it instantly with zero hassle.'
  },
  {
    icon: HeartHandshake,
    title: 'Lifetime Plant Care Support',
    description: 'Get free one-on-one troubleshooting advice from our horticultural team for the life of your plant.'
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            The Verdora Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
            Why green spaces start with us.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/8 hover:border-[#8FAF91] shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#12372A] text-[#8FAF91] flex items-center justify-center mb-5 shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#12372A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#526057] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
