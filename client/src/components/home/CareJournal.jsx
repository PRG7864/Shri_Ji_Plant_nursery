import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

export const journalArticles = [
  {
    id: 1,
    title: 'How Often Should You Really Water Indoor Plants?',
    excerpt: 'Forget strict calendar schedules. Learn how to feel the substrate, read leaf posture, and avoid root rot for good.',
    category: 'Watering & Roots',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 2026'
  },
  {
    id: 2,
    title: '5 Virtually Unkillable Plants for Busy Beginners',
    excerpt: 'From the indestructible Snake Plant to the drought-hardy ZZ, these specimens forgive neglected waterings with grace.',
    category: 'Beginner Guides',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    date: 'Sep 2026'
  },
  {
    id: 3,
    title: 'How to Choose the Right Planter: Terracotta vs Ceramic',
    excerpt: 'Why breathable clay prevents overwatering disasters and when glazed ceramic works best for humidity-loving ferns.',
    category: 'Pots & Substrate',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    date: 'Aug 2026'
  },
  {
    id: 4,
    title: 'Monsoon Plant Care: Dealing with Humidity and Gnats',
    excerpt: 'Essential tips on adjusting watering frequency, boosting air circulation, and using organic neem spray in rainy seasons.',
    category: 'Seasonal Care',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    date: 'Aug 2026'
  }
];

const CareJournal = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] border-y border-[#12372A]/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#657A55]">
              <BookOpen className="w-3.5 h-3.5 text-[#1F513A]" />
              <span>Botanical Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
              Learn to <br />
              <span className="italic font-normal">grow better.</span>
            </h2>
          </div>
          <Link
            to="/care-journal"
            className="mt-4 md:mt-0 text-xs font-bold text-[#12372A] hover:text-[#1F513A] uppercase tracking-wider flex items-center gap-1 group"
          >
            <span>Read All Articles</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journalArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#FCFBF7] rounded-3xl overflow-hidden border border-[#12372A]/8 hover:border-[#8FAF91] shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between"
              data-cursor="READ"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#EADBCC]/30 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#12372A]/90 text-[#F5F1E7] backdrop-blur-md">
                    {article.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-[#657A55] mb-2 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#12372A] group-hover:text-[#1F513A] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#526057] mt-2 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  to="/care-journal"
                  className="text-xs font-bold text-[#1F513A] flex items-center gap-1.5 group-hover:underline"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareJournal;
