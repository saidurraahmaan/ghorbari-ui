export interface Building {
  id: number;
  name: string;
  address: string;
  totalFloors: number;
  totalUnits: number;
  yearBuilt: number;
  description: string;
  status: 'ACTIVE' | 'INACTIVE' | 'MAINTENANCE';
}
