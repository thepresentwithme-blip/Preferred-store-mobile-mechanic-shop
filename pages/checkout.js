import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const total = cart.reduce((sum, item) => sum + item.price, 0);

      const res = await fetch('/api/stripe-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: Math.round(total * 100), // Convert to cents
          customerEmail: formData.email,
          customerName: formData.name,
          items: cart,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        localStorage.removeItem('cart');
      } else {
        alert('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (success) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 py-12 text-center">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h1 className="text-4xl font-bold text-green-600 mb-4">✓ Order Successful!</h1>
              <p className="text-lg text-gray-600 mb-6">Thank you for your order. We'll send you a confirmation email shortly.</p>
              <Link href="/products" className="text-blue-600 hover:underline text-lg">
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between mb-3 pb-3 border-b">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <div className="text-2xl font-bold mt-6 pt-6 border-t">
                Total: ${total.toFixed(2)}
              </div>
            </div>

            {/* Checkout Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4">Shipping & Payment</h2>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? 'Processing...' : 'Complete Purchase'}
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}