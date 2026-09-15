import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Heart, Sprout, Award, MapPin } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-[#F5F1E7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F513A]/10 text-xs font-bold uppercase tracking-wider text-[#1F513A]">
            <Sprout className="w-4 h-4 text-[#A47752]" />
            <span>Our Botanical Heritage</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#12372A] leading-tight">
            We believe every home deserves living beauty.
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#526057] leading-relaxed">
            Founded with a vision to connect modern urban living with nature’s restorative power, GreenyCup cultivates healthy botanical specimens and delivers them safely across India in custom eco-protective armor.
          </p>
        </div>

        {/* Nursery Showcase Imagery */}
        <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] shadow-2xl border-4 border-[#FCFBF7] bg-[#12372A]">
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=80"
            alt="GreenyCup Greenhouse Nursery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-6 text-[#FCFBF7] max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8FAF91]">Greenhouse Sanctuary</span>
            <h3 className="font-serif text-2xl font-bold mt-1">Nurtured with organic care and patience.</h3>
          </div>
        </div>

        {/* 3 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FCFBF7] p-8 rounded-3xl border border-[#12372A]/10 space-y-3">
            <div className="p-3 w-max rounded-2xl bg-[#12372A] text-[#8FAF91]">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12372A]">100% Organic Soil</h3>
            <p className="text-xs text-[#526057] leading-relaxed">
              Every plant is potted in our in-house biochar, neem cake, and vermicompost blend. Zero harmful synthetic growth accelerants.
            </p>
          </div>

          <div className="bg-[#FCFBF7] p-8 rounded-3xl border border-[#12372A]/10 space-y-3">
            <div className="p-3 w-max rounded-2xl bg-[#12372A] text-[#8FAF91]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12372A]">Eco-Armor Shipping</h3>
            <p className="text-xs text-[#526057] leading-relaxed">
              Our packaging is 100% plastic-free, biodegradable, and custom-engineered to survive long multi-day transit with root integrity.
            </p>
          </div>

          <div className="bg-[#FCFBF7] p-8 rounded-3xl border border-[#12372A]/10 space-y-3">
            <div className="p-3 w-max rounded-2xl bg-[#12372A] text-[#8FAF91]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#12372A]">Lifelong Plant Doctors</h3>
            <p className="text-xs text-[#526057] leading-relaxed">
              Our relationship doesn&apos;t end at delivery. Our botanists are on standby to answer health, repotting, and lighting queries anytime.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <Link
            to="/shop"
            className="px-8 py-4 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A] transition-colors shadow-lg"
          >
            Explore Our Nursery Specimens →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
