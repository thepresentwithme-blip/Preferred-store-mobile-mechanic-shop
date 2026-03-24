import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🚗 Preferred Auto
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/products" className="hover:text-blue-400">Shop</Link>
          <Link href="/cart" className="hover:text-blue-400">🛒 Cart</Link>
        </div>
      </nav>
    </header>
  );
}