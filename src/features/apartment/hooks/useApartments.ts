import { useQuery } from '@tanstack/react-query';
import { apartmentApi, apartmentKeys } from '../api/apartmentApi';

export const useApartments = () => {
  return useQuery({
    queryKey: apartmentKeys.lists(),
    queryFn: apartmentApi.getApartments,
  });
};
