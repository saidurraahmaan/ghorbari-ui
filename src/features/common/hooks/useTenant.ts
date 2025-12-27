import { useQuery } from '@tanstack/react-query';
import { commonApi } from '../api/commonApi';

export const useTenantInfo = (tenantKey: string) => {
  return useQuery({
    queryKey: ['tenant', tenantKey],
    queryFn: () => commonApi.getTenant(tenantKey),
    enabled: !!tenantKey,
  });
};
