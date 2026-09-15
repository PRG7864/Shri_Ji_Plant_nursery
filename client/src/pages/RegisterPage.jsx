import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Leaf, Lock, Mail, User, Phone, ArrowRight } from 'lucide-react';

const RegisterPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    try {
      await register({
        name: form.name,
        email: form.email,
        phone: form.phone,
        password: form.password,
      });
      navigate('/account');
    } catch (err) {
      setError(err.message || 'Failed to create account');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F5F1E7] min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[#FCFBF7] rounded-[2.5rem] p-8 sm:p-10 border border-[#12372A]/10 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#12372A] text-[#8FAF91] flex items-center justify-center mx-auto shadow-md">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
            Create an Account
          </h2>
          <p className="text-xs text-[#526057]">
            Join the GreenyCup botanical community and get 10% off your first nursery order.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
          <div>
            <label className="block font-bold text-[#12372A] mb-1">Full Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Aarav Mehta"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#12372A] mb-1">Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="aarav@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#12372A] mb-1">Phone Number</label>
            <div className="relative">
              <Phone className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#12372A] mb-1">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="At least 6 characters"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#12372A] mb-1">Confirm Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={form.confirmPassword}
                onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                placeholder="Re-enter password"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 mt-2"
          >
            {loading ? <span>Creating Account...</span> : <span>Register as Plant Parent</span>}
            <ArrowRight className="w-4 h-4 text-[#8FAF91]" />
          </button>
        </form>

        <div className="text-center pt-2 border-t border-[#12372A]/10 text-xs text-[#526057]">
          <span>Already have an account? </span>
          <Link to="/login" className="font-bold text-[#1F513A] hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
