import React, { useState } from 'react';
import { BookOpen, Clock, ArrowRight, X } from 'lucide-react';
import { journalArticles } from '../components/home/CareJournal';

const CareJournalPage = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            Botanical Editorial
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A]">
            The GreenyCup Plant Care Journal
          </h1>
          <p className="text-xs sm:text-sm text-[#526057]">
            Practical horticultural guides, repotting rituals, and seasonal sunlight wisdom written by our nursery specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalArticles.map((article) => (
            <div
              key={article.id}
              className="bg-[#FCFBF7] rounded-3xl overflow-hidden border border-[#12372A]/10 shadow-sm hover:shadow-card-elevated transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#EADBCC]/30 relative">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#12372A]/90 text-[#F5F1E7] backdrop-blur-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-[#657A55]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-[#12372A] leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#526057] leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="px-5 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A] transition-colors"
                >
                  Read Full Guide →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Read Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 bg-[#12372A]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="w-full max-w-2xl bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#12372A]/10 max-h-[85vh] overflow-y-auto space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
                <span className="text-xs font-bold uppercase text-[#1F513A]">
                  {selectedArticle.category} • {selectedArticle.readTime}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 rounded-full text-[#657A55] hover:text-[#12372A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                {selectedArticle.title}
              </h2>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full aspect-[16/9] object-cover rounded-2xl"
              />

              <div className="text-xs sm:text-sm text-[#18201B] space-y-4 leading-relaxed font-normal">
                <p>
                  Proper plant care is less about rigid timetables and more about observing your plant’s natural living rhythms. Tropical understory plants like Monsteras and Calatheas thrive when their root systems receive aerated moisture without standing in puddle stagnation.
                </p>
                <h4 className="font-serif text-base font-bold text-[#12372A]">The Golden Finger Test</h4>
                <p>
                  Before reaching for your watering can, insert your finger 2 inches into the potting medium. If you feel cool dampness, wait another 3-4 days. If the topsoil is crumbly and dry, water slowly until moisture trickles out through the bottom drainage holes.
                </p>
                <h4 className="font-serif text-base font-bold text-[#12372A]">Humidity & Foliage Cleanliness</h4>
                <p>
                  Indoor dust accumulates on leaf surfaces, reducing photosynthesis by up to 30%. Wipe foliage gently once a month with a damp microfiber cloth or mist with our organic neem leaf shine spray.
                </p>
              </div>

              <div className="pt-4 border-t border-[#12372A]/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareJournalPage;
