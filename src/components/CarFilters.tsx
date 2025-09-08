import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';
import { carTypes } from '@/data/cars';

interface CarFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedType: string;
  onTypeChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  showAvailableOnly: boolean;
  onAvailableOnlyChange: (value: boolean) => void;
  onClearFilters: () => void;
  totalCars: number;
  filteredCars: number;
}

export const CarFilters = ({
  searchTerm,
  onSearchChange,
  selectedType,
  onTypeChange,
  priceRange,
  onPriceRangeChange,
  showAvailableOnly,
  onAvailableOnlyChange,
  onClearFilters,
  totalCars,
  filteredCars
}: CarFiltersProps) => {
  const hasActiveFilters = searchTerm || selectedType !== 'all' || priceRange[0] > 0 || priceRange[1] < 200 || showAvailableOnly;

  return (
    <div className="bg-white rounded-xl shadow-car-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Filter Cars</h2>
        </div>
        <div className="flex items-center gap-4">
          <Badge variant="secondary">
            {filteredCars} of {totalCars} cars
          </Badge>
          {hasActiveFilters && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or brand..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Car Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Car Type</label>
          <Select value={selectedType} onValueChange={onTypeChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {carTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Max Price per Day</label>
          <Select
            value={priceRange[1].toString()}
            onValueChange={(value) => onPriceRangeChange([priceRange[0], parseInt(value)])}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50">Up to $50</SelectItem>
              <SelectItem value="75">Up to $75</SelectItem>
              <SelectItem value="100">Up to $100</SelectItem>
              <SelectItem value="150">Up to $150</SelectItem>
              <SelectItem value="200">All Prices</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Availability */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Availability</label>
          <Select
            value={showAvailableOnly ? "available" : "all"}
            onValueChange={(value) => onAvailableOnlyChange(value === "available")}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cars</SelectItem>
              <SelectItem value="available">Available Only</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};