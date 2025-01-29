import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import CarCard from '@/components/cars/CarCard';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const CARS_DATA = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'AMG GT',
    year: 2023,
    price: 159990,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
    rating: 4.7
  },
  {
    id: '2',
    make: 'Porsche',
    model: '911 GT3',
    year: 2023,
    price: 169990,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    rating: 4.9
  },
  {
    id: '3',
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 89990,
    image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771',
    rating: 4.8
  },
  // Add more cars here up to 20...
];

const Cars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 9;
  
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = CARS_DATA.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(CARS_DATA.length / carsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 pl-64">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Browse Cars</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cars;