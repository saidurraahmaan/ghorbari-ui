import { useQuery } from '@tanstack/react-query';
import { buildingApi } from '../api/buildingApi';

export const useBuildings = () => {
  return useQuery({
    queryKey: ['buildings'],
    queryFn: buildingApi.getAll,
  });
};
