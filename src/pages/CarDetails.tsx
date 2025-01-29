import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Car, Users, Gauge, Fuel } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CARS_DATA } from '@/data/cars';
import PurchaseDialog from '@/components/purchase/PurchaseDialog';
import { useToast } from "@/components/ui/use-toast";

const CarDetails = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const car = CARS_DATA[id as keyof typeof CARS_DATA];
  
  if (!car) {
    return <div>Car not found</div>;
  }

  const handleContactDealer = () => {
    toast({
      title: "Contact Request Sent",
      description: "A dealer representative will contact you shortly.",
      duration: 3000,
    });
  };

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
              <h1 className="text-3xl md:text-4xl font-bold">{car.make}</h1>
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
              <div className="flex flex-wrap gap-2 mb-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button size="lg" variant="outline" onClick={handleContactDealer}>
                    Contact Dealer
                  </Button>
                  <Button size="lg" onClick={() => setIsPurchaseDialogOpen(true)}>
                    Purchase Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PurchaseDialog
        isOpen={isPurchaseDialogOpen}
        onClose={() => setIsPurchaseDialogOpen(false)}
        carDetails={{
          make: car.make,
          model: car.model,
          price: car.price
        }}
      />
    </div>
  );
};

export default CarDetails;