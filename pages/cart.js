import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

          {cart.length === 0 ? (
            <div className="bg-white p-8 rounded-lg text-center">
              <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
              <Link href="/products" className="text-blue-600 hover:underline">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-md mb-8">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 border-b last:border-b-0">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-600 hover:text-red-800 font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-2xl font-bold mb-6 text-right">
                  Total: ${total.toFixed(2)}
                </div>
                <Link
                  href="/checkout"
                  className="w-full block text-center bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}