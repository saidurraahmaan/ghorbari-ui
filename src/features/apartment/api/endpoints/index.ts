import type { Apartment, CreateApartmentDto } from '../../types';

export const apartmentEndpoints = {
  list: '/apartments',
  detail: (id: number) => `/apartments/${id}`,
  create: '/apartments',
  update: (id: number) => `/apartments/${id}`,
  delete: (id: number) => `/apartments/${id}`,
} as const;

export type { Apartment, CreateApartmentDto };
