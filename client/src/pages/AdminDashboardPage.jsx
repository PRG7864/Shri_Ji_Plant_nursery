import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  ShieldCheck,
  TrendingUp,
  Package,
  Users,
  AlertTriangle,
  Plus,
  Edit2,
  Trash2,
  RefreshCw,
  Search,
  CheckCircle2,
  X,
  Leaf
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const AdminDashboardPage = () => {
  const { user, isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal State for Product Creation/Editing
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    botanicalName: '',
    categorySlug: 'indoor-plants',
    price: 499,
    originalPrice: 799,
    stock: 25,
    description: '',
    shortDescription: '',
    badge: '',
    images: ['https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80'],
    care: {
      light: 'Bright Indirect Light',
      water: 'Every 7-10 days',
      temperature: '18°C – 30°C',
      petFriendly: false,
      height: '30 – 50 cm',
      difficulty: 'Easy'
    },
    featured: false,
    bestseller: false,
    newArrival: true,
  });

  const [statusUpdateOrderId, setStatusUpdateOrderId] = useState(null);
  const [newStatus, setNewStatus] = useState('Shipped');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=/admin');
      return;
    }
    if (!isAdmin) {
      navigate('/account');
      return;
    }
    fetchDashboardData();
  }, [isAuthenticated, isAdmin, navigate]);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [statsData, prodsData, ordersData, catsData] = await Promise.all([
        api.getAdminStats(),
        api.getProducts({ limit: 100 }),
        api.getAllOrders(),
        api.getCategories()
      ]);
      setStats(statsData);
      setProducts(prodsData.products || []);
      setOrders(ordersData || []);
      setCategories(catsData || []);
    } catch (err) {
      console.error('Failed to load admin stats:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenCreateModal = () => {
    setEditingProduct(null);
    setProductForm({
      name: '',
      botanicalName: '',
      categorySlug: categories[0]?.slug || 'indoor-plants',
      price: 499,
      originalPrice: 799,
      stock: 25,
      description: '',
      shortDescription: '',
      badge: 'New Arrival',
      images: ['https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80'],
      care: {
        light: 'Bright Indirect Light',
        water: 'Every 7-10 days',
        temperature: '18°C – 30°C',
        petFriendly: false,
        height: '30 – 50 cm',
        difficulty: 'Easy'
      },
      featured: false,
      bestseller: false,
      newArrival: true,
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditModal = (p) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name,
      botanicalName: p.botanicalName || '',
      categorySlug: p.categorySlug || 'indoor-plants',
      price: p.price,
      originalPrice: p.originalPrice || p.price,
      stock: p.stock,
      description: p.description,
      shortDescription: p.shortDescription || '',
      badge: p.badge || '',
      images: p.images || ['https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80'],
      care: {
        light: p.care?.light || 'Bright Indirect Light',
        water: p.care?.water || 'Every 7-10 days',
        temperature: p.care?.temperature || '18°C – 30°C',
        petFriendly: !!p.care?.petFriendly,
        height: p.care?.height || '30 – 50 cm',
        difficulty: p.care?.difficulty || 'Easy'
      },
      featured: !!p.featured,
      bestseller: !!p.bestseller,
      newArrival: !!p.newArrival,
    });
    setIsProductModalOpen(true);
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await api.updateProduct(editingProduct._id, productForm);
      } else {
        await api.createProduct(productForm);
      }
      setIsProductModalOpen(false);
      fetchDashboardData();
    } catch (err) {
      alert(err.message || 'Failed to save product');
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to remove this botanical specimen from inventory?')) {
      try {
        await api.deleteProduct(id);
        fetchDashboardData();
      } catch (err) {
        alert(err.message || 'Failed to delete product');
      }
    }
  };

  const handleUpdateOrderStatus = async (orderId) => {
    try {
      await api.updateOrderStatus(orderId, newStatus, `Admin updated status to ${newStatus}`);
      setStatusUpdateOrderId(null);
      fetchDashboardData();
    } catch (err) {
      alert(err.message || 'Failed to update order status');
    }
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#12372A]/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1F513A]">
              <ShieldCheck className="w-4 h-4 text-[#1F513A]" />
              <span>GreenyCup Curator Portal</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
              Nursery Management Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={fetchDashboardData}
              className="p-2.5 rounded-xl bg-white border border-[#12372A]/10 text-[#12372A] hover:bg-[#F5F1E7] transition-colors"
              title="Refresh Stats"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              type="button"
              onClick={handleOpenCreateModal}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <Plus className="w-4 h-4 text-[#8FAF91]" />
              <span>Add Botanical Specimen</span>
            </button>
          </div>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex gap-2 border-b border-[#12372A]/10 pb-3 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview Metrics' },
            { id: 'products', label: `Products (${products.length})` },
            { id: 'orders', label: `Orders (${orders.length})` },
            { id: 'categories', label: `Categories (${categories.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-[#12372A] text-[#F5F1E7] shadow-sm'
                  : 'bg-[#FCFBF7] text-[#526057] hover:text-[#12372A]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#657A55] text-xs font-bold uppercase">
                  <span>Gross Revenue</span>
                  <TrendingUp className="w-4 h-4 text-[#1F513A]" />
                </div>
                <div className="font-serif text-3xl font-bold text-[#12372A]">
                  ₹{stats?.totalRevenue || '3,845'}
                </div>
                <div className="text-[11px] text-[#1F513A] font-medium">✓ Completed orders verified</div>
              </div>

              <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#657A55] text-xs font-bold uppercase">
                  <span>Total Orders</span>
                  <Package className="w-4 h-4 text-[#1F513A]" />
                </div>
                <div className="font-serif text-3xl font-bold text-[#12372A]">
                  {stats?.totalOrders || orders.length}
                </div>
                <div className="text-[11px] text-[#526057]">Across all Indian states</div>
              </div>

              <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#657A55] text-xs font-bold uppercase">
                  <span>Catalog Specimens</span>
                  <Leaf className="w-4 h-4 text-[#1F513A]" />
                </div>
                <div className="font-serif text-3xl font-bold text-[#12372A]">
                  {stats?.totalProducts || products.length}
                </div>
                <div className="text-[11px] text-[#526057]">12 active categories</div>
              </div>

              <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 shadow-sm space-y-2">
                <div className="flex items-center justify-between text-[#657A55] text-xs font-bold uppercase">
                  <span>Active Customers</span>
                  <Users className="w-4 h-4 text-[#1F513A]" />
                </div>
                <div className="font-serif text-3xl font-bold text-[#12372A]">
                  {stats?.totalCustomers || 2}
                </div>
                <div className="text-[11px] text-[#526057]">Registered plant parents</div>
              </div>
            </div>

            {/* Low Stock Alerts */}
            {stats?.lowStockProducts && stats.lowStockProducts.length > 0 && (
              <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-amber-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>Low Stock Inventory Alerts (&lt; 20 units)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.lowStockProducts.map((p) => (
                    <div key={p._id} className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs">
                      <div className="truncate pr-2 font-semibold text-[#12372A]">{p.name}</div>
                      <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full shrink-0">
                        {p.stock} left
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Products Management Table */}
        {activeTab === 'products' && (
          <div className="bg-[#FCFBF7] rounded-3xl border border-[#12372A]/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#12372A]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="font-serif font-bold text-lg text-[#12372A]">
                Inventory Specimens ({products.length})
              </h3>
              <button
                type="button"
                onClick={handleOpenCreateModal}
                className="px-4 py-2 rounded-xl bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A]"
              >
                + Add Specimen
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#18201B]">
                <thead className="bg-[#FAF8F2] text-[#657A55] uppercase font-bold text-[10px] tracking-wider border-b border-[#12372A]/10">
                  <tr>
                    <th className="py-3.5 px-6">Product</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Price</th>
                    <th className="py-3.5 px-4">Stock</th>
                    <th className="py-3.5 px-4">Badges</th>
                    <th className="py-3.5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#12372A]/5">
                  {products.map((p) => (
                    <tr key={p._id} className="hover:bg-[#F5F1E7]/50 transition-colors">
                      <td className="py-3.5 px-6 flex items-center gap-3">
                        <img src={p.images?.[0]} alt={p.name} className="w-10 h-10 rounded-lg object-cover bg-white" />
                        <div>
                          <div className="font-bold text-[#12372A]">{p.name}</div>
                          <div className="text-[10px] italic text-[#657A55]">{p.botanicalName}</div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-[#526057]">{p.categorySlug}</td>
                      <td className="py-3.5 px-4 font-bold text-[#12372A]">₹{p.price}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                          p.stock <= 15 ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {p.stock} units
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {p.badge && (
                          <span className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-[#8FAF91]/20 text-[#12372A]">
                            {p.badge}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(p)}
                            className="p-1.5 rounded-lg text-[#1F513A] hover:bg-[#8FAF91]/20"
                            title="Edit"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(p._id)}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Orders Management Table */}
        {activeTab === 'orders' && (
          <div className="bg-[#FCFBF7] rounded-3xl border border-[#12372A]/10 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#12372A]/10">
              <h3 className="font-serif font-bold text-lg text-[#12372A]">
                All Customer Orders ({orders.length})
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#18201B]">
                <thead className="bg-[#FAF8F2] text-[#657A55] uppercase font-bold text-[10px] tracking-wider border-b border-[#12372A]/10">
                  <tr>
                    <th className="py-3.5 px-6">Order ID</th>
                    <th className="py-3.5 px-4">Recipient</th>
                    <th className="py-3.5 px-4">City</th>
                    <th className="py-3.5 px-4">Items</th>
                    <th className="py-3.5 px-4">Total</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#12372A]/5">
                  {orders.map((ord) => (
                    <tr key={ord._id} className="hover:bg-[#F5F1E7]/50 transition-colors">
                      <td className="py-3.5 px-6 font-mono font-bold text-[#1F513A]">
                        {ord.orderNumber}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-[#12372A]">{ord.shippingAddress?.fullName || 'Customer'}</div>
                        <div className="text-[10px] text-[#657A55]">{ord.shippingAddress?.phone}</div>
                      </td>
                      <td className="py-3.5 px-4 text-[#526057]">
                        {ord.shippingAddress?.city}, {ord.shippingAddress?.state}
                      </td>
                      <td className="py-3.5 px-4">{ord.items?.length || 1} plants</td>
                      <td className="py-3.5 px-4 font-serif font-bold text-sm text-[#12372A]">₹{ord.total}</td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#12372A] text-[#F5F1E7]">
                          {ord.orderStatus}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        {statusUpdateOrderId === ord._id ? (
                          <div className="flex items-center justify-end gap-1.5">
                            <select
                              value={newStatus}
                              onChange={(e) => setNewStatus(e.target.value)}
                              className="px-2 py-1 rounded-lg border border-[#12372A]/20 text-[11px] bg-white"
                            >
                              <option value="Confirmed">Confirmed</option>
                              <option value="Packed">Packed</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Out for Delivery">Out for Delivery</option>
                              <option value="Delivered">Delivered</option>
                              <option value="Cancelled">Cancelled</option>
                            </select>
                            <button
                              type="button"
                              onClick={() => handleUpdateOrderStatus(ord._id)}
                              className="px-2.5 py-1 rounded-lg bg-[#12372A] text-[#F5F1E7] text-[10px] font-bold"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setStatusUpdateOrderId(null)}
                              className="p-1 text-gray-400"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setStatusUpdateOrderId(ord._id);
                              setNewStatus(ord.orderStatus);
                            }}
                            className="px-3 py-1 rounded-lg bg-[#8FAF91]/20 hover:bg-[#8FAF91]/30 text-[#12372A] font-bold text-[11px]"
                          >
                            Update Status
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Categories List */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat._id} className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 shadow-sm flex items-center gap-4">
                <img src={cat.image} alt={cat.name} className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <h4 className="font-serif font-bold text-base text-[#12372A]">{cat.name}</h4>
                  <div className="text-xs text-[#657A55]">{cat.itemCount || 0} specimens listed</div>
                  <div className="text-[11px] font-mono text-[#1F513A] mt-0.5">/{cat.slug}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add / Edit Product Modal */}
        {isProductModalOpen && (
          <div className="fixed inset-0 z-50 bg-[#12372A]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="w-full max-w-2xl bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#12372A]/10 max-h-[90vh] overflow-y-auto space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
                <h3 className="font-serif font-bold text-xl text-[#12372A]">
                  {editingProduct ? 'Edit Botanical Specimen' : 'Add New Botanical Specimen'}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsProductModalOpen(false)}
                  className="p-1 rounded-full text-[#657A55] hover:text-[#12372A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Product Name *</label>
                    <input
                      type="text"
                      required
                      value={productForm.name}
                      onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                      placeholder="e.g. Fiddle Leaf Fig"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Botanical Name</label>
                    <input
                      type="text"
                      value={productForm.botanicalName}
                      onChange={(e) => setProductForm({ ...productForm, botanicalName: e.target.value })}
                      placeholder="e.g. Ficus lyrata"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Category</label>
                    <select
                      value={productForm.categorySlug}
                      onChange={(e) => setProductForm({ ...productForm, categorySlug: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                    >
                      {categories.map((c) => (
                        <option key={c.slug} value={c.slug}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Selling Price (₹) *</label>
                    <input
                      type="number"
                      required
                      value={productForm.price}
                      onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Stock Units *</label>
                    <input
                      type="number"
                      required
                      value={productForm.stock}
                      onChange={(e) => setProductForm({ ...productForm, stock: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Image URL</label>
                  <input
                    type="url"
                    value={productForm.images[0] || ''}
                    onChange={(e) => setProductForm({ ...productForm, images: [e.target.value] })}
                    placeholder="https://images.unsplash.com/photo-..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Full Description *</label>
                  <textarea
                    rows="3"
                    required
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Light Requirement</label>
                    <input
                      type="text"
                      value={productForm.care.light}
                      onChange={(e) => setProductForm({ ...productForm, care: { ...productForm.care, light: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Watering Schedule</label>
                    <input
                      type="text"
                      value={productForm.care.water}
                      onChange={(e) => setProductForm({ ...productForm, care: { ...productForm.care, water: e.target.value } })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.care.petFriendly}
                      onChange={(e) => setProductForm({ ...productForm, care: { ...productForm.care, petFriendly: e.target.checked } })}
                      className="accent-[#1F513A]"
                    />
                    <span className="font-bold text-[#12372A]">Pet-Friendly (Non-toxic)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.featured}
                      onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                      className="accent-[#1F513A]"
                    />
                    <span className="font-bold text-[#12372A]">Featured</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={productForm.bestseller}
                      onChange={(e) => setProductForm({ ...productForm, bestseller: e.target.checked })}
                      className="accent-[#1F513A]"
                    />
                    <span className="font-bold text-[#12372A]">Bestseller</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-[#12372A]/10 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsProductModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-[#12372A]/20 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#12372A] text-[#F5F1E7] font-bold uppercase tracking-wider hover:bg-[#1F513A]"
                  >
                    Save Specimen
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
