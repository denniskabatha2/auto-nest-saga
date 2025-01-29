import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const DEALERS_DATA = [
  {
    id: 1,
    name: "Luxury Motors",
    location: "123 Main St, Los Angeles, CA",
    phone: "(555) 123-4567",
    email: "contact@luxurymotors.com",
    website: "www.luxurymotors.com",
    description: "Premier luxury car dealership specializing in high-end vehicles.",
    image: "https://images.unsplash.com/photo-1562141989-c5c79ac8f576"
  },
  // Add more dealers...
];

const Dealers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <Sidebar />
      
      <main className="pt-16 pl-64">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Our Dealers</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEALERS_DATA.map((dealer) => (
              <Card key={dealer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <img
                    src={dealer.image}
                    alt={dealer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{dealer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span>{dealer.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone size={18} />
                      <span>{dealer.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail size={18} />
                      <span>{dealer.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Globe size={18} />
                      <span>{dealer.website}</span>
                    </div>
                    <p className="text-gray-600 mt-4">{dealer.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dealers;