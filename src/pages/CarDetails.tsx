import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { CARS_DATA } from '@/data/cars';
import PurchaseDialog from '@/components/purchase/PurchaseDialog';
import { useToast } from "@/components/ui/use-toast";
import CarHeader from '@/components/cars/CarHeader';
import CarSpecifications from '@/components/cars/CarSpecifications';
import ColorSelector from '@/components/cars/ColorSelector';
import CarDescription from '@/components/cars/CarDescription';

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
        <CarHeader make={car.make} model={car.model} year={car.year} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <img 
                src={car.image} 
                alt={`${car.year} ${car.make} ${car.model}`}
                className="w-full h-full object-cover"
              />
            </div>

            <CarSpecifications specs={car.specs} />
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <ColorSelector 
                colors={car.colors}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />

              <CarDescription 
                description={car.description}
                price={car.price}
                onContactDealer={handleContactDealer}
                onPurchase={() => setIsPurchaseDialogOpen(true)}
              />
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