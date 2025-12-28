import { useNavigate } from 'react-router';
import { useBuildings } from '../hooks/useBuildings';
import { BuildingsTable } from '../components/BuildingsTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { type Building } from '../types';

export const BuildingListWithTable = () => {
  const navigate = useNavigate();
  const { data: buildings = [], isLoading } = useBuildings();

  const handleView = (building: Building) => {
    console.log('View building:', building);
    // navigate(`/buildings/${building.id}`);
  };

  const handleEdit = (building: Building) => {
    console.log('Edit building:', building);
    // navigate(`/buildings/${building.id}/edit`);
  };

  const handleDelete = (building: Building) => {
    console.log('Delete building:', building);
    // Show confirmation dialog and delete
  };

  const handleAddBuilding = () => {
    navigate('/buildings/add');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Buildings</h1>
          <p className="text-muted-foreground">Manage your building portfolio</p>
        </div>
        <Button onClick={handleAddBuilding}>
          <Plus className="w-4 h-4 mr-2" />
          Add Building
        </Button>
      </div>

      {/* Table */}
      <BuildingsTable
        buildings={buildings}
        isLoading={isLoading}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
};
