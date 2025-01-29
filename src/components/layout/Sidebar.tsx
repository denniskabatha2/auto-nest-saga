import { useState } from 'react';
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-sm text-gray-600">Price Range</label>
                <Slider
                  defaultValue={[20000]}
                  max={100000}
                  step={1000}
                  className="mt-2"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Year</label>
                <Slider
                  defaultValue={[2020]}
                  min={2000}
                  max={2024}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;