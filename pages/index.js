import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Preferred Automotive Co.</h1>
            <p className="text-xl mb-8">Quality Auto Parts, Tires & Mobile Mechanic Services</p>
            <p className="text-lg mb-8">Denver, Colorado</p>
            <a href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Shop Now
            </a>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">🛞 Tires & Wheels</h3>
                <p className="text-gray-600">Premium quality tires and custom wheels for all vehicles</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">🔧 Auto Parts</h3>
                <p className="text-gray-600">Genuine and aftermarket auto parts for repairs and upgrades</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">🚗 Mobile Mechanic</h3>
                <p className="text-gray-600">Professional mobile mechanic services at your location</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <a href="/products" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block">
              Browse Our Store
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}