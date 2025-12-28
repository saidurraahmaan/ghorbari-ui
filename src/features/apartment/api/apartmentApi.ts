import { apiClient } from '@/features/common/apiClient';
import { apartmentEndpoints } from './endpoints';
import type { Apartment, CreateApartmentDto } from '../types';

export const apartmentKeys = {
  all: ['apartments'] as const,
  lists: () => [...apartmentKeys.all, 'list'] as const,
  list: (filters?: Record<string, unknown>) => [...apartmentKeys.lists(), filters] as const,
  details: () => [...apartmentKeys.all, 'detail'] as const,
  detail: (id: number) => [...apartmentKeys.details(), id] as const,
};

// API functions
export const apartmentApi = {
  getApartments: async () => {
    const { data } = await apiClient.get<Apartment[]>(apartmentEndpoints.list);
    return data;
  },

  getApartment: async (id: number) => {
    const { data } = await apiClient.get<Apartment>(apartmentEndpoints.detail(id));
    return data;
  },

  createApartment: async (newApartment: CreateApartmentDto) => {
    const { data } = await apiClient.post<Apartment>(
      apartmentEndpoints.create,
      newApartment
    );
    return data;
  },

  updateApartment: async ({ id, ...updates }: Partial<Apartment> & { id: number }) => {
    const { data } = await apiClient.put<Apartment>(
      apartmentEndpoints.update(id),
      updates
    );
    return data;
  },

  deleteApartment: async (id: number) => {
    await apiClient.delete(apartmentEndpoints.delete(id));
    return id;
  },
};
