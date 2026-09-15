import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import {
  User,
  Package,
  MapPin,
  Clock,
  CheckCircle2,
  Truck,
  ShieldCheck,
  LogOut,
  ChevronRight,
  Leaf
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const AccountPage = () => {
  const { user, isAuthenticated, logout, updateProfile } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'profile');
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && !localStorage.getItem('greenycup_token')) {
      navigate('/login?redirect=/account');
      return;
    }
    if (user) {
      setName(user.name || '');
      setPhone(user.phone || '');
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await api.getMyOrders();
        setOrders(data || []);
      } catch (err) {
        console.error('Failed to load user orders:', err);
      } finally {
        setLoadingOrders(false);
      }
    };
    if (isAuthenticated) fetchOrders();
  }, [isAuthenticated]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile({ name, phone });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (err) {
      alert(err.message || 'Failed to update profile');
    }
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#12372A]/10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
              Botanical Account
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#12372A]">
              Welcome, {user?.name || 'Plant Parent'}
            </h1>
            <p className="text-xs text-[#526057]">{user?.email}</p>
          </div>

          <button
            type="button"
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-red-200 text-red-600 text-xs font-bold hover:bg-red-50 transition-colors self-start sm:self-auto"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

        {/* Account Tabs */}
        <div className="flex gap-3 border-b border-[#12372A]/10 pb-3 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'profile'
                ? 'bg-[#12372A] text-[#F5F1E7] shadow-sm'
                : 'bg-[#FCFBF7] text-[#526057] hover:text-[#12372A]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>My Profile</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              activeTab === 'orders'
                ? 'bg-[#12372A] text-[#F5F1E7] shadow-sm'
                : 'bg-[#FCFBF7] text-[#526057] hover:text-[#12372A]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>My Orders & Tracking ({orders.length})</span>
          </button>
        </div>

        {/* Tab 1: Profile & Address */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-xl text-[#12372A]">
                Personal Information
              </h3>

              <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white font-medium focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Email (Cannot be changed)</label>
                  <input
                    type="email"
                    disabled
                    value={user?.email || ''}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/10 bg-gray-50 text-gray-500 font-mono"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white font-medium focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                {saveSuccess && (
                  <p className="text-xs font-bold text-emerald-700">✓ Profile updated successfully!</p>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#12372A] text-[#F5F1E7] font-bold uppercase tracking-wider hover:bg-[#1F513A] transition-colors"
                >
                  Save Profile Changes
                </button>
              </form>
            </div>

            {/* Saved Addresses */}
            <div className="md:col-span-5 bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[#12372A]">
                <MapPin className="w-5 h-5 text-[#1F513A]" />
                <h3 className="font-serif font-bold text-xl">Saved Addresses</h3>
              </div>

              {user?.addresses && user.addresses.length > 0 ? (
                user.addresses.map((addr, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/5 text-xs text-[#526057] space-y-1">
                    <strong className="text-[#12372A] block">{addr.fullName} ({addr.phone})</strong>
                    <p>{addr.addressLine1}</p>
                    {addr.addressLine2 && <p>{addr.addressLine2}</p>}
                    <p>{addr.city}, {addr.state} - {addr.pincode}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-[#526057]">
                  No saved delivery addresses yet. Addresses are saved during your checkout.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Orders & Live Timeline Tracking */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {loadingOrders ? (
              <div className="p-12 text-center text-xs text-[#526057] bg-[#FCFBF7] rounded-3xl">
                Loading order history...
              </div>
            ) : orders.length === 0 ? (
              <div className="p-12 text-center bg-[#FCFBF7] rounded-3xl border border-[#12372A]/10 space-y-4">
                <Package className="w-10 h-10 text-[#657A55] mx-auto" />
                <h3 className="font-serif text-xl font-bold text-[#12372A]">No Orders Placed Yet</h3>
                <p className="text-xs text-[#526057]">Your botanical order history will appear here with live tracking.</p>
                <Link to="/shop" className="inline-block px-6 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase">
                  Start Your Garden →
                </Link>
              </div>
            ) : (
              orders.map((ord) => (
                <div
                  key={ord._id}
                  className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 shadow-sm space-y-6"
                >
                  {/* Order Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#12372A]/10">
                    <div>
                      <span className="font-mono text-xs font-bold text-[#1F513A] bg-[#8FAF91]/20 px-2.5 py-1 rounded-md">
                        Order #{ord.orderNumber}
                      </span>
                      <div className="text-xs text-[#526057] mt-1.5">
                        Placed on {new Date(ord.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#12372A] text-[#F5F1E7]">
                        {ord.orderStatus}
                      </span>
                      <span className="font-serif font-bold text-lg text-[#12372A]">
                        ₹{ord.total}
                      </span>
                    </div>
                  </div>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ord.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FAF8F2]">
                        <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl object-cover bg-white shrink-0" />
                        <div className="min-w-0 flex-1 text-xs">
                          <h4 className="font-serif font-bold text-[#12372A] truncate">{item.name}</h4>
                          <div className="text-[#526057] text-[11px]">Size: {item.size} • Qty: {item.quantity}</div>
                          <div className="font-bold text-[#18201B]">₹{item.price * item.quantity}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Live Tracking Timeline Stepper */}
                  <div className="pt-4 border-t border-[#12372A]/10 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
                      Live Transit Timeline
                    </h4>
                    <div className="space-y-3">
                      {ord.trackingTimeline && ord.trackingTimeline.length > 0 ? (
                        ord.trackingTimeline.map((step, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-3 text-xs">
                            <div className="w-6 h-6 rounded-full bg-[#1F513A] text-[#8FAF91] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <div className="font-bold text-[#12372A]">{step.status}</div>
                              <div className="text-[#526057]">{step.message}</div>
                              <div className="text-[10px] text-[#657A55] font-mono mt-0.5">
                                {new Date(step.timestamp).toLocaleString()}
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-[#526057]">Order confirmed by nursery. Preparing for dispatch.</div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
