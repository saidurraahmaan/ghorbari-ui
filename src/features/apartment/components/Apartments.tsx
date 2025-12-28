import { ApartmentsTable } from './ApartmentsTable';
import { type Apartment } from '../types';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ApartmentsProps {
  apartments: Apartment[];
  isLoading?: boolean;
  error?: Error | null;
  onAddApartment: () => void;
  onView?: (apartment: Apartment) => void;
  onEdit?: (apartment: Apartment) => void;
  onDelete?: (apartment: Apartment) => void;
}

export const Apartments = ({
  apartments,
  isLoading,
  error,
  onAddApartment,
  onView,
  onEdit,
  onDelete,
}: ApartmentsProps) => {
  if (error) {
    return (
      <div className="flex items-center justify-center h-100">
        <div className="text-center">
          <p className="text-destructive">Error loading apartments: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Apartments</h1>
          <p className="text-muted-foreground">Manage your apartment units</p>
        </div>
        <Button onClick={onAddApartment}>
          <Plus className="h-4 w-4 mr-2" />
          Add Apartment
        </Button>
      </div>

      <ApartmentsTable
        apartments={apartments}
        isLoading={isLoading}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};
