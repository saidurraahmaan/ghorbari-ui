import { apiClient } from '@/features/common/apiClient';
import { type Tenant } from '../types';
import { COMMON_ENDPOINTS } from './endpoints';

export const commonApi = {
  getTenant: async (tenantKey: string): Promise<Tenant> => {
    const response = await apiClient.get<Tenant>(COMMON_ENDPOINTS.tenant(tenantKey));
    return response.data;
  },
};
