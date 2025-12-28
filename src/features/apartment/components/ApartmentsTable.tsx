import { DataTable } from '@/components/ui/data-table';
import { createApartmentColumns } from './apartment-columns';
import { type Apartment } from '../types';

interface ApartmentsTableProps {
  apartments: Apartment[];
  isLoading?: boolean;
  onView?: (apartment: Apartment) => void;
  onEdit?: (apartment: Apartment) => void;
  onDelete?: (apartment: Apartment) => void;
}

export const ApartmentsTable = ({
  apartments,
  isLoading,
  onView,
  onEdit,
  onDelete,
}: ApartmentsTableProps) => {
  const columns = createApartmentColumns({ onView, onEdit, onDelete });

  return (
    <DataTable
      columns={columns}
      data={apartments}
      searchKey="unitNumber"
      searchPlaceholder="Search by unit number..."
      isLoading={isLoading}
      pageSize={20}
    />
  );
};
