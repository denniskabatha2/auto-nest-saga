import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import CarCard from '@/components/cars/CarCard';

const FEATURED_CARS = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 89990,
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80',
    rating: 4.8
  },
  {
    id: '2',
    make: 'Porsche',
    model: '911 GT3',
    year: 2023,
    price: 169990,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
    rating: 4.9
  },
  {
    id: '3',
    make: 'Mercedes-Benz',
    model: 'AMG GT',
    year: 2023,
    price: 159990,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
    rating: 4.7
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 pl-64">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
              alt="Luxury car"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 fade-in">
                Discover Your Perfect Drive
              </h1>
              <p className="text-xl mb-8 fade-in">
                Explore our collection of premium vehicles and find the one that matches your style
              </p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors fade-in">
                Browse Collection
              </button>
            </div>
          </div>
        </section>

        {/* Featured Cars */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-8">Featured Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_CARS.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;