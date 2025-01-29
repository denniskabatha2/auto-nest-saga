import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CarCardProps {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  rating: number;
}

const CarCard = ({ id, make, model, year, price, image, rating }: CarCardProps) => {
  return (
    <Link to={`/cars/${id}`} className="block">
      <div className="glass-card rounded-lg overflow-hidden hover-scale">
        <div className="aspect-video relative">
          <img
            src={image}
            alt={`${year} ${make} ${model}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium flex items-center gap-1">
            <Star size={14} className="text-yellow-400" />
            {rating.toFixed(1)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{`${year} ${make} ${model}`}</h3>
          <p className="text-lg font-bold mt-2">${price.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;