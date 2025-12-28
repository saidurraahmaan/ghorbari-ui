import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apartmentApi, apartmentKeys } from '../api/apartmentApi';

export const useUpdateApartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apartmentApi.updateApartment,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: apartmentKeys.lists() });
      queryClient.invalidateQueries({ queryKey: apartmentKeys.detail(data.id) });
    },
  });
};
