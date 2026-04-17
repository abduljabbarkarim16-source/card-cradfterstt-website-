import React, { useState, useEffect } from 'react';
import '../styles/services.css'; // Assuming we have CSS for additional styles

interface CartItem {
  id: string;
  name: string;
  price: number;
  type: string;
  quantity: number;
  details?: any;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  badge: string;
  action: string;
}

const ServicesPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'main' | 'streaming' | 'giftcards' | 'billpayments' | 'shopping'>('main');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Streaming state
  const [selectedStreamingPlan, setSelectedStreamingPlan] = useState<string>('Basic — Controlled');
  const [streamingPrices] = useState({
    'Netflix Basic — Controlled': 85,
    'Netflix Standard — Controlled': 125,
    'Netflix Premium — Controlled': 165,
    'Netflix Basic — Gift Card Account': 85,
    'Netflix Standard — Gift Card Account': 125,
    'Netflix Premium — Gift Card Account': 165,
    'Disney+ — Controlled': 145,
    'Prime Video — Controlled': 135,
    'HBO Max — Controlled': 155,
  });

  // Gift cards state
  const [giftCardCategory, setGiftCardCategory] = useState<string>('');
  const [giftCardBrand, setGiftCardBrand] = useState<string>('');
  const [giftCardDenomination, setGiftCardDenomination] = useState<string>('');
  const [giftCardRegion, setGiftCardRegion] = useState<string>('');

  // Bill payments state
  const [billProvider, setBillProvider] = useState<string>('');
  const [billForm, setBillForm] = useState({
    customerName: '',
    contactNumber: '',
    billAmount: '',
    accountNumber: '',
  });

  // Shopping state
  const [shoppingStore, setShoppingStore] = useState<string>('');
  const [shoppingForm, setShoppingForm] = useState({
    productLinks: '',
    notes: '',
    usdCost: '',
    customStore: '',
  });
  const [shoppingDestination, setShoppingDestination] = useState<string>('');
  const [shoppingCategory, setShoppingCategory] = useState<string>('');
  const [deliveryFee, setDeliveryFee] = useState<string>('35');

  useEffect(() => {
    const savedCart = localStorage.getItem('cardCraftersCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cardCraftersCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (name: string, price: number, type: string, details?: any) => {
    const existingItem = cart.find(item => item.name === name && item.type === type);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === existingItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      const newItem: CartItem = {
        id: Date.now().toString(),
        name,
        price,
        type,
        quantity: 1,
        details,
      };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateShoppingEstimate = () => {
    const usdCost = parseFloat(shoppingForm.usdCost) || 0;
    const marketRate = usdCost * 7; // 1 USD = 7 TTD
    const customerRate = usdCost * 8.5; // Customer rate 8.5 TTD per USD
    const delivery = parseFloat(deliveryFee) || 0;

    // Simple customs calculation
    const customsRates: { [key: string]: { duty: number; vat: number } } = {
      'Clothing': { duty: 0.45, vat: 0.125 },
      'Shoes': { duty: 0.45, vat: 0.125 },
      'Cell Phone': { duty: 0.45, vat: 0.125 },
      'Laptop': { duty: 0.45, vat: 0.125 },
      'Computer': { duty: 0.45, vat: 0.125 },
      'Smart Watch': { duty: 0.45, vat: 0.125 },
      'Speakers': { duty: 0.45, vat: 0.125 },
      'Cosmetics': { duty: 0.45, vat: 0.125 },
      'Toys': { duty: 0.45, vat: 0.125 },
    };

    let customs = 0;
    if (shoppingDestination !== "Customer's Own U.S. Skybox" && shoppingCategory) {
      const rate = customsRates[shoppingCategory];
      if (rate) {
        const dutyAmount = customerRate * rate.duty;
        const vatAmount = (customerRate + dutyAmount) * rate.vat;
        customs = dutyAmount + vatAmount;
      }
    }

    return {
      usdTotal: usdCost,
      marketRateTotal: marketRate,
      customerRateTotal: customerRate,
      customs,
      delivery,
      finalTotal: customerRate + customs + delivery,
    };
  };

  const categories: ServiceCategory[] = [
    {
      id: 'streaming',
      title: 'Streaming',
      description: 'Access premium streaming services like Disney+, Netflix, and more with controlled subscriptions and local payment options.',
      badge: '🎬',
      action: 'Get Started',
    },
    {
      id: 'giftcards',
      title: 'Gift Cards',
      description: 'Purchase digital gift cards for various platforms with multiple denomination options and instant delivery.',
      badge: '🎁',
      action: 'Browse Cards',
    },
    {
      id: 'billpayments',
      title: 'Bill Payments',
      description: 'Pay utility bills, internet, and other services with a simple fee structure and secure processing.',
      badge: '💡',
      action: 'Pay Bills',
    },
    {
      id: 'shopping',
      title: 'Shopping & Sourcing',
      description: 'Get help with online shopping and product sourcing. Submit your requests and we\'ll handle the rest.',
      badge: '🛒',
      action: 'Request Quote',
    },
  ];

  const streamingServices = [
    { id: 'netflix', name: 'Netflix', badge: 'N', description: 'Entry-level Netflix subscription with SD streaming.' },
    { id: 'disney', name: 'Disney+', badge: 'D+', description: 'Managed Disney+ subscription with premium access.' },
    { id: 'prime', name: 'Prime Video', badge: 'PV', description: 'Amazon Prime Video streaming service.' },
    { id: 'hbo', name: 'HBO Max', badge: 'HM', description: 'Premium HBO Max subscription.' },
  ];

  const giftCardCategories = [
    'Gaming & Entertainment',
    'Streaming & Entertainment Credits',
    'Retail & Shopping',
    'Credits & Top-Ups',
  ];

  const giftCardBrands: { [key: string]: string[] } = {
    'Gaming & Entertainment': ['PlayStation Network', 'Xbox', 'Steam'],
    'Streaming & Entertainment Credits': ['Netflix', 'Spotify'],
    'Retail & Shopping': ['Amazon', 'Apple / iTunes', 'Google Play'],
    'Credits & Top-Ups': ['Visa Rewardable', 'Swipe Visa Gift Card'],
  };

  const billProviders = [
    { id: 'wasa', name: 'WASA', description: 'Water and Sewerage Authority' },
    { id: 'ttec', name: 'T&TEC', description: 'Trinidad and Tobago Electricity Commission' },
    { id: 'flow', name: 'Flow', description: 'Cable and internet services' },
    { id: 'digicel', name: 'Digicel', description: 'Mobile and internet services' },
    { id: 'bmobile', name: 'Bmobile', description: 'Mobile services' },
  ];

  const shoppingStores = [
    { id: 'amazon', name: 'Amazon', badge: 'AM' },
    { id: 'shein', name: 'Shein', badge: 'SH' },
    { id: 'temu', name: 'Temu', badge: 'TM' },
    { id: 'ebay', name: 'eBay', badge: 'EB' },
    { id: 'other', name: 'Other', badge: 'OT' },
  ];

  const customsCategories = [
    'Clothing', 'Shoes', 'Cell Phone', 'Laptop', 'Computer', 'Smart Watch', 'Speakers', 'Cosmetics', 'Toys'
  ];

  const renderMainView = () => (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <div key={category.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-500/20 bg-yellow-500/10 text-yellow-300 mb-6 text-2xl">
            {category.badge}
          </div>
          <h3 className="text-2xl font-semibold text-white mb-4">{category.title}</h3>
          <p className="text-zinc-300 leading-7 mb-6">{category.description}</p>
          <button
            onClick={() => setCurrentView(category.id as any)}
            className="inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black"
          >
            {category.action}
          </button>
        </div>
      ))}
    </div>
  );

  const renderStreamingView = () => (
    <div>
      <div className="mb-8">
        <button
          onClick={() => setCurrentView('main')}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-yellow-500/30 hover:bg-yellow-500/10"
        >
          ← Back to Services
        </button>
        <h2 className="mt-4 text-3xl font-semibold text-white">Streaming Services</h2>
        <p className="mt-2 text-zinc-300">Choose your preferred streaming subscription.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {streamingServices.map((service) => (
          <div key={service.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="rounded-lg bg-black/30 px-2 py-1 text-xs font-semibold text-yellow-200">{service.badge}</span>
              <h3 className="text-xl font-semibold text-white">{service.name}</h3>
            </div>
            <p className="text-zinc-400 mb-4">{service.description}</p>
            <button
              onClick={() => setSelectedService(service.id)}
              className="inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStreamingDetail = () => {
    const service = streamingServices.find(s => s.id === selectedService);
    if (!service) return null;

    const isNetflix = service.id === 'netflix';
    const plans = isNetflix
      ? ['Basic — Controlled', 'Standard — Controlled', 'Premium — Controlled', 'Basic — Gift Card Account', 'Standard — Gift Card Account', 'Premium — Gift Card Account']
      : [`${service.name} — Controlled`];

    return (
      <div>
        <div className="mb-8">
          <button
            onClick={() => setSelectedService(null)}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-yellow-500/30 hover:bg-yellow-500/10"
          >
            ← Back to Streaming
          </button>
          <h2 className="mt-4 text-3xl font-semibold text-white">{service.name} Subscription</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Select Plan</h3>
            <div className="space-y-2">
              {plans.map((plan) => (
                <label key={plan} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="streaming-plan"
                    value={plan}
                    checked={selectedStreamingPlan === plan}
                    onChange={(e) => setSelectedStreamingPlan(e.target.value)}
                    className="text-yellow-500"
                  />
                  <span className="text-white">{plan}</span>
                  <span className="ml-auto text-yellow-200">TT${streamingPrices[plan as keyof typeof streamingPrices] || 0}</span>
                </label>
              ))}
            </div>
            <p className="text-zinc-400 text-sm mt-4">
              <strong>Controlled Account:</strong> Managed subscription with automatic renewal and local payment processing.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-zinc-300">Plan:</span>
                <span className="text-white">{selectedStreamingPlan}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">Price:</span>
                <span className="text-yellow-200">TT${streamingPrices[selectedStreamingPlan as keyof typeof streamingPrices] || 0}</span>
              </div>
            </div>
            <button
              onClick={() => addToCart(`${service.name} ${selectedStreamingPlan}`, streamingPrices[selectedStreamingPlan as keyof typeof streamingPrices] || 0, 'streaming', { platform: service.name })}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderGiftCardsView = () => (
    <div>
      <div className="mb-8">
        <button
          onClick={() => setCurrentView('main')}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-yellow-500/30 hover:bg-yellow-500/10"
        >
          ← Back to Services
        </button>
        <h2 className="mt-4 text-3xl font-semibold text-white">Digital Gift Cards</h2>
        <p className="mt-2 text-zinc-300">Select denomination and platform for your gift card.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Build Your Gift Card</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Category</label>
              <select
                value={giftCardCategory}
                onChange={(e) => {
                  setGiftCardCategory(e.target.value);
                  setGiftCardBrand('');
                }}
                className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
              >
                <option value="">Select Category</option>
                {giftCardCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {giftCardCategory && (
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Brand</label>
                <select
                  value={giftCardBrand}
                  onChange={(e) => setGiftCardBrand(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                >
                  <option value="">Select Brand</option>
                  {giftCardBrands[giftCardCategory]?.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
            )}

            {giftCardBrand && (
              <>
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Denomination</label>
                  <select
                    value={giftCardDenomination}
                    onChange={(e) => setGiftCardDenomination(e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="">Select Amount</option>
                    <option value="25">TT$25</option>
                    <option value="50">TT$50</option>
                    <option value="100">TT$100</option>
                    <option value="200">TT$200</option>
                    <option value="500">TT$500</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Region</label>
                  <select
                    value={giftCardRegion}
                    onChange={(e) => setGiftCardRegion(e.target.value)}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  >
                    <option value="">Select Region</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-zinc-300">Category:</span>
              <span className="text-white">{giftCardCategory || 'Not selected'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-300">Brand:</span>
              <span className="text-white">{giftCardBrand || 'Not selected'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-300">Amount:</span>
              <span className="text-yellow-200">{giftCardDenomination ? `TT$${giftCardDenomination}` : 'Not selected'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-300">Region:</span>
              <span className="text-white">{giftCardRegion || 'Not selected'}</span>
            </div>
          </div>
          <button
            onClick={() => {
              if (giftCardBrand && giftCardDenomination) {
                addToCart(`${giftCardBrand} Gift Card`, parseInt(giftCardDenomination), 'giftcard', {
                  category: giftCardCategory,
                  brand: giftCardBrand,
                  denomination: giftCardDenomination,
                  region: giftCardRegion,
                });
              }
            }}
            disabled={!giftCardBrand || !giftCardDenomination}
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  const renderBillPaymentsView = () => (
    <div>
      <div className="mb-8">
        <button
          onClick={() => setCurrentView('main')}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-yellow-500/30 hover:bg-yellow-500/10"
        >
          ← Back to Services
        </button>
        <h2 className="mt-4 text-3xl font-semibold text-white">Bill Payment Services</h2>
        <p className="mt-2 text-zinc-300">Pay your bills with our secure payment processing.</p>
      </div>

      {!billProvider ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {billProviders.map((provider) => (
            <div key={provider.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{provider.name}</h3>
              <p className="text-zinc-400 mb-4">{provider.description}</p>
              <button
                onClick={() => setBillProvider(provider.id)}
                className="inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black"
              >
                Pay Bill
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Bill Payment Form</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Customer Name</label>
                <input
                  type="text"
                  value={billForm.customerName}
                  onChange={(e) => setBillForm({ ...billForm, customerName: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Contact Number</label>
                <input
                  type="tel"
                  value={billForm.contactNumber}
                  onChange={(e) => setBillForm({ ...billForm, contactNumber: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Bill Amount (TT$)</label>
                <input
                  type="number"
                  value={billForm.billAmount}
                  onChange={(e) => setBillForm({ ...billForm, billAmount: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  placeholder="0.00"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Account Number</label>
                <input
                  type="text"
                  value={billForm.accountNumber}
                  onChange={(e) => setBillForm({ ...billForm, accountNumber: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  placeholder="Your account number"
                />
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Payment Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-zinc-300">Provider:</span>
                <span className="text-white">{billProviders.find(p => p.id === billProvider)?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">Bill Amount:</span>
                <span className="text-white">TT${billForm.billAmount || '0.00'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-300">Service Fee:</span>
                <span className="text-white">TT$5.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span className="text-zinc-300">Total:</span>
                <span className="text-yellow-200">TT${(parseFloat(billForm.billAmount || '0') + 5).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => {
                const total = parseFloat(billForm.billAmount || '0') + 5;
                addToCart(`${billProviders.find(p => p.id === billProvider)?.name} Bill Payment`, total, 'billpayment', {
                  provider: billProvider,
                  ...billForm,
                });
              }}
              disabled={!billForm.customerName || !billForm.contactNumber || !billForm.billAmount || !billForm.accountNumber}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderShoppingView = () => (
    <div>
      <div className="mb-8">
        <button
          onClick={() => setCurrentView('main')}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-yellow-500/30 hover:bg-yellow-500/10"
        >
          ← Back to Services
        </button>
        <h2 className="mt-4 text-3xl font-semibold text-white">Shopping & Sourcing</h2>
        <p className="mt-2 text-zinc-300">Request assistance with online shopping and product sourcing.</p>
      </div>

      {!shoppingStore ? (
        <div className="grid gap-6 md:grid-cols-3">
          {shoppingStores.map((store) => (
            <div key={store.id} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="rounded-lg bg-black/30 px-2 py-1 text-xs font-semibold text-yellow-200">{store.badge}</span>
                <h3 className="text-xl font-semibold text-white">{store.name}</h3>
              </div>
              <button
                onClick={() => setShoppingStore(store.id)}
                className="inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black"
              >
                Select Store
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Shopping Request</h3>
            <div className="space-y-4">
              {shoppingStore === 'other' && (
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-2">Store/Website Name</label>
                  <input
                    type="text"
                    value={shoppingForm.customStore}
                    onChange={(e) => setShoppingForm({ ...shoppingForm, customStore: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                    placeholder="Enter store name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Product Links</label>
                <textarea
                  value={shoppingForm.productLinks}
                  onChange={(e) => setShoppingForm({ ...shoppingForm, productLinks: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  rows={3}
                  placeholder="Paste product URLs here..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Notes/Description</label>
                <textarea
                  value={shoppingForm.notes}
                  onChange={(e) => setShoppingForm({ ...shoppingForm, notes: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  rows={3}
                  placeholder="Additional details, sizes, colors, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Estimated Cost (USD)</label>
                <input
                  type="number"
                  value={shoppingForm.usdCost}
                  onChange={(e) => setShoppingForm({ ...shoppingForm, usdCost: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  placeholder="0.00"
                  step="0.01"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Destination</label>
                <select
                  value={shoppingDestination}
                  onChange={(e) => setShoppingDestination(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                >
                  <option value="">Select Destination</option>
                  <option value="Card Crafters Company Delivery">Card Crafters Company Delivery</option>
                  <option value="Card Crafters U.S. Skybox">Card Crafters U.S. Skybox</option>
                  <option value="Customer's Own U.S. Skybox">Customer's Own U.S. Skybox</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Customs Category</label>
                <select
                  value={shoppingCategory}
                  onChange={(e) => setShoppingCategory(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                >
                  <option value="">Select Category</option>
                  {customsCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Delivery Fee (TT$)</label>
                <input
                  type="number"
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 text-white"
                  placeholder="35.00"
                  step="0.01"
                />
                <p className="text-xs text-zinc-400 mt-1">Delivery fee starts at TT$35</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Cost Estimate</h3>
            {(() => {
              const estimate = calculateShoppingEstimate();
              return (
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Items (USD):</span>
                    <span className="text-white">${estimate.usdTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Market Rate (TT@7):</span>
                    <span className="text-white">TT${estimate.marketRateTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Customer Rate (TT@8.5):</span>
                    <span className="text-white">TT${estimate.customerRateTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Estimated Customs:</span>
                    <span className="text-white">TT${estimate.customs.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-300">Delivery Fee:</span>
                    <span className="text-white">TT${estimate.delivery.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-white/10 pt-2">
                    <span className="text-zinc-300">Final Total:</span>
                    <span className="text-yellow-200">TT${estimate.finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              );
            })()}
            <button
              onClick={() => {
                const estimate = calculateShoppingEstimate();
                addToCart(`${shoppingStores.find(s => s.id === shoppingStore)?.name} Shopping Request`, estimate.finalTotal, 'shopping', {
                  store: shoppingStore,
                  ...shoppingForm,
                  destination: shoppingDestination,
                  category: shoppingCategory,
                  deliveryFee: parseFloat(deliveryFee),
                  estimate,
                });
              }}
              disabled={!shoppingForm.productLinks || !shoppingForm.usdCost || !shoppingDestination}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-yellow-300/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090909]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="shrink-0 rounded-[1.35rem] border border-yellow-400/20 bg-gradient-to-br from-[#17110b] to-[#090909] p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.36)]">
              <img src="/brand/monogram-glow.png" alt="Card Crafters monogram" className="h-11 w-11 rounded-xl object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-yellow-300">
                Card Crafters
              </p>
              <p className="text-xs text-zinc-400">Premium digital services and local payments</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 lg:flex">
            <a href="index.html" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-white">
              Home
            </a>
            <a href="about.html" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-white">
              About
            </a>
            <a href="services.html" className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300 transition hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-white">
              Services
            </a>
            <a href="faq.html" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-white">
              FAQ
            </a>
            <a href="contact.html" className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-yellow-500/30 hover:bg-yellow-500/10 hover:text-white">
              Contact
            </a>
          </nav>

          <button
            onClick={() => setCartOpen(true)}
            className="relative inline-flex items-center gap-2 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-yellow-500 to-yellow-300 px-4 py-2 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(234,179,8,0.22)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="20" r="1.5" />
              <circle cx="18" cy="20" r="1.5" />
              <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h9.9a1 1 0 0 0 1-.8L21 7H7" />
            </svg>
            Cart
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-xs font-bold text-white">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-yellow-500/20 bg-[#121212] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img src="/brand/monogram-glow.png" alt="Card Crafters monogram" className="h-12 w-12 rounded-xl border border-yellow-500/30 object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div>
                  <h1 className="text-xl font-bold uppercase tracking-wider text-yellow-300">Card Crafters</h1>
                  <p className="text-xs text-zinc-300">Premium black & gold digital services experience</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase text-zinc-300">
                <span className="inline-flex rounded-md bg-white/10 px-2 py-1">Streaming</span>
                <span className="inline-flex rounded-md bg-white/10 px-2 py-1">Gift Cards</span>
                <span className="inline-flex rounded-md bg-white/10 px-2 py-1">Bill Payments</span>
                <span className="inline-flex rounded-md bg-white/10 px-2 py-1">Shopping</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-yellow-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" />
                <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
                <path d="M5 14l1 2.5L8.5 17 6 18l-1 2.5L4 18l-2.5-1L4 16.5 5 14z" />
              </svg>
              Our Services
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Digital services made simple.
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Access premium digital content and services through our streamlined platform designed for Trinidad & Tobago customers.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {currentView === 'main' && renderMainView()}
          {currentView === 'streaming' && !selectedService && renderStreamingView()}
          {currentView === 'streaming' && selectedService && renderStreamingDetail()}
          {currentView === 'giftcards' && renderGiftCardsView()}
          {currentView === 'billpayments' && renderBillPaymentsView()}
          {currentView === 'shopping' && renderShoppingView()}
        </section>
      </main>

      {/* Cart Drawer */}
      <div className={`fixed inset-y-0 right-0 z-50 w-96 bg-[#0a0a0a] border-l border-white/10 transform transition-transform duration-300 ease-in-out ${cartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            <button onClick={() => setCartOpen(false)} className="text-zinc-400 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <svg viewBox="0 0 24 24" className="h-12 w-12 mx-auto text-zinc-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="20" r="1.5" />
                  <circle cx="18" cy="20" r="1.5" />
                  <path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h9.9a1 1 0 0 0 1-.8L21 7H7" />
                </svg>
                <p className="text-zinc-400">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-3 border-b border-white/10">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-white">{item.name}</h4>
                      <p className="text-xs text-zinc-400">TT${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-zinc-400 hover:text-white">-</button>
                      <span className="text-sm text-white">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-zinc-400 hover:text-white">+</button>
                      <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-400 ml-2">×</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-white">Total</span>
              <span className="text-lg font-semibold text-yellow-200">TT${getCartTotal().toFixed(2)}</span>
            </div>
            <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10 bg-[#080808]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="shrink-0 rounded-[1.35rem] border border-yellow-400/20 bg-gradient-to-br from-[#17110b] to-[#090909] p-1.5 shadow-[0_14px_34px_rgba(0,0,0,0.36)]">
                <img src="/brand/monogram-glow.png" alt="Card Crafters monogram" className="h-11 w-11 rounded-xl object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.26em] text-yellow-300">
                  Card Crafters
                </p>
                <p className="text-xs text-zinc-400">Premium digital service access</p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              Frontend landing page concept built to lead into a stronger store-based website.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Navigation
            </p>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <a href="index.html" className="block hover:text-white">Home</a>
              <a href="about.html" className="block hover:text-white">About</a>
              <a href="services.html" className="block hover:text-white">Services</a>
              <a href="faq.html" className="block hover:text-white">FAQ</a>
              <a href="contact.html" className="block hover:text-white">Contact</a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-yellow-300">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <div>portal@cardcrafterstt.com</div>
              <div>1-868-465-1282</div>
              <div>#1 Persad Street, Five Rivers, Arouca</div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                endCash
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                WiPay
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                Republic Bank
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                Visa
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-zinc-300">
                Mastercard
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-zinc-500 sm:px-6 lg:px-8">
          © Card Crafters Limited — Trinidad & Tobago
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;

