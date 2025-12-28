import { type ColumnDef } from '@tanstack/react-table';
import { type Building } from '../types';
import { DataTableColumnHeader, DataTableRowActions, type RowAction } from '@/components/ui/data-table';
import { Badge } from '@/components/ui/badge';
import { Edit, Eye, Trash } from 'lucide-react';

interface BuildingColumnsProps {
  onView?: (building: Building) => void;
  onEdit?: (building: Building) => void;
  onDelete?: (building: Building) => void;
}

export const createBuildingColumns = ({
  onView,
  onEdit,
  onDelete,
}: BuildingColumnsProps = {}): ColumnDef<Building>[] => [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Building Name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex flex-col">
          <span className="font-medium">{row.getValue('name')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'address',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Address" />
    ),
    cell: ({ row }) => {
      return <span className="text-muted-foreground">{row.getValue('address')}</span>;
    },
  },
  {
    accessorKey: 'totalUnits',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Units" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue('totalUnits')}</span>;
    },
  },
  {
    accessorKey: 'totalFloors',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Floors" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue('totalFloors')}</span>;
    },
  },
  {
    accessorKey: 'yearBuilt',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year Built" />
    ),
    cell: ({ row }) => {
      return <span>{row.getValue('yearBuilt')}</span>;
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = row.getValue('status') as Building['status'];
      const getStatusColor = (status: Building['status']) => {
        switch (status) {
          case 'ACTIVE':
            return 'bg-green-500/10 text-green-700 dark:text-green-400';
          case 'MAINTENANCE':
            return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400';
          case 'INACTIVE':
            return 'bg-red-500/10 text-red-700 dark:text-red-400';
        }
      };
      return (
        <Badge variant="secondary" className={getStatusColor(status)}>
          {status}
        </Badge>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const building = row.original;
      const actions: RowAction<Building>[] = [];

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

      return <DataTableRowActions row={building} actions={actions} />;
    },
  },
];
