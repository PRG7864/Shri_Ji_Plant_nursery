import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Sun,
  Heart,
  Leaf
} from 'lucide-react';
import { api } from '../services/api';
import ProductCard from '../components/shop/ProductCard';

const questions = [
  {
    id: 'space',
    question: 'Where will your new plant live?',
    subtitle: 'Choose the primary environment for your plant companion.',
    options: [
      { label: 'Living Room', icon: '🛋️', desc: 'Central open area with ambient lighting' },
      { label: 'Bedroom', icon: '🛏️', desc: 'Calming space with nighttime oxygen release' },
      { label: 'Work Desk / Office', icon: '💻', desc: 'Compact spot to boost concentration' },
      { label: 'Balcony & Terrace', icon: '🌿', desc: 'Sun-drenched outdoor railing or patio' },
    ]
  },
  {
    id: 'sunlight',
    question: 'How much sunlight does this spot receive?',
    subtitle: 'Lighting is the most vital ingredient for healthy plant growth.',
    options: [
      { label: 'Low / Ambient Light', icon: '🌑', desc: 'No direct sunlight, shady corners' },
      { label: 'Medium Indirect Light', icon: '⛅', desc: 'Filtered light near a bright window' },
      { label: 'Bright Indirect Light', icon: '🌤️', desc: 'Very bright all day without direct sunburn' },
      { label: 'Direct Sunlight', icon: '☀️', desc: '4+ hours of direct sunbeams daily' },
    ]
  },
  {
    id: 'careLevel',
    question: 'What is your gardening commitment level?',
    subtitle: 'We have plants for complete neglect to devoted green thumbs.',
    options: [
      { label: 'Minimal / Unkillable', icon: '🛡️', desc: 'Water once every 2 weeks, thrives on neglect' },
      { label: 'Moderate Care', icon: '💧', desc: 'Weekly check-in and occasional misting' },
      { label: 'Plant Enthusiast', icon: '🌱', desc: 'I love pruning, misting, and nurturing foliage' },
    ]
  },
  {
    id: 'goal',
    question: 'What is your primary goal for this plant?',
    subtitle: 'Select what matters most to your aesthetic and lifestyle.',
    options: [
      { label: 'Air purification', icon: '🌬️', desc: 'NASA certified natural oxygen filters' },
      { label: 'Pet-friendly', icon: '🐾', desc: '100% ASPCA non-toxic to cats & dogs' },
      { label: 'Flowers', icon: '🌸', desc: 'Vibrant colors and fragrant blooms' },
      { label: 'Good luck & Feng Shui', icon: '✨', desc: 'Attract positive energy and abundance' },
    ]
  }
];

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);

  const handleSelectOption = (questionId, optionLabel) => {
    const updated = { ...answers, [questionId]: optionLabel };
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate recommendations
      submitQuiz(updated);
    }
  };

  const submitQuiz = async (finalAnswers) => {
    setLoading(true);
    try {
      const data = await api.getQuizRecommendations(finalAnswers);
      setResults(data);
    } catch (err) {
      console.error('Quiz failed:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setResults(null);
  };

  const currentQ = questions[currentStep];

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {!results && !loading && (
          <div className="bg-[#FCFBF7] rounded-[2.5rem] p-8 sm:p-12 border border-[#12372A]/10 shadow-xl space-y-8 relative overflow-hidden">
            {/* Progress Header */}
            <div className="flex items-center justify-between border-b border-[#12372A]/10 pb-4 text-xs font-semibold text-[#657A55]">
              <div className="flex items-center gap-2 text-[#1F513A]">
                <Compass className="w-4 h-4" />
                <span>Plant Finder Quiz</span>
              </div>
              <span>Step {currentStep + 1} of {questions.length}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-[#8FAF91]/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#1F513A] transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question & Options */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
                    {currentQ.question}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#526057] mt-1">
                    {currentQ.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentQ.options.map((opt) => {
                    const isSelected = answers[currentQ.id] === opt.label;
                    return (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => handleSelectOption(currentQ.id, opt.label)}
                        className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all ${
                          isSelected
                            ? 'bg-[#12372A] text-[#F5F1E7] border-[#12372A] shadow-md'
                            : 'bg-[#FAF8F2] text-[#18201B] border-[#12372A]/8 hover:border-[#8FAF91] hover:bg-white'
                        }`}
                      >
                        <span className="text-2xl">{opt.icon}</span>
                        <div>
                          <div className="font-serif font-bold text-sm sm:text-base">
                            {opt.label}
                          </div>
                          <div className={`text-xs mt-0.5 ${isSelected ? 'text-[#8FAF91]' : 'text-[#526057]'}`}>
                            {opt.desc}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Nav */}
            <div className="flex justify-between items-center pt-4 border-t border-[#12372A]/10">
              <button
                type="button"
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className="text-xs font-semibold text-[#657A55] hover:text-[#12372A] disabled:opacity-30 flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <span className="text-xs text-[#526057]">
                {answers[currentQ.id] ? 'Selection saved' : 'Select an option to proceed'}
              </span>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-[#FCFBF7] rounded-[2.5rem] p-16 border border-[#12372A]/10 text-center space-y-4 shadow-xl">
            <Leaf className="w-10 h-10 text-[#1F513A] animate-bounce mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-[#12372A]">
              Analyzing your living space profile...
            </h3>
            <p className="text-xs text-[#526057]">
              Matching sunlight, room conditions, and care tolerance across 40+ botanical specimens.
            </p>
          </div>
        )}

        {/* Recommendations Result */}
        {results && !loading && (
          <div className="space-y-8">
            <div className="bg-[#FCFBF7] rounded-[2.5rem] p-8 sm:p-10 border border-[#12372A]/10 shadow-xl space-y-4 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1F513A]/10 text-xs font-bold uppercase tracking-wider text-[#1F513A] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Personalized Botanical Matches</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-[#12372A]">
                  Your Ideal Green Companions
                </h2>
                <p className="text-xs sm:text-sm text-[#526057] mt-1 max-w-xl">
                  {results.profile?.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={handleRestart}
                className="px-6 py-3 rounded-full border border-[#12372A] text-[#12372A] hover:bg-[#12372A] hover:text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>
            </div>

            {/* Recommended Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.recommendations?.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
