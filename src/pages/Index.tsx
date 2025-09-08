import { useState, useMemo } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { CarCard } from '@/components/CarCard';
import { CarFilters } from '@/components/CarFilters';
import { BookingDialog } from '@/components/BookingDialog';
import { cars, Car } from '@/data/cars';

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  // Filter cars based on search criteria
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || car.type === selectedType;
      const matchesPrice = car.pricePerDay <= priceRange[1];
      const matchesAvailability = !showAvailableOnly || car.available;

      return matchesSearch && matchesType && matchesPrice && matchesAvailability;
    });
  }, [searchTerm, selectedType, priceRange, showAvailableOnly]);

  const handleBookNow = (car: Car) => {
    setSelectedCar(car);
    setIsBookingOpen(true);
  };

  const handleSearch = (location: string, pickupDate: string, returnDate: string) => {
    // Scroll to cars section
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('all');
    setPriceRange([0, 200]);
    setShowAvailableOnly(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection onSearch={handleSearch} />
      </section>

      {/* Cars Section */}
      <section id="cars" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our extensive collection of well-maintained, premium vehicles
            </p>
          </div>

          <CarFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            showAvailableOnly={showAvailableOnly}
            onAvailableOnlyChange={setShowAvailableOnly}
            onClearFilters={clearFilters}
            totalCars={cars.length}
            filteredCars={filteredCars.length}
          />

          {filteredCars.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">No cars match your criteria</p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                Clear filters to see all cars
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onBookNow={handleBookNow}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose RentaCar?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide exceptional service and premium vehicles for your journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Fleet</h3>
              <p className="text-muted-foreground">
                Choose from our collection of well-maintained, premium vehicles from top brands
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our customer support team is available round the clock to assist you
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="hero-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive rates with no hidden fees. What you see is what you pay
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingDialog
        car={selectedCar}
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default Index;
