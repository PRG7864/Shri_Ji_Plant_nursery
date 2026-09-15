import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="bg-[#F5F1E7] min-h-[75vh] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-[#FCFBF7] rounded-[2.5rem] p-10 border border-[#12372A]/10 shadow-lg space-y-6">
        <div className="w-20 h-20 rounded-full bg-[#8FAF91]/20 text-[#1F513A] flex items-center justify-center mx-auto">
          <Leaf className="w-10 h-10 animate-bounce" />
        </div>
        <div>
          <span className="text-xs font-mono font-bold text-[#C86D51] uppercase tracking-widest">
            404 • Botanical Path Lost
          </span>
          <h1 className="font-serif text-3xl font-bold text-[#12372A] mt-2">
            This plant got lost in the garden.
          </h1>
          <p className="text-xs text-[#526057] mt-2 leading-relaxed">
            The page you are looking for might have been pruned or moved to another greenhouse section.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A] transition-colors shadow-md"
        >
          <span>Return to Conservatory</span>
          <ArrowRight className="w-4 h-4 text-[#8FAF91]" />
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
