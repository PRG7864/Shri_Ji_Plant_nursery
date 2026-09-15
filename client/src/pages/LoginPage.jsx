import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Leaf, Lock, Mail, ArrowRight, ShieldCheck, User } from 'lucide-react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = new URLSearchParams(location.search).get('redirect') || '/account';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(redirectPath);
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleFillDemo = (type) => {
    if (type === 'admin') {
      setEmail('admin@verdora.com');
      setPassword('admin123');
    } else {
      setEmail('customer@verdora.com');
      setPassword('customer123');
    }
  };

  return (
    <div className="bg-[#F5F1E7] min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-[#FCFBF7] rounded-[2.5rem] p-8 sm:p-10 border border-[#12372A]/10 shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#12372A] text-[#8FAF91] flex items-center justify-center mx-auto shadow-md">
            <Leaf className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#12372A]">
            Sign in to Verdora
          </h2>
          <p className="text-xs text-[#526057]">
            Access your saved botanical garden, track shipments, and consult plant doctors.
          </p>
        </div>

        {/* 1-Click Demo Buttons for Fast Testing */}
        <div className="p-3.5 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/8 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#657A55] block text-center">
            Quick 1-Click Demo Login
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleFillDemo('customer')}
              className="px-3 py-2 rounded-xl bg-white border border-[#12372A]/15 hover:border-[#1F513A] text-xs font-semibold text-[#12372A] flex items-center justify-center gap-1.5 transition-colors"
            >
              <User className="w-3.5 h-3.5 text-[#1F513A]" />
              <span>Customer Demo</span>
            </button>
            <button
              type="button"
              onClick={() => handleFillDemo('admin')}
              className="px-3 py-2 rounded-xl bg-white border border-[#12372A]/15 hover:border-[#1F513A] text-xs font-semibold text-[#12372A] flex items-center justify-center gap-1.5 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#A47752]" />
              <span>Admin Demo</span>
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-[#12372A] mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-[#12372A] mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-[#657A55] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
              />
            </div>
          </div>

          {error && <p className="text-xs font-semibold text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            {loading ? <span>Authenticating...</span> : <span>Sign In to Account</span>}
            <ArrowRight className="w-4 h-4 text-[#8FAF91]" />
          </button>
        </form>

        {/* Register Prompt */}
        <div className="text-center pt-2 border-t border-[#12372A]/10 text-xs text-[#526057]">
          <span>New plant parent? </span>
          <Link to="/register" className="font-bold text-[#1F513A] hover:underline">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
