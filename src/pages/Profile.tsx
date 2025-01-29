import { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/layout/Navbar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      <main className="pt-20 px-4 md:px-8 max-w-4xl mx-auto">
        <Card className="w-full">
          <CardHeader className="relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg">
                <Camera size={16} />
              </button>
            </div>
            <div className="pt-16 text-center">
              <CardTitle>John Doe</CardTitle>
              <p className="text-sm text-gray-500">Member since 2024</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <User size={16} />
                  Full Name
                </Label>
                <Input
                  disabled={!isEditing}
                  defaultValue="John Doe"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Mail size={16} />
                  Email
                </Label>
                <Input
                  disabled={!isEditing}
                  defaultValue="john@example.com"
                  type="email"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Phone size={16} />
                  Phone
                </Label>
                <Input
                  disabled={!isEditing}
                  defaultValue="+1 234 567 890"
                  type="tel"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <MapPin size={16} />
                  Location
                </Label>
                <Input
                  disabled={!isEditing}
                  defaultValue="New York, USA"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? 'Save Changes' : 'Edit Profile'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Profile;