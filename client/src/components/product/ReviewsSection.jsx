import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, CheckCircle2, User } from 'lucide-react';
import { api } from '../../services/api';
import { useAuth } from '../../context/AuthContext';

const ReviewsSection = ({ productId, averageRating = 4.8, reviewCount = 0 }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    rating: 5,
    title: '',
    comment: '',
    userName: '',
    userLocation: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await api.getReviews(productId);
        setReviews(data || []);
      } catch (err) {
        console.error('Failed to load reviews:', err);
      } finally {
        setLoading(false);
      }
    };
    if (productId) fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const newReview = await api.createReview(productId, {
        ...form,
        userName: form.userName || user?.name || 'Verified Plant Parent'
      });
      setReviews([newReview, ...reviews]);
      setShowModal(false);
      setForm({ rating: 5, title: '', comment: '', userName: '', userLocation: '' });
    } catch (err) {
      alert(err.message || 'Failed to submit review');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Summary Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-3xl bg-[#FAF8F2] border border-[#12372A]/8">
        <div className="flex items-center gap-5">
          <div className="font-serif text-5xl font-bold text-[#12372A]">
            {averageRating}
          </div>
          <div>
            <div className="flex items-center gap-1 text-[#D4AF37]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`w-5 h-5 ${
                    s <= Math.round(averageRating) ? 'fill-current' : 'opacity-30'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-[#526057] mt-1 font-medium">
              Based on {reviews.length || reviewCount || 1} verified customer reviews
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="px-6 py-3 rounded-full bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
        >
          Write a Review
        </button>
      </div>

      {/* Review List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="p-8 text-center text-xs text-[#526057] bg-[#FCFBF7] rounded-3xl border border-[#12372A]/5">
            No customer reviews yet. Be the first to share your experience with this specimen!
          </div>
        ) : (
          reviews.map((rev) => (
            <div
              key={rev._id}
              className="p-6 rounded-3xl bg-[#FCFBF7] border border-[#12372A]/8 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#12372A]">{rev.userName}</span>
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#1F513A] bg-[#8FAF91]/20 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                    </span>
                  </div>
                  {rev.userLocation && (
                    <span className="text-[11px] text-[#657A55]">{rev.userLocation}</span>
                  )}
                </div>

                <div className="flex text-[#D4AF37]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <h4 className="font-serif font-bold text-sm text-[#18201B]">
                {rev.title}
              </h4>

              <p className="text-xs text-[#526057] leading-relaxed">
                {rev.comment}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Write Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#12372A]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#12372A]/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
              <h3 className="font-serif font-bold text-lg text-[#12372A]">
                Share Your Botanical Experience
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-xs font-bold text-[#657A55] hover:text-[#12372A]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#12372A] mb-1">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, rating: star })}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= form.rating
                            ? 'text-[#D4AF37] fill-[#D4AF37]'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12372A] mb-1">
                  Review Headline
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stunning healthy foliage and flawless packaging"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white text-xs focus:outline-none focus:border-[#1F513A]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12372A] mb-1">
                  Detailed Review
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Describe the condition upon arrival, growth progress, and care experience..."
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white text-xs focus:outline-none focus:border-[#1F513A]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#12372A] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder={user?.name || 'e.g. Priya S.'}
                    value={form.userName}
                    onChange={(e) => setForm({ ...form, userName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white text-xs focus:outline-none focus:border-[#1F513A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#12372A] mb-1">
                    City / State
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, MH"
                    value={form.userLocation}
                    onChange={(e) => setForm({ ...form, userLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white text-xs focus:outline-none focus:border-[#1F513A]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-[#12372A]/10">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 rounded-xl border border-[#12372A]/20 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-6 py-2.5 rounded-xl bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider"
                >
                  {submitting ? 'Publishing...' : 'Publish Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;
