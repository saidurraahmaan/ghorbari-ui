import { apiClient } from '@/features/common/apiClient';
import { type Building } from '../types';
import { BUILDING_ENDPOINTS } from './endpoints';

export interface CreateBuildingDto {
  name: string;
  address: string;
  totalFloors: number;
  totalUnits: number;
  yearBuilt: number;
  description: string;
}

export const buildingApi = {
  getAll: async (): Promise<Building[]> => {
    const response = await apiClient.get<Building[]>(BUILDING_ENDPOINTS.buildings);
    return response.data;
  },

  create: async (data: CreateBuildingDto): Promise<Building> => {
    const response = await apiClient.post<Building>(BUILDING_ENDPOINTS.buildings, data);
    return response.data;
  },
};
