import { type ColumnDef } from '@tanstack/react-table';
import { Eye, Edit, Trash } from 'lucide-react';
import { DataTableColumnHeader, DataTableRowActions, type RowAction } from '@/components/ui/data-table';
import { type Apartment } from '../types';
import { Badge } from '@/components/ui/badge';

interface ApartmentColumnsProps {
  onView?: (apartment: Apartment) => void;
  onEdit?: (apartment: Apartment) => void;
  onDelete?: (apartment: Apartment) => void;
}

const getStatusBadgeVariant = (status: Apartment['status']) => {
  switch (status) {
    case 'OCCUPIED':
      return 'default';
    case 'VACANT':
      return 'secondary';
    case 'MAINTENANCE':
      return 'destructive';
    default:
      return 'outline';
  }
};

export const createApartmentColumns = ({
  onView,
  onEdit,
  onDelete,
}: ApartmentColumnsProps = {}): ColumnDef<Apartment>[] => [
  {
    accessorKey: 'unitNumber',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Unit" />,
    cell: ({ row }) => <div className="font-medium">{row.getValue('unitNumber')}</div>,
  },
  {
    accessorKey: 'buildingName',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Building" />,
  },
  {
    accessorKey: 'floor',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Floor" />,
    cell: ({ row }) => <div>{row.getValue('floor')}</div>,
  },
  {
    id: 'bedBath',
    header: 'Bed/Bath',
    cell: ({ row }) => (
      <div>
        {row.original.bedrooms} bed / {row.original.bathrooms} bath
      </div>
    ),
  },
  {
    accessorKey: 'squareFeet',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Sq Ft" />,
    cell: ({ row }) => {
      const sqft = row.getValue('squareFeet') as number;
      return <div>{sqft?.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: 'monthlyRent',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Rent" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('monthlyRent'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue('status') as Apartment['status'];
      return (
        <Badge variant={getStatusBadgeVariant(status)}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'currentResidentName',
    header: 'Current Resident',
    cell: ({ row }) => {
      const residentName = row.getValue('currentResidentName') as string | undefined;
      return <div>{residentName || '-'}</div>;
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const actions: RowAction<Apartment>[] = [];

      if (onView) {
        actions.push({
          label: 'View details',
          icon: <Eye className="h-4 w-4" />,
          onClick: onView,
        });
      }

      if (onEdit) {
        actions.push({
          label: 'Edit',
          icon: <Edit className="h-4 w-4" />,
          onClick: onEdit,
        });
      }

      if (onDelete) {
        actions.push({
          label: 'Delete',
          icon: <Trash className="h-4 w-4" />,
          onClick: onDelete,
          variant: 'destructive',
        });
      }

      return actions.length > 0 ? (
        <DataTableRowActions row={row.original} actions={actions} />
      ) : null;
    },
  },
];
