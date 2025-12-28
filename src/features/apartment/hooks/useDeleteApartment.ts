import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apartmentApi, apartmentKeys } from '../api/apartmentApi';

export const useDeleteApartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apartmentApi.deleteApartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apartmentKeys.lists() });
    },
  });
};
