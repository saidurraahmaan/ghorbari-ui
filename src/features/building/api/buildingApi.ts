import { apiClient } from '@/features/common/apiClient';
import { type Building } from '../types';

export const buildingApi = {
  getAll: async (): Promise<Building[]> => {
    const response = await apiClient.get<Building[]>('/buildings');
    return response.data;
  },
};
