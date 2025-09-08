import { useState } from 'react';
import { Car } from '@/data/cars';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingDialogProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookingDialog = ({ car, isOpen, onClose }: BookingDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupDate: '',
    returnDate: '',
    pickupLocation: ''
  });
  const { toast } = useToast();

  const calculateDays = () => {
    if (!formData.pickupDate || !formData.returnDate) return 0;
    const pickup = new Date(formData.pickupDate);
    const returnDate = new Date(formData.returnDate);
    const diffTime = returnDate.getTime() - pickup.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const totalCost = car ? calculateDays() * car.pricePerDay : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!car) return;

    // Simple validation
    if (!formData.name || !formData.email || !formData.pickupDate || !formData.returnDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    if (calculateDays() <= 0) {
      toast({
        title: "Invalid Dates",
        description: "Return date must be after pickup date.",
        variant: "destructive"
      });
      return;
    }

    // Simulate booking submission
    toast({
      title: "Booking Confirmed!",
      description: `Your ${car.name} has been reserved for ${calculateDays()} days. Total: $${totalCost}`,
    });

    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      pickupDate: '',
      returnDate: '',
      pickupLocation: ''
    });
  };

  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book Your Rental</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Car Details */}
          <div className="space-y-4">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold">{car.name}</h3>
              <p className="text-muted-foreground">{car.brand} {car.model}</p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary">{car.type}</Badge>
                <Badge variant="secondary">{car.seats} seats</Badge>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Daily Rate</span>
                <span className="font-semibold">${car.pricePerDay}</span>
              </div>
              {calculateDays() > 0 && (
                <>
                  <div className="flex justify-between items-center">
                    <span>Duration</span>
                    <span>{calculateDays()} days</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Cost</span>
                    <span className="text-primary">${totalCost}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pickup-location">Pickup Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="pickup-location"
                  value={formData.pickupLocation}
                  onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                  placeholder="Enter pickup location"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pickup-date">Pickup Date *</Label>
                <Input
                  id="pickup-date"
                  type="date"
                  value={formData.pickupDate}
                  onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="return-date">Return Date *</Label>
                <Input
                  id="return-date"
                  type="date"
                  value={formData.returnDate}
                  onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 accent-gradient hover:accent-hover">
                <CreditCard className="h-4 w-4 mr-2" />
                Confirm Booking
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};