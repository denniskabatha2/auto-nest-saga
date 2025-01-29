import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface CarHeaderProps {
  make: string;
  model: string;
  year: number;
}

const CarHeader = ({ make, model, year }: CarHeaderProps) => {
  return (
    <div>
      <Link to="/cars" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft size={20} />
        Back to Cars
      </Link>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">{make}</h1>
        <p className="text-gray-500">{model} - {year}</p>
      </div>
    </div>
  );
};

export default CarHeader;