export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Preferred Automotive Co.</h3>
            <p className="text-gray-400">Quality auto parts, tires, wheels & mobile mechanic services in Denver, Colorado</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="/products" className="hover:text-white">Shop</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">📍 Denver, Colorado</p>
            <p className="text-gray-400">📧 info@preferredauto.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Preferred Automotive Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}