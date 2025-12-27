import { useMutation, useQueryClient } from '@tanstack/react-query';
import { buildingApi, type CreateBuildingDto } from '../api/buildingApi';

export const useCreateBuilding = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateBuildingDto) => buildingApi.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['buildings'] });
    },
  });
};
