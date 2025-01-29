import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Car, Users, Gauge, Fuel } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CARS_DATA = {
  '1': {
    make: "Mercedes-Benz",
    model: "AMG GT",
    year: 2023,
    price: 159990,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
    rating: 4.7,
    specs: {
      engine: "AMG 4.0L V8 biturbo",
      power: "503 hp",
      acceleration: "3.7s",
      transmission: "AMG SPEEDSHIFT",
      capacity: 4,
      features: ["AMG Night Pack", "Panorama Roof", "AMG Body Kit"]
    },
    colors: ["#FFFFFF", "#000000", "#0066CC", "#CC0000", "#E5C687"],
    description: "A variety of exhilarating options are available for your new or pre-owned vehicle from Mercedes-Benz."
  },
  '2': {
    make: "Porsche",
    model: "911 GT3",
    year: 2023,
    price: 169990,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    rating: 4.9,
    specs: {
      engine: "4.0L Flat-6",
      power: "502 hp",
      acceleration: "3.2s",
      transmission: "7-speed PDK",
      capacity: 2,
      features: ["Sport Chrono Package", "Porsche Active Suspension Management"]
    },
    colors: ["#FF0000", "#FFFFFF", "#000000", "#00FF00", "#0000FF"],
    description: "The Porsche 911 GT3 is a high-performance sports car that delivers an exhilarating driving experience."
  },
  '3': {
    make: "Tesla",
    model: "Model S",
    year: 2023,
    price: 89990,
    image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771",
    rating: 4.8,
    specs: {
      engine: "Dual Electric Motors",
      power: "1020 hp",
      acceleration: "1.99s",
      transmission: "Single Speed",
      capacity: 5,
      features: ["Autopilot", "Long Range Battery", "Premium Interior"]
    },
    colors: ["#FFFFFF", "#000000", "#FF5733", "#C70039", "#900C3F"],
    description: "The Tesla Model S combines performance, safety, and technology in a luxury electric sedan."
  }
};

const CarDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  
  const car = CARS_DATA[id as keyof typeof CARS_DATA];
  
  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/cars" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft size={20} />
          Back to Cars
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold">{car.make}</h1>
              <p className="text-gray-500">{car.model} - {car.year}</p>
            </div>

            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <img 
                src={car.image} 
                alt={`${car.year} ${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Feature Highlights</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="p-4 text-center">
                  <Users className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">{car.specs.capacity}</div>
                  <div className="text-sm text-gray-500">Passenger capacity</div>
                </Card>
                <Card className="p-4 text-center">
                  <Car className="mx-auto mb-2" />
                  <div className="text-sm font-medium">{car.specs.engine}</div>
                  <div className="text-sm text-gray-500">Engine</div>
                </Card>
                <Card className="p-4 text-center">
                  <Gauge className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">{car.specs.power}</div>
                  <div className="text-sm text-gray-500">Power</div>
                </Card>
                <Card className="p-4 text-center">
                  <Fuel className="mx-auto mb-2" />
                  <div className="text-2xl font-bold">{car.specs.acceleration}</div>
                  <div className="text-sm text-gray-500">0-60 mph</div>
                </Card>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Colors</h3>
              <div className="flex gap-2 mb-6">
                {car.colors.map((color, index) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === index ? 'border-primary scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                  />
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-medium">Description</h4>
                <p className="text-gray-600">{car.description}</p>
              </div>

              <div className="mt-8">
                <div className="text-3xl font-bold mb-4">
                  ${car.price.toLocaleString()}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button size="lg" variant="outline">
                    Contact Dealer
                  </Button>
                  <Button size="lg">
                    Purchase Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
