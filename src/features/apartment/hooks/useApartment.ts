import { useQuery } from '@tanstack/react-query';
import { apartmentApi, apartmentKeys } from '../api/apartmentApi';

export const useApartment = (id: number) => {
  return useQuery({
    queryKey: apartmentKeys.detail(id),
    queryFn: () => apartmentApi.getApartment(id),
    enabled: !!id,
  });
};
