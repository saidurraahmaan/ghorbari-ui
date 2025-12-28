import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apartmentApi, apartmentKeys } from '../api/apartmentApi';

export const useCreateApartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apartmentApi.createApartment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: apartmentKeys.lists() });
    },
  });
};
