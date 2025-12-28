import { DataTable } from '@/components/ui/data-table';
import { createBuildingColumns } from './building-columns';
import { type Building } from '../types';

interface BuildingsTableProps {
  buildings: Building[];
  isLoading?: boolean;
  onView?: (building: Building) => void;
  onEdit?: (building: Building) => void;
  onDelete?: (building: Building) => void;
}

export const BuildingsTable = ({
  buildings,
  isLoading = false,
  onView,
  onEdit,
  onDelete,
}: BuildingsTableProps) => {
  const columns = createBuildingColumns({ onView, onEdit, onDelete });

  return (
    <DataTable
      columns={columns}
      data={buildings}
      searchKey="name"
      searchPlaceholder="Search buildings..."
      isLoading={isLoading}
    />
  );
};
