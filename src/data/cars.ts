// Car data for the rental platform
import bmwSedan from '@/assets/car-bmw-sedan.jpg';
import mustangConvertible from '@/assets/car-mustang-convertible.jpg';
import teslaModel3 from '@/assets/car-tesla-model3.jpg';
import rangeRoverSuv from '@/assets/car-range-rover-suv.jpg';
import vwGolf from '@/assets/car-vw-golf.jpg';
import hondaAccord from '@/assets/car-honda-accord.jpg';

export interface Car {
  id: string;
  name: string;
  brand: string;
  model: string;
  type: 'sedan' | 'suv' | 'convertible' | 'compact' | 'electric';
  pricePerDay: number;
  image: string;
  features: string[];
  transmission: 'automatic' | 'manual';
  fuelType: 'gasoline' | 'electric' | 'hybrid';
  seats: number;
  available: boolean;
  rating: number;
  reviews: number;
}

export const cars: Car[] = [
  {
    id: '1',
    name: 'BMW 5 Series',
    brand: 'BMW',
    model: '5 Series',
    type: 'sedan',
    pricePerDay: 85,
    image: bmwSedan,
    features: ['Leather Seats', 'Navigation', 'Bluetooth', 'Premium Audio'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    available: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Ford Mustang Convertible',
    brand: 'Ford',
    model: 'Mustang',
    type: 'convertible',
    pricePerDay: 95,
    image: mustangConvertible,
    features: ['Convertible Top', 'Sport Mode', 'Premium Audio', 'Navigation'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 4,
    available: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: '3',
    name: 'Tesla Model 3',
    brand: 'Tesla',
    model: 'Model 3',
    type: 'electric',
    pricePerDay: 75,
    image: teslaModel3,
    features: ['Autopilot', 'Supercharging', 'Premium Interior', 'Glass Roof'],
    transmission: 'automatic',
    fuelType: 'electric',
    seats: 5,
    available: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Range Rover Evoque',
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
    type: 'suv',
    pricePerDay: 110,
    image: rangeRoverSuv,
    features: ['All-Wheel Drive', 'Luxury Interior', 'Navigation', 'Terrain Response'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    available: true,
    rating: 4.6,
    reviews: 73
  },
  {
    id: '5',
    name: 'Volkswagen Golf',
    brand: 'Volkswagen',
    model: 'Golf',
    type: 'compact',
    pricePerDay: 45,
    image: vwGolf,
    features: ['Fuel Efficient', 'Bluetooth', 'Air Conditioning', 'Safety Package'],
    transmission: 'manual',
    fuelType: 'gasoline',
    seats: 5,
    available: true,
    rating: 4.4,
    reviews: 201
  },
  {
    id: '6',
    name: 'Honda Accord',
    brand: 'Honda',
    model: 'Accord',
    type: 'sedan',
    pricePerDay: 55,
    image: hondaAccord,
    features: ['Reliable', 'Spacious', 'Fuel Efficient', 'Safety Features'],
    transmission: 'automatic',
    fuelType: 'gasoline',
    seats: 5,
    available: false,
    rating: 4.5,
    reviews: 143
  }
];

export const carTypes = [
  { value: 'all', label: 'All Types' },
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv', label: 'SUV' },
  { value: 'convertible', label: 'Convertible' },
  { value: 'compact', label: 'Compact' },
  { value: 'electric', label: 'Electric' }
];