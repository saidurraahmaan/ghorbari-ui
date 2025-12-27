import { useNavigate } from 'react-router';
import { useBuildings } from '../hooks/useBuildings';
import { Buildings } from '../components/Buildings';

export const BuildingList = () => {
  const navigate = useNavigate();
  const { data: buildings = [], isLoading, error } = useBuildings();

  const handleAddBuilding = () => {
    navigate('/buildings/add');
  };

  return (
    <Buildings
      buildings={buildings}
      isLoading={isLoading}
      error={error}
      onAddBuilding={handleAddBuilding}
    />
  );
};
