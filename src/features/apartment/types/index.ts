export interface Apartment {
  id: number;
  unitNumber: string;
  buildingId: number;
  buildingName: string;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  monthlyRent: number;
  status: 'OCCUPIED' | 'VACANT' | 'MAINTENANCE';
  currentResidentId?: number;
  currentResidentName?: string;
  leaseStartDate?: string;
  leaseEndDate?: string;
  securityDeposit?: number;
  amenities?: string[];
  description?: string;
  internalNotes?: string;
}

export interface CreateApartmentDto {
  unitNumber: string;
  buildingId: number;
  floor: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  monthlyRent: number;
  status?: 'OCCUPIED' | 'VACANT' | 'MAINTENANCE';
  description?: string;
}
