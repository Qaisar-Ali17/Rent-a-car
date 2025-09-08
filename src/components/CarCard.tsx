import { Car } from '@/data/cars';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Fuel, Settings } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onBookNow: (car: Car) => void;
}

export const CarCard = ({ car, onBookNow }: CarCardProps) => {
  return (
    <Card className="card-gradient overflow-hidden shadow-car-card hover:shadow-elegant transition-smooth group">
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <Badge variant={car.available ? "default" : "secondary"}>
            {car.available ? "Available" : "Unavailable"}
          </Badge>
          {car.type === 'electric' && (
            <Badge className="accent-gradient text-accent-foreground">Electric</Badge>
          )}
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground">{car.name}</h3>
            <p className="text-muted-foreground">{car.brand} {car.model}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${car.pricePerDay}</div>
            <div className="text-sm text-muted-foreground">per day</div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="h-4 w-4" />
            <span className="capitalize">{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="h-4 w-4" />
            <span className="capitalize">{car.fuelType}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{car.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({car.reviews} reviews)</span>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {car.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
          {car.features.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{car.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => onBookNow(car)}
          disabled={!car.available}
          className="w-full accent-gradient hover:accent-hover transition-smooth"
          size="lg"
        >
          {car.available ? "Book Now" : "Unavailable"}
        </Button>
      </CardFooter>
    </Card>
  );
};