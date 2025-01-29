interface CarDescriptionProps {
  description: string;
  price: number;
  onContactDealer: () => void;
  onPurchase: () => void;
}

const CarDescription = ({ description, price, onContactDealer, onPurchase }: CarDescriptionProps) => {
  return (
    <div className="space-y-4">
      <h4 className="font-medium">Description</h4>
      <p className="text-gray-600">{description}</p>
      <div className="mt-8">
        <div className="text-3xl font-bold mb-4">
          ${price.toLocaleString()}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button size="lg" variant="outline" onClick={onContactDealer}>
            Contact Dealer
          </Button>
          <Button size="lg" onClick={onPurchase}>
            Purchase Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CarDescription;