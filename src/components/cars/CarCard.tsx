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
  const getLogo = (make: string) => {
    // This would normally come from an API or assets folder
    const logos: { [key: string]: string } = {
      'Mercedes-Benz': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8',
      'BMW': 'https://images.unsplash.com/photo-1555215695-3004980ad54e',
      'Audi': 'https://images.unsplash.com/photo-1612825173281-9a193378527e',
      'Porsche': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
      'Tesla': 'https://images.unsplash.com/photo-1536700503339-1e4b06520771'
    };
    return logos[make] || logos['Mercedes-Benz']; // Default logo if make not found
  };

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
          <div className="absolute top-2 left-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full p-1">
            <img
              src={getLogo(make)}
              alt={`${make} logo`}
              className="w-full h-full object-contain"
            />
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