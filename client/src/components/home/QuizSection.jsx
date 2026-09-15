import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const QuizSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E7]">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#FCFBF7] to-[#FAF8F2] border border-[#12372A]/10 shadow-lg p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8FAF91]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12372A]/5 text-xs font-bold uppercase tracking-wider text-[#1F513A]">
                <Compass className="w-4 h-4 text-[#A47752]" />
                <span>Botanical Matchmaker</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] leading-tight">
                Not sure what to grow? <br />
                <span className="italic font-normal text-[#1F513A]">
                  We&apos;ll find your plant.
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-[#526057] max-w-lg leading-relaxed">
                Answer 4 quick questions about your room lighting, space, and care routine. Our horticultural recommendation engine will tailor the ideal botanical companions for your home.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#18201B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F513A]" />
                  <span>Room Light & Direction Check</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F513A]" />
                  <span>Pet-Friendly & Non-Toxic Filter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F513A]" />
                  <span>Low Maintenance Options</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1F513A]" />
                  <span>Tailored Care Routine Specs</span>
                </div>
              </div>

              {/* Start Quiz Button */}
              <div className="pt-4">
                <Link
                  to="/quiz"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md group"
                >
                  <Sparkles className="w-4 h-4 text-[#8FAF91]" />
                  <span>Start the 60-Second Quiz</span>
                  <ArrowRight className="w-4 h-4 text-[#8FAF91] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Interactive Teaser Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FCFBF7] rounded-3xl p-6 shadow-xl border border-[#12372A]/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
                  <span className="text-xs font-bold text-[#12372A]">Sample Question 1/4</span>
                  <span className="text-[11px] text-[#657A55]">Where will your plant live?</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-2xl bg-[#8FAF91]/15 border border-[#1F513A] text-xs font-bold text-[#12372A] flex items-center gap-2">
                    <span>🛋️</span>
                    <span>Living Room</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F5F1E7] border border-[#12372A]/5 text-xs font-medium text-[#526057] flex items-center gap-2">
                    <span>🛏️</span>
                    <span>Bedroom</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F5F1E7] border border-[#12372A]/5 text-xs font-medium text-[#526057] flex items-center gap-2">
                    <span>💻</span>
                    <span>Work Desk</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#F5F1E7] border border-[#12372A]/5 text-xs font-medium text-[#526057] flex items-center gap-2">
                    <span>🌿</span>
                    <span>Balcony</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#12372A]/10 flex items-center justify-between text-xs text-[#526057]">
                  <span>Instant Match Guarantee</span>
                  <Link to="/quiz" className="font-bold text-[#1F513A] hover:underline">
                    Take Quiz →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
