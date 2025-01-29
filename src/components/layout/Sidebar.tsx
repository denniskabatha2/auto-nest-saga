import { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Car, DollarSign, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const MAKES = ["Mercedes-Benz", "BMW", "Audi", "Porsche", "Tesla"];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [priceRange, setPriceRange] = useState([20000]);
  const [yearRange, setYearRange] = useState([2020]);
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);

  const handleMakeChange = (make: string) => {
    setSelectedMakes(prev => {
      if (prev.includes(make)) {
        return prev.filter(m => m !== make);
      }
      return [...prev, make];
    });
  };

  return (
    <div
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white/80 backdrop-blur-md border-r border-gray-200 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-4 rounded-full bg-white shadow-md"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>

      {!isCollapsed && (
        <div className="p-4 space-y-6">
          <div>
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <Filter size={16} />
              Filters
            </h3>
            
            <div className="mt-6 space-y-6">
              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <Car size={16} />
                  Make
                </Label>
                {MAKES.map((make) => (
                  <div key={make} className="flex items-center space-x-2">
                    <Checkbox
                      id={make}
                      checked={selectedMakes.includes(make)}
                      onCheckedChange={() => handleMakeChange(make)}
                    />
                    <label
                      htmlFor={make}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {make}
                    </label>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <DollarSign size={16} />
                  Price Range
                </Label>
                <Slider
                  defaultValue={[20000]}
                  max={200000}
                  step={5000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mt-2"
                />
                <div className="text-sm text-gray-500">
                  Up to ${priceRange[0].toLocaleString()}
                </div>
              </div>

              <div className="space-y-4">
                <Label className="flex items-center gap-2">
                  <Calendar size={16} />
                  Year
                </Label>
                <Slider
                  defaultValue={[2020]}
                  min={2000}
                  max={2024}
                  step={1}
                  value={yearRange}
                  onValueChange={setYearRange}
                  className="mt-2"
                />
                <div className="text-sm text-gray-500">
                  From {yearRange[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;