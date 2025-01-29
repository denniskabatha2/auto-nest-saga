import { Car, Users, Gauge } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface CarSpecificationsProps {
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    capacity: number;
  };
}

const CarSpecifications = ({ specs }: CarSpecificationsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Feature Highlights</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <Users className="mx-auto mb-2" />
          <div className="text-2xl font-bold">{specs.capacity}</div>
          <div className="text-sm text-gray-500">Passenger capacity</div>
        </Card>
        <Card className="p-4 text-center">
          <Car className="mx-auto mb-2" />
          <div className="text-sm font-medium">{specs.engine}</div>
          <div className="text-sm text-gray-500">Engine</div>
        </Card>
        <Card className="p-4 text-center">
          <Gauge className="mx-auto mb-2" />
          <div className="text-2xl font-bold">{specs.power}</div>
          <div className="text-sm text-gray-500">Power</div>
        </Card>
        <Card className="p-4 text-center">
          <Gauge className="mx-auto mb-2" />
          <div className="text-2xl font-bold">{specs.acceleration}</div>
          <div className="text-sm text-gray-500">0-60 mph</div>
        </Card>
      </div>
    </div>
  );
};

export default CarSpecifications;