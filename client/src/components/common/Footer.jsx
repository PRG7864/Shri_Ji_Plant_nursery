import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShieldCheck, Truck, RefreshCw, Heart, Sparkles, Mail, Phone, MapPin, Camera, Video, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#12372A] text-[#F5F1E7] pt-16 pb-12 border-t border-[#1F513A]/40 relative overflow-hidden">
      {/* Botanical background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F513A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8FAF91]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top 4 Nursery Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#1F513A]/60">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#1F513A]/60 text-[#8FAF91] shrink-0">
              <Leaf className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#FCFBF7]">Nursery Fresh</h4>
              <p className="text-xs text-[#8FAF91] mt-0.5">Directly potted & nurtured in organic soil</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#1F513A]/60 text-[#8FAF91] shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#FCFBF7]">Eco-Armor Shipping</h4>
              <p className="text-xs text-[#8FAF91] mt-0.5">100% breathable transit safe across India</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#1F513A]/60 text-[#8FAF91] shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#FCFBF7]">7-Day Guarantee</h4>
              <p className="text-xs text-[#8FAF91] mt-0.5">Instant plant replacement guarantee</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-[#1F513A]/60 text-[#8FAF91] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#FCFBF7]">Lifetime Plant Care</h4>
              <p className="text-xs text-[#8FAF91] mt-0.5">Free botanist doctor consultation</p>
            </div>
          </div>
        </div>

        {/* Middle Footer Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-3xl font-bold tracking-[0.18em] text-[#FCFBF7] uppercase">
                GREENYCUP
              </span>
              <span className="block text-xs tracking-[0.25em] text-[#8FAF91] uppercase font-sans font-medium mt-1">
                Bring life home
              </span>
            </Link>
            <p className="text-xs text-[#8FAF91] leading-relaxed max-w-sm">
              GreenyCup is India’s next-generation digital botanical nursery. We cultivate healthy, living plant specimens and ship them straight from our greenhouses to your doorstep in eco-friendly protective packaging.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[#8FAF91]">
              <a href="#instagram" aria-label="GreenyCup on Instagram" className="p-2 bg-[#1F513A]/40 rounded-full hover:bg-[#8FAF91] hover:text-[#12372A] transition-colors">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="GreenyCup on YouTube" className="p-2 bg-[#1F513A]/40 rounded-full hover:bg-[#8FAF91] hover:text-[#12372A] transition-colors">
                <Video className="w-4 h-4" />
              </a>
              <a href="#community" aria-label="GreenyCup Community" className="p-2 bg-[#1F513A]/40 rounded-full hover:bg-[#8FAF91] hover:text-[#12372A] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#FCFBF7] mb-4">
              Explore Plants
            </h5>
            <ul className="space-y-2 text-xs text-[#8FAF91]">
              <li><Link to="/shop?category=indoor-plants" className="hover:text-[#FCFBF7] transition-colors">Indoor Plants</Link></li>
              <li><Link to="/shop?category=air-purifying" className="hover:text-[#FCFBF7] transition-colors">NASA Air Purifying</Link></li>
              <li><Link to="/shop?category=flowering-plants" className="hover:text-[#FCFBF7] transition-colors">Flowering Beauties</Link></li>
              <li><Link to="/shop?category=succulents-cacti" className="hover:text-[#FCFBF7] transition-colors">Succulents & Cacti</Link></li>
              <li><Link to="/shop?category=bonsai" className="hover:text-[#FCFBF7] transition-colors">Heritage Bonsai</Link></li>
              <li><Link to="/shop?category=plant-combos" className="hover:text-[#FCFBF7] transition-colors">Curated Combos</Link></li>
            </ul>
          </div>

          {/* Gardening Essentials */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#FCFBF7] mb-4">
              Gardening Care
            </h5>
            <ul className="space-y-2 text-xs text-[#8FAF91]">
              <li><Link to="/shop?category=pots-planters" className="hover:text-[#FCFBF7] transition-colors">Artisan Pots & Planters</Link></li>
              <li><Link to="/shop?category=seeds" className="hover:text-[#FCFBF7] transition-colors">Organic Heirloom Seeds</Link></li>
              <li><Link to="/shop?category=soil-fertilizers" className="hover:text-[#FCFBF7] transition-colors">Soil & Bio-Fertilizers</Link></li>
              <li><Link to="/shop?category=garden-tools" className="hover:text-[#FCFBF7] transition-colors">Brass Tools & Misters</Link></li>
              <li><Link to="/care-journal" className="hover:text-[#FCFBF7] transition-colors">Watering & Care Guides</Link></li>
              <li><Link to="/quiz" className="hover:text-[#FCFBF7] transition-colors">Plant Finder Quiz</Link></li>
            </ul>
          </div>

          {/* Botanical Helpline & Support */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-[#FCFBF7] mb-4">
              Greenhouse Helpline
            </h5>
            <div className="space-y-3 text-xs text-[#8FAF91]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8FAF91] shrink-0 mt-0.5" />
                <span>Greenhouse #14, Indiranagar, Bengaluru, KA 560038</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8FAF91] shrink-0" />
                <span>+91 98765 43210 (10 AM - 7 PM)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8FAF91] shrink-0" />
                <span>care@greenycup.com</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-3 py-1.5 rounded-lg bg-[#1F513A] text-[#FCFBF7] text-xs font-medium hover:bg-[#8FAF91] hover:text-[#12372A] transition-colors"
                >
                  Consult Plant Doctor →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright and Legal */}
        <div className="pt-8 border-t border-[#1F513A]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8FAF91]">
          <div>
            © {new Date().getFullYear()} GREENYCUP Botanical Nursery Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-[#FCFBF7]">Sustainability</Link>
            <Link to="/contact" className="hover:text-[#FCFBF7]">Shipping Policy</Link>
            <Link to="/contact" className="hover:text-[#FCFBF7]">Refund Guarantee</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
