import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'Plant Health Help', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            Greenhouse Support
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A]">
            Consult the Plant Doctor
          </h1>
          <p className="text-xs sm:text-sm text-[#526057]">
            Have a question about yellowing leaves, custom bulk planter orders, or shipping timelines? We’re here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info */}
          <div className="md:col-span-5 bg-[#FCFBF7] rounded-3xl p-8 border border-[#12372A]/10 space-y-6 shadow-sm">
            <h3 className="font-serif font-bold text-xl text-[#12372A]">
              GreenyCup Nursery HQ
            </h3>

            <div className="space-y-4 text-xs text-[#526057]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#8FAF91]/20 text-[#12372A] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#12372A] block">Greenhouse Nursery Facility</strong>
                  <span>#42 Botanical Boulevard, Indiranagar, Bengaluru, KA 560038</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#8FAF91]/20 text-[#12372A] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#12372A] block">Botanical Helpline</strong>
                  <span>+91 98765 43210 (Mon–Sat, 9:30 AM – 7:00 PM)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#8FAF91]/20 text-[#12372A] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-[#12372A] block">Email Support</strong>
                  <span>care@greenycup.com</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#12372A] text-[#FCFBF7] space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8FAF91]">
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Doctor</span>
              </div>
              <p className="text-[11px] text-[#8FAF91] leading-relaxed">
                Send clear photos of your plant foliage to our WhatsApp line for instant diagnosis within 2 hours.
              </p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="md:col-span-7 bg-[#FCFBF7] rounded-3xl p-8 border border-[#12372A]/10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1F513A] text-[#8FAF91] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#12372A]">
                  Message Received!
                </h3>
                <p className="text-xs text-[#526057] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. One of our nursery specialists will respond to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Priya"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="priya@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  >
                    <option value="Plant Health Help">Plant Health & Care Troubleshooting</option>
                    <option value="Order Tracking">Order & Delivery Inquiry</option>
                    <option value="Corporate Bulk">Corporate Bulk Gifts & Green Wall Design</option>
                    <option value="Other">Other Query</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Your Message *</label>
                  <textarea
                    rows="5"
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your question or plant conditions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Plant Specialists</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
