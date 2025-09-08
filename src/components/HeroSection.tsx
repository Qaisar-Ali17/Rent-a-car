import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Calendar } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

interface HeroSectionProps {
  onSearch: (location: string, pickupDate: string, returnDate: string) => void;
}

export const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [location, setLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    onSearch(location, pickupDate, returnDate);
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-85"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Perfect
          <span className="block accent-gradient bg-clip-text text-transparent">
            Rental Car
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Explore the world with confidence. Choose from our premium fleet of vehicles.
        </p>
        
        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-hero max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Pickup Location
              </label>
              <Input
                placeholder="Enter city or location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Pickup Date
              </label>
              <Input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Return Date
              </label>
              <Input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className="bg-white"
              />
            </div>
            
            <Button
              onClick={handleSearch}
              className="h-12 accent-gradient hover:accent-hover transition-smooth shadow-lg"
              size="lg"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Cars
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">500+</div>
            <div className="text-white/80">Premium Cars</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-white/80">Locations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};