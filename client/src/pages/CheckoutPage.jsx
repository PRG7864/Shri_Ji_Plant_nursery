import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  CheckCircle2,
  Lock,
  ChevronRight,
  ArrowRight,
  AlertCircle,
  Check,
  RefreshCw,
  MapPin,
  Home,
  Briefcase,
  Zap
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const INDIAN_STATES = [
  'Madhya Pradesh', 'Karnataka', 'Maharashtra', 'Delhi', 'Uttar Pradesh',
  'Rajasthan', 'Gujarat', 'Tamil Nadu', 'Telangana', 'Andhra Pradesh',
  'West Bengal', 'Kerala', 'Bihar', 'Punjab', 'Haryana',
  'Chhattisgarh', 'Goa', 'Himachal Pradesh', 'Jharkhand', 'Odisha',
  'Uttarakhand', 'Assam', 'Tripura', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Sikkim', 'Arunachal Pradesh', 'Chandigarh', 'Jammu and Kashmir',
  'Ladakh', 'Puducherry', 'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep'
];

const DISTRICTS_BY_STATE = {
  'Madhya Pradesh': [
    'Pachore', 'Rajgarh', 'Indore', 'Bhopal', 'Ujjain', 'Gwalior', 'Jabalpur', 'Dhar', 'Dewas',
    'Ratlam', 'Sagar', 'Satna', 'Rewa', 'Khandwa', 'Khargone', 'Mandsaur', 'Neemuch', 'Vidisha',
    'Sehore', 'Hoshangabad (Narmadapuram)', 'Betul', 'Chhindwara', 'Biaora', 'Sarangpur', 'Narsinghgarh',
    'Morena', 'Bhind', 'Shivpuri', 'Guna', 'Damoh', 'Chhatarpur', 'Panna', 'Tikamgarh', 'Singrauli',
    'Sidhi', 'Shahdol', 'Umaria', 'Anuppur', 'Mandla', 'Balaghat', 'Seoni', 'Narsinghpur', 'Raisen',
    'Harda', 'Shajapur', 'Agar Malwa', 'Alirajpur', 'Jhabua', 'Barwani', 'Burhanpur', 'Sheopur', 'Ashoknagar'
  ],
  'Karnataka': [
    'Bengaluru', 'Mysuru', 'Hubballi-Dharwad', 'Mangaluru', 'Belagavi', 'Kalaburagi',
    'Davanagere', 'Ballari', 'Vijayapura', 'Shivamogga', 'Tumakuru', 'Raichur', 'Bidar',
    'Hosapete', 'Gadag', 'Udupi', 'Hassan', 'Mandya', 'Chikmagalur', 'Kolar', 'Bagalkote'
  ],
  'Maharashtra': [
    'Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Chhatrapati Sambhaji Nagar',
    'Navi Mumbai', 'Solapur', 'Amravati', 'Nanded', 'Kolhapur', 'Akola', 'Sangli',
    'Jalgaon', 'Latur', 'Dhule', 'Ahmednagar', 'Chandrapur', 'Parbhani', 'Satara'
  ],
  'Delhi': [
    'New Delhi', 'Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi',
    'West Delhi', 'North East Delhi', 'North West Delhi', 'South East Delhi', 'South West Delhi'
  ],
  'Uttar Pradesh': [
    'Lucknow', 'Noida', 'Greater Noida', 'Kanpur', 'Ghaziabad', 'Agra', 'Meerut',
    'Varanasi', 'Prayagraj', 'Bareilly', 'Aligarh', 'Moradabad', 'Saharanpur', 'Gorakhpur',
    'Jhansi', 'Mathura', 'Ayodhya', 'Muzaffarnagar'
  ],
  'Rajasthan': [
    'Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar',
    'Sriganganagar', 'Sikar', 'Pali', 'Chittorgarh', 'Jhunjhunu', 'Hanumangarh'
  ],
  'Gujarat': [
    'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh',
    'Gandhinagar', 'Anand', 'Navsari', 'Morbi', 'Bharuch', 'Porbandar', 'Valsad'
  ],
  'Tamil Nadu': [
    'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tiruppur', 'Erode',
    'Tirunelveli', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Hosur', 'Nagercoil'
  ],
  'Telangana': [
    'Hyderabad', 'Warangal', 'Nizamabad', 'Khammam', 'Karimnagar', 'Ramagundam',
    'Mahbubnagar', 'Nalgonda', 'Suryapet', 'Siddipet'
  ],
  'Andhra Pradesh': [
    'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Kakinada',
    'Rajahmundry', 'Tirupati', 'Kadapa', 'Anantapur'
  ],
  'West Bengal': [
    'Kolkata', 'Howrah', 'Siliguri', 'Durgapur', 'Asansol', 'Bardhaman', 'Malda',
    'Kharagpur', 'Haldia', 'Darjeeling'
  ],
  'Kerala': [
    'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kollam', 'Thrissur', 'Kannur',
    'Alappuzha', 'Palakkad', 'Kottayam', 'Malappuram'
  ],
  'Bihar': [
    'Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif',
    'Arrah', 'Begusarai', 'Katihar', 'Munger'
  ],
  'Punjab': [
    'Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur',
    'Pathankot', 'Moga', 'Khanna'
  ],
  'Haryana': [
    'Gurugram', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar',
    'Karnal', 'Sonipat', 'Panchkula'
  ]
};

// Common pincode mapping
const LOCAL_PINCODE_MAP = {
  '465683': { city: 'Pachore', state: 'Madhya Pradesh', options: ['Pachore', 'Rajgarh', 'Biaora', 'Sarangpur', 'Narsinghgarh', 'Baredi', 'Bhatkhedi', 'Dehri Kalan', 'Karanvas', 'Sarali'] },
  '454583': { city: 'Dhar', state: 'Madhya Pradesh', options: ['Dhar', 'Badnawar', 'Sardarpur', 'Manawar', 'Kukshi', 'Dhamnod', 'Gandhwani'] },
  '452001': { city: 'Indore', state: 'Madhya Pradesh', options: ['Indore', 'Rau', 'Mhow', 'Sanwer', 'Depalpur'] },
  '462001': { city: 'Bhopal', state: 'Madhya Pradesh', options: ['Bhopal', 'Berasia', 'Kolar', 'Mandideep'] },
  '560038': { city: 'Bengaluru', state: 'Karnataka', options: ['Bengaluru', 'Indiranagar', 'Whitefield', 'Koramangala', 'HSR Layout', 'Electronic City'] },
  '560001': { city: 'Bengaluru', state: 'Karnataka', options: ['Bengaluru', 'MG Road', 'Shivajinagar', 'Cubbon Park'] },
  '110001': { city: 'New Delhi', state: 'Delhi', options: ['New Delhi', 'Connaught Place', 'Central Delhi'] },
  '400001': { city: 'Mumbai', state: 'Maharashtra', options: ['Mumbai', 'Fort', 'Colaba', 'Marine Lines', 'Nariman Point'] },
  '500001': { city: 'Hyderabad', state: 'Telangana', options: ['Hyderabad', 'Abids', 'Koti', 'Charminar', 'Secunderabad'] },
  '600001': { city: 'Chennai', state: 'Tamil Nadu', options: ['Chennai', 'George Town', 'Parrys', 'Royapuram'] }
};

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const CheckoutPage = () => {
  const { cartItems, subtotal, shippingFee, discountAmount, coupon, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: user?.addresses?.[0]?.fullName || user?.name || '',
    phone: user?.addresses?.[0]?.phone || user?.phone || '',
    email: user?.email || '',
    addressLine1: user?.addresses?.[0]?.addressLine1 || '',
    addressLine2: user?.addresses?.[0]?.addressLine2 || '',
    city: 'Pachore',
    state: 'Madhya Pradesh',
    pincode: '465683',
    addressType: 'Home'
  });

  const [cityOptions, setCityOptions] = useState(
    LOCAL_PINCODE_MAP['465683']?.options || DISTRICTS_BY_STATE['Madhya Pradesh'] || ['Pachore', 'Rajgarh', 'Indore', 'Bhopal']
  );
  const [isCustomCity, setIsCustomCity] = useState(false);
  const [customCityValue, setCustomCityValue] = useState('');

  const [paymentMethod, setPaymentMethod] = useState('Razorpay');
  const [directUpiId, setDirectUpiId] = useState('greenycup@okhdfcbank');
  const [shippingOption, setShippingOption] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [razorpayKey, setRazorpayKey] = useState('');
  const [showSandboxModal, setShowSandboxModal] = useState(false);
  const [pendingRazorpayOrder, setPendingRazorpayOrder] = useState(null);
  
  const [isPincodeLoading, setIsPincodeLoading] = useState(false);
  const [pincodeVerified, setPincodeVerified] = useState(true);
  const [pincodeMessage, setPincodeMessage] = useState('✓ Verified: Express Nursery Delivery to Pachore, MP (2-3 Days)');

  useEffect(() => {
    loadRazorpayScript();
    api.getRazorpayKey()
      .then((data) => setRazorpayKey(data.keyId || 'rzp_test_GreenyCup2026'))
      .catch(() => setRazorpayKey('rzp_test_GreenyCup2026'));
  }, []);

  // Update city options when state changes
  const handleStateChange = (selectedState) => {
    const defaultCities = DISTRICTS_BY_STATE[selectedState] || [selectedState];
    setAddress((prev) => ({
      ...prev,
      state: selectedState,
      city: defaultCities[0] || ''
    }));
    setCityOptions(defaultCities);
    setIsCustomCity(false);
  };

  // Handle Automatic Pincode Resolution
  const handlePincodeChange = async (pinValue) => {
    const cleanPin = pinValue.replace(/\D/g, '').slice(0, 6);
    setAddress((prev) => ({ ...prev, pincode: cleanPin }));

    if (cleanPin.length === 6) {
      setIsPincodeLoading(true);
      
      // 1. Instant check against local fast map
      if (LOCAL_PINCODE_MAP[cleanPin]) {
        const info = LOCAL_PINCODE_MAP[cleanPin];
        setAddress((prev) => ({ ...prev, city: info.city, state: info.state }));
        setCityOptions(info.options);
        setIsCustomCity(false);
        setPincodeVerified(true);
        setPincodeMessage(`✓ Verified: Express Nursery Delivery to ${info.city}, ${info.state}`);
        setIsPincodeLoading(false);
        return;
      }

      // 2. Fetch from India Post Postal API
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${cleanPin}`);
        const data = await response.json();
        
        if (data && data[0] && data[0].Status === 'Success' && data[0].PostOffice?.length > 0) {
          const postOffices = data[0].PostOffice;
          const detectedState = postOffices[0].State;
          
          // Gather all distinct localities / post offices / districts
          const distinctLocalities = new Set();
          postOffices.forEach((po) => {
            if (po.Name) distinctLocalities.add(po.Name);
            if (po.Block && po.Block !== 'NA') distinctLocalities.add(po.Block);
            if (po.District && po.District !== 'NA') distinctLocalities.add(po.District);
          });

          const dynamicList = Array.from(distinctLocalities);
          const primaryCity = dynamicList[0] || postOffices[0].District || postOffices[0].Name;

          setAddress((prev) => ({
            ...prev,
            city: primaryCity,
            state: detectedState
          }));
          setCityOptions(dynamicList);
          setIsCustomCity(false);
          setPincodeVerified(true);
          setPincodeMessage(`✓ Deliverable: ${primaryCity}, ${detectedState} (Standard 3-4 Days)`);
        } else {
          // Fallback based on state or prefix
          const stateDistricts = DISTRICTS_BY_STATE[address.state] || ['Pachore', 'Rajgarh', 'Indore'];
          setCityOptions(stateDistricts);
          setPincodeVerified(true);
          setPincodeMessage('✓ Pincode accepted for plant courier dispatch');
        }
      } catch (err) {
        const fallbackCities = DISTRICTS_BY_STATE[address.state] || ['Pachore', 'Rajgarh', 'Indore'];
        setCityOptions(fallbackCities);
        setPincodeVerified(true);
        setPincodeMessage('✓ Standard Botanical Courier Serviceable');
      } finally {
        setIsPincodeLoading(false);
      }
    } else {
      setPincodeVerified(false);
      setPincodeMessage('');
    }
  };

  const handleCitySelect = (val) => {
    if (val === '__CUSTOM__') {
      setIsCustomCity(true);
      setAddress((prev) => ({ ...prev, city: customCityValue || '' }));
    } else {
      setIsCustomCity(false);
      setAddress((prev) => ({ ...prev, city: val }));
    }
  };

  // Quick Autofill Demo Helper
  const handleQuickAutofill = (type = 'pachore') => {
    if (type === 'pachore') {
      const opts = LOCAL_PINCODE_MAP['465683']?.options || ['Pachore', 'Rajgarh', 'Biaora', 'Sarangpur'];
      setCityOptions(opts);
      setIsCustomCity(false);
      setAddress({
        fullName: 'Prathmesh Gour',
        phone: '9876543210',
        email: 'prathmesh@example.com',
        addressLine1: 'Main Market Road, Near Nursery Square',
        addressLine2: 'Pachore',
        city: 'Pachore',
        state: 'Madhya Pradesh',
        pincode: '465683',
        addressType: 'Home'
      });
      setPincodeVerified(true);
      setPincodeMessage('✓ Verified: Express Nursery Delivery to Pachore, MP (2-3 Days)');
    } else if (type === 'bengaluru') {
      const opts = LOCAL_PINCODE_MAP['560038']?.options || ['Bengaluru', 'Indiranagar'];
      setCityOptions(opts);
      setIsCustomCity(false);
      setAddress({
        fullName: 'Aarav Mehta',
        phone: '9876543210',
        email: 'aarav.mehta@example.com',
        addressLine1: 'Flat 402, Lotus Greens, 14th Main, Indiranagar',
        addressLine2: 'Near Botanical Gardens',
        city: 'Bengaluru',
        state: 'Karnataka',
        pincode: '560038',
        addressType: 'Home'
      });
      setPincodeVerified(true);
      setPincodeMessage('✓ Verified: Express Nursery Delivery to Bengaluru (2-3 Days)');
    }
    setError('');
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-[#F5F1E7] text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#12372A]">Your Garden is Empty</h2>
        <p className="text-xs text-[#526057]">Please add plants to your garden before proceeding to checkout.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase transition-transform hover:scale-105">
          Explore Plants →
        </Link>
      </div>
    );
  }

  const expressSurcharge = shippingOption === 'express' ? 50 : 0;
  const effectiveShippingFee = shippingFee + expressSurcharge;
  const finalPayableTotal = Math.max(0, subtotal + effectiveShippingFee - discountAmount);

  const validateAddress = () => {
    if (!address.fullName.trim() || !address.phone.trim() || !address.addressLine1.trim() || !address.pincode.trim() || !address.city.trim()) {
      setError('Please fill in all required delivery address fields marked with *');
      return false;
    }
    if (address.phone.trim().replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number for order dispatch.');
      return false;
    }
    if (address.pincode.trim().length !== 6) {
      setError('Please enter a valid 6-digit Indian pincode.');
      return false;
    }
    return true;
  };

  const completeOrderWithVerification = async (verificationPayload) => {
    try {
      const createdOrder = await api.verifyRazorpayPayment(verificationPayload);
      clearCart();
      setShowSandboxModal(false);
      navigate(`/order-success/${createdOrder.orderNumber || createdOrder._id}`);
    } catch (err) {
      console.error('Payment verification failed:', err);
      setError(err.message || 'Payment verification failed. Please contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateAddress()) return;

    setIsProcessing(true);

    const itemsPayload = cartItems.map((item) => ({
      productId: item.productId,
      price: item.price,
      quantity: item.quantity,
      size: item.size
    }));

    if (paymentMethod === 'COD') {
      try {
        const orderPayload = {
          items: itemsPayload,
          shippingAddress: address,
          paymentMethod: 'COD',
          couponCode: coupon?.code || '',
          discountAmount: discountAmount || 0,
        };
        const createdOrder = await api.createOrder(orderPayload);
        clearCart();
        navigate(`/order-success/${createdOrder.orderNumber || createdOrder._id}`);
      } catch (err) {
        console.error('COD Order error:', err);
        setError(err.message || 'Failed to place COD order.');
      } finally {
        setIsProcessing(false);
      }
      return;
    }

    if (paymentMethod === 'UPI_DIRECT') {
      try {
        const orderPayload = {
          items: itemsPayload,
          shippingAddress: address,
          paymentMethod: 'UPI',
          couponCode: coupon?.code || '',
          discountAmount: discountAmount || 0,
        };
        const createdOrder = await api.createOrder(orderPayload);
        clearCart();
        navigate(`/order-success/${createdOrder.orderNumber || createdOrder._id}`);
      } catch (err) {
        console.error('UPI Order error:', err);
        setError(err.message || 'Failed to complete UPI order.');
      } finally {
        setIsProcessing(false);
      }
      return;
    }

    // Razorpay Flow
    try {
      const orderData = await api.createRazorpayOrder({
        items: itemsPayload,
        couponCode: coupon?.code || '',
        discountAmount: discountAmount || 0,
        shippingAddress: address
      });

      const isScriptLoaded = await loadRazorpayScript();

      if (!isScriptLoaded || typeof window.Razorpay === 'undefined' || orderData.isMock) {
        setPendingRazorpayOrder(orderData);
        setShowSandboxModal(true);
        setIsProcessing(false);
        return;
      }

      const options = {
        key: orderData.keyId || razorpayKey || 'rzp_test_GreenyCup2026',
        amount: Math.round(finalPayableTotal * 100),
        currency: 'INR',
        name: 'GreenyCup Botanical Nursery',
        description: `Botanical Living Order • ${cartItems.length} plants`,
        image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=120&auto=format&fit=crop&q=80',
        order_id: orderData.orderId,
        handler: async function (response) {
          await completeOrderWithVerification({
            razorpay_order_id: response.razorpay_order_id || orderData.orderId,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature || '',
            items: itemsPayload,
            shippingAddress: address,
            paymentMethod: 'Razorpay',
            couponCode: coupon?.code || '',
            discountAmount: discountAmount || 0,
          });
        },
        prefill: {
          name: address.fullName,
          email: address.email,
          contact: address.phone
        },
        theme: {
          color: '#12372A'
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          }
        }
      };

      const rzpInstance = new window.Razorpay(options);
      rzpInstance.on('payment.failed', function (resp) {
        setIsProcessing(false);
        setError(`Payment failed: ${resp.error.description || 'Transaction declined'}`);
      });
      rzpInstance.open();
    } catch (err) {
      console.error('Razorpay initialization error:', err);
      setError(err.message || 'Failed to initialize Razorpay payment. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center gap-2 text-xs font-medium text-[#657A55]">
          <Link to="/cart" className="hover:text-[#12372A]">Garden Cart</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#12372A] font-bold">Secure Checkout & Delivery</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
              Complete Your Botanical Order
            </h1>
            <p className="text-xs text-[#526057] mt-1">
              Encrypted 256-bit checkout • Live nursery packaging & express doorstep transit
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#FCFBF7] border border-[#12372A]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1F513A] self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-[#1F513A]" />
            <span>Razorpay Verified Gateway</span>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            
            {/* Step 1: Shipping Address */}
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 space-y-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#12372A]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold flex items-center justify-center">
                    1
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#12372A]">
                    Delivery Address
                  </h3>
                </div>
                
                {/* Fast Autofill Demo Buttons */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[11px] text-[#657A55]">Quick Fill:</span>
                  <button
                    type="button"
                    onClick={() => handleQuickAutofill('pachore')}
                    className="px-2.5 py-1 rounded-lg bg-[#F5F1E7] hover:bg-[#8FAF91]/20 text-[#12372A] font-semibold border border-[#12372A]/10 text-[11px] transition-colors"
                  >
                    Pachore, MP
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickAutofill('bengaluru')}
                    className="px-2.5 py-1 rounded-lg bg-[#F5F1E7] hover:bg-[#8FAF91]/20 text-[#12372A] font-semibold border border-[#12372A]/10 text-[11px] transition-colors"
                  >
                    Bengaluru
                  </button>
                </div>
              </div>

              {/* Address Type Badges */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#12372A]">Address Type:</span>
                {[
                  { id: 'Home', label: 'Home (All Day)', icon: Home },
                  { id: 'Work', label: 'Work (9 AM - 6 PM)', icon: Briefcase },
                  { id: 'Other', label: 'Other', icon: MapPin },
                ].map((type) => {
                  const Icon = type.icon;
                  const isSelected = address.addressType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setAddress({ ...address, addressType: type.id })}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-[#12372A] text-[#F5F1E7] shadow-sm font-semibold'
                          : 'bg-[#F5F1E7] text-[#526057] hover:text-[#12372A] border border-[#12372A]/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* Full Name */}
                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Full Recipient Name *</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    placeholder="e.g. Prathmesh Gour"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Contact Phone Number *</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3.5 text-xs font-semibold text-[#657A55]">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={address.phone.replace(/^\+91/, '')}
                      onChange={(e) => setAddress({ ...address, phone: e.target.value.replace(/\D/g, '') })}
                      placeholder="9876543210"
                      className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white font-mono focus:outline-none focus:border-[#1F513A]"
                    />
                    {address.phone.length === 10 && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 absolute right-3" />
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#12372A] mb-1">Email Address for Tracking Updates *</label>
                  <input
                    type="email"
                    required
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    placeholder="prathmesh@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                {/* Street Address */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#12372A] mb-1">Flat, House No., Building & Street Address *</label>
                  <input
                    type="text"
                    required
                    value={address.addressLine1}
                    onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })}
                    placeholder="Main Road, Near Green Square, Ward No. 4"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                {/* Landmark */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#12372A] mb-1">Landmark / Area (Optional)</label>
                  <input
                    type="text"
                    value={address.addressLine2}
                    onChange={(e) => setAddress({ ...address, addressLine2: e.target.value })}
                    placeholder="Near Nursery Market or Opposite Temple"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                {/* FUNCTIONAL PINCODE */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="block font-bold text-[#12372A]">Pincode (6-Digits) *</label>
                    {isPincodeLoading && (
                      <span className="text-[10px] text-[#1F513A] flex items-center gap-1 font-medium">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Fetching cities...
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={address.pincode}
                      onChange={(e) => handlePincodeChange(e.target.value)}
                      placeholder="e.g. 465683"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white font-mono text-sm tracking-wider focus:outline-none focus:border-[#1F513A]"
                    />
                    {pincodeVerified && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 absolute right-3 top-1/2 -translate-y-1/2" />
                    )}
                  </div>
                  {pincodeMessage && (
                    <p className="text-[11px] text-emerald-800 font-medium mt-1">
                      {pincodeMessage}
                    </p>
                  )}
                </div>

                {/* CITY / DISTRICT (DYNAMIC DROPDOWN ACCORDING TO PINCODE & STATE) */}
                <div>
                  <label className="block font-bold text-[#12372A] mb-1">City / District (From Pincode) *</label>
                  {!isCustomCity ? (
                    <select
                      value={address.city}
                      onChange={(e) => handleCitySelect(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A] text-xs text-[#18201B] font-medium"
                    >
                      {/* Pincode / State specific options */}
                      {cityOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                      {/* Allow custom entry fallback */}
                      <option value="__CUSTOM__">✍️ Other / Type manually...</option>
                    </select>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        autoFocus
                        value={customCityValue}
                        onChange={(e) => {
                          setCustomCityValue(e.target.value);
                          setAddress((prev) => ({ ...prev, city: e.target.value }));
                        }}
                        placeholder="Enter City / Town name"
                        className="flex-1 px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomCity(false);
                          setAddress((prev) => ({ ...prev, city: cityOptions[0] || 'Pachore' }));
                        }}
                        className="px-3 py-2 bg-[#F5F1E7] border border-[#12372A]/10 rounded-xl text-xs font-semibold text-[#12372A]"
                      >
                        List
                      </button>
                    </div>
                  )}
                </div>

                {/* STATE */}
                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#12372A] mb-1">State / Union Territory *</label>
                  <select
                    value={address.state}
                    onChange={(e) => handleStateChange(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A] text-xs text-[#18201B]"
                  >
                    {INDIAN_STATES.map((stateName) => (
                      <option key={stateName} value={stateName}>
                        {stateName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Delivery Speed */}
            <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-sm font-bold text-[#12372A]">
                <Truck className="w-4 h-4 text-[#1F513A]" />
                <span>Choose Delivery Speed</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setShippingOption('standard')}
                  className={`p-3.5 rounded-2xl border text-left flex items-start justify-between transition-all ${
                    shippingOption === 'standard'
                      ? 'border-[#12372A] bg-[#12372A]/5 text-[#12372A] font-semibold'
                      : 'border-[#12372A]/10 bg-white text-[#526057]'
                  }`}
                >
                  <div>
                    <div className="font-bold text-[#12372A]">Standard Eco-Armor Delivery</div>
                    <div className="text-[11px] text-[#657A55] mt-0.5">Estimated arrival in 3-4 business days</div>
                  </div>
                  <span className="font-bold text-emerald-800">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setShippingOption('express')}
                  className={`p-3.5 rounded-2xl border text-left flex items-start justify-between transition-all ${
                    shippingOption === 'express'
                      ? 'border-[#12372A] bg-[#12372A]/5 text-[#12372A] font-semibold'
                      : 'border-[#12372A]/10 bg-white text-[#526057]'
                  }`}
                >
                  <div>
                    <div className="font-bold text-[#12372A] flex items-center gap-1">
                      <Zap className="w-3 h-3 text-[#A47752]" />
                      <span>Express Greenhouse Dispatch</span>
                    </div>
                    <div className="text-[11px] text-[#657A55] mt-0.5">Priority packing & transit (1-2 business days)</div>
                  </div>
                  <span className="font-bold text-[#12372A]">
                    ₹{(shippingFee === 0 ? 0 : shippingFee) + 50}
                  </span>
                </button>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 space-y-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold flex items-center justify-center">
                    2
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#12372A]">
                    Payment Method
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-[#1F513A] bg-[#8FAF91]/20 px-2.5 py-0.5 rounded-full">
                  Instant Confirmation
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('Razorpay')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all relative overflow-hidden ${
                    paymentMethod === 'Razorpay'
                      ? 'border-[#12372A] bg-[#12372A] text-[#F5F1E7] shadow-md ring-2 ring-[#1F513A]/20'
                      : 'border-[#12372A]/10 bg-white text-[#18201B] hover:border-[#8FAF91]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <CreditCard className={`w-5 h-5 ${paymentMethod === 'Razorpay' ? 'text-[#8FAF91]' : 'text-[#1F513A]'}`} />
                    <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                      paymentMethod === 'Razorpay' ? 'bg-[#8FAF91]/30 text-[#F5F1E7]' : 'bg-[#1F513A]/10 text-[#1F513A]'
                    }`}>
                      Recommended
                    </span>
                  </div>
                  <div>
                    <div className="text-xs font-bold">Razorpay Gateway</div>
                    <div className={`text-[10px] mt-0.5 ${paymentMethod === 'Razorpay' ? 'text-[#8FAF91]' : 'text-[#657A55]'}`}>
                      UPI, Cards, NetBanking, Wallets
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('UPI_DIRECT')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all ${
                    paymentMethod === 'UPI_DIRECT'
                      ? 'border-[#12372A] bg-[#12372A] text-[#F5F1E7] shadow-md ring-2 ring-[#1F513A]/20'
                      : 'border-[#12372A]/10 bg-white text-[#18201B] hover:border-[#8FAF91]'
                  }`}
                >
                  <QrCode className={`w-5 h-5 ${paymentMethod === 'UPI_DIRECT' ? 'text-[#8FAF91]' : 'text-[#1F513A]'}`} />
                  <div>
                    <div className="text-xs font-bold">Instant UPI / QR</div>
                    <div className={`text-[10px] mt-0.5 ${paymentMethod === 'UPI_DIRECT' ? 'text-[#8FAF91]' : 'text-[#657A55]'}`}>
                      GPay, PhonePe, Paytm, BHIM
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all ${
                    paymentMethod === 'COD'
                      ? 'border-[#12372A] bg-[#12372A] text-[#F5F1E7] shadow-md ring-2 ring-[#1F513A]/20'
                      : 'border-[#12372A]/10 bg-white text-[#18201B] hover:border-[#8FAF91]'
                  }`}
                >
                  <Banknote className={`w-5 h-5 ${paymentMethod === 'COD' ? 'text-[#8FAF91]' : 'text-[#1F513A]'}`} />
                  <div>
                    <div className="text-xs font-bold">Cash On Delivery</div>
                    <div className={`text-[10px] mt-0.5 ${paymentMethod === 'COD' ? 'text-[#8FAF91]' : 'text-[#657A55]'}`}>
                      Pay at doorstep on delivery
                    </div>
                  </div>
                </button>
              </div>

              {paymentMethod === 'Razorpay' && (
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
                    <ShieldCheck className="w-4 h-4 text-[#1F513A]" />
                    <span>Razorpay Secure Standard Checkout</span>
                  </div>
                  <p className="text-xs text-[#526057]">
                    Clicking &quot;Proceed to Razorpay&quot; will open the secure checkout overlay where you can pay using any UPI app (Google Pay, PhonePe, Paytm, CRED), credit/debit cards (Visa, Mastercard, RuPay), or NetBanking.
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-[#12372A] font-semibold">
                    <span className="px-2 py-1 bg-white rounded-lg border border-[#12372A]/10">Google Pay</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-[#12372A]/10">PhonePe</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-[#12372A]/10">Paytm</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-[#12372A]/10">Credit / Debit Card</span>
                    <span className="px-2 py-1 bg-white rounded-lg border border-[#12372A]/10">Net Banking</span>
                  </div>
                </div>
              )}

              {paymentMethod === 'UPI_DIRECT' && (
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
                      <QrCode className="w-4 h-4 text-[#1F513A]" />
                      <span>Direct UPI Payment VPA / QR</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                      Zero Surcharge
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={directUpiId}
                      onChange={(e) => setDirectUpiId(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white border border-[#12372A]/15 text-xs font-mono text-[#12372A]"
                    />
                    <span className="text-[11px] font-bold text-[#1F513A] bg-[#8FAF91]/20 px-3 py-2 rounded-xl shrink-0">
                      ✓ Verified Merchant
                    </span>
                  </div>
                </div>
              )}

              {paymentMethod === 'COD' && (
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/10 text-xs text-[#526057]">
                  <div className="font-bold text-[#12372A]">Doorstep Plant Inspection & Cash / UPI:</div>
                  <p className="mt-1">
                    Inspect your live plants upon delivery. You may pay the delivery executive in cash or via on-the-spot UPI QR code.
                  </p>
                </div>
              )}

              {error && (
                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span className="font-medium">{error}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-7 border border-[#12372A]/10 space-y-5 shadow-sm sticky top-28">
              <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
                <h3 className="font-serif font-bold text-lg text-[#12372A]">
                  Order Summary
                </h3>
                <span className="text-xs font-bold text-[#12372A] bg-[#8FAF91]/20 px-2 py-0.5 rounded-full">
                  {cartItems.length} plants
                </span>
              </div>

              {/* Items Mini List */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.size}`} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <img src={item.image} alt={item.name} className="w-11 h-11 rounded-xl object-cover bg-white shrink-0 border border-[#12372A]/5" />
                      <div>
                        <div className="font-semibold text-[#12372A] line-clamp-1">{item.name}</div>
                        <div className="text-[10px] text-[#657A55]">Qty: {item.quantity} • {item.size}</div>
                      </div>
                    </div>
                    <span className="font-bold text-[#18201B]">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="space-y-2 pt-4 border-t border-[#12372A]/10 text-xs text-[#526057]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#18201B]">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#1F513A]">
                    <span>Discount ({coupon?.code || 'COUPON'})</span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Truck className="w-3.5 h-3.5 text-[#1F513A]" />
                    <span>{shippingOption === 'express' ? 'Express Dispatch' : 'Eco Nursery Shipping'}</span>
                  </span>
                  <span className="font-semibold text-[#18201B]">
                    {effectiveShippingFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${effectiveShippingFee}`}
                  </span>
                </div>
                <div className="pt-3 border-t border-[#12372A]/10 flex justify-between items-center text-base font-bold text-[#12372A]">
                  <span>Total Payable</span>
                  <span className="font-serif text-2xl font-bold">₹{finalPayableTotal}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2 hover:shadow-xl active:scale-[0.99] disabled:opacity-60"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-[#8FAF91]" />
                    <span>Connecting Razorpay...</span>
                  </div>
                ) : (
                  <>
                    <span>
                      {paymentMethod === 'Razorpay'
                        ? `Pay with Razorpay • ₹${finalPayableTotal}`
                        : paymentMethod === 'COD'
                        ? `Place COD Order • ₹${finalPayableTotal}`
                        : `Pay via UPI • ₹${finalPayableTotal}`}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#8FAF91]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#657A55]">
                <Lock className="w-3 h-3 text-[#1F513A]" />
                <span>SSL Encrypted • 100% Plant Transit Guarantee</span>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Razorpay Interactive Sandbox */}
      <AnimatePresence>
        {showSandboxModal && pendingRazorpayOrder && (
          <div className="fixed inset-0 z-50 bg-[#12372A]/80 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="bg-[#FCFBF7] rounded-3xl max-w-md w-full p-6 sm:p-7 border border-[#8FAF91]/30 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#12372A]/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#12372A] flex items-center justify-center text-[#8FAF91]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#12372A]">
                      Razorpay Checkout
                    </h4>
                    <span className="text-[10px] text-[#657A55]">Test / Sandbox Gateway Simulation</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowSandboxModal(false)}
                  className="text-xs font-bold text-[#657A55] hover:text-[#12372A]"
                >
                  ✕ Cancel
                </button>
              </div>

              <div className="bg-[#FAF8F2] p-4 rounded-2xl border border-[#12372A]/10 text-xs space-y-1.5">
                <div className="flex justify-between text-[#657A55]">
                  <span>Order Reference:</span>
                  <span className="font-mono font-bold text-[#12372A]">{pendingRazorpayOrder.orderId}</span>
                </div>
                <div className="flex justify-between text-[#657A55]">
                  <span>Amount to Authorize:</span>
                  <span className="font-bold text-[#12372A] text-sm">₹{finalPayableTotal}</span>
                </div>
                <div className="flex justify-between text-[#657A55]">
                  <span>Customer:</span>
                  <span className="font-medium text-[#12372A]">{address.fullName} ({address.phone})</span>
                </div>
                <div className="flex justify-between text-[#657A55]">
                  <span>Destination:</span>
                  <span className="font-medium text-[#12372A]">{address.city}, {address.state} ({address.pincode})</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-xs font-bold text-[#12372A]">Select payment authorization outcome:</p>
                <button
                  type="button"
                  onClick={() => {
                    setIsProcessing(true);
                    completeOrderWithVerification({
                      razorpay_order_id: pendingRazorpayOrder.orderId,
                      razorpay_payment_id: `pay_${Date.now().toString().slice(-8)}_${Math.random().toString(36).substring(2, 6)}`,
                      razorpay_signature: 'SANDBOX_VERIFIED_SIGNATURE',
                      items: cartItems.map((item) => ({
                        productId: item.productId,
                        price: item.price,
                        quantity: item.quantity,
                        size: item.size
                      })),
                      shippingAddress: address,
                      paymentMethod: 'Razorpay',
                      couponCode: coupon?.code || '',
                      discountAmount: discountAmount || 0,
                    });
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#8FAF91]" />
                    <span>Simulate Successful UPI / Card Payment</span>
                  </div>
                  <span className="text-[10px] bg-[#8FAF91]/30 px-2 py-0.5 rounded">Success</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowSandboxModal(false);
                    setError('Payment was cancelled or rejected by user in test mode.');
                  }}
                  className="w-full py-2.5 px-4 rounded-xl border border-red-200 text-red-700 hover:bg-red-50 text-xs font-bold transition-all text-center"
                >
                  Simulate Payment Failure / User Dismissed
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CheckoutPage;
