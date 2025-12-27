import { useTenantStore } from '@/features/common/store/tenantStore';
import { getTenantFromSubdomain } from './tenant';

/**
 * Initialize tenant from subdomain
 * Call this once when the app starts
 */
export const initializeTenant = () => {
  const { setTenant, clearTenant } = useTenantStore.getState();

  // Extract tenant from subdomain
  const tenantId = getTenantFromSubdomain({
    defaultTenant: import.meta.env.VITE_DEFAULT_TENANT,
  });

  if (tenantId) {
    setTenant(tenantId);
    console.log(`Tenant: ${tenantId}`);
  } else {
    clearTenant();
  }
};

/**
 * Hook to access tenant information
 */
export const useTenant = () => {
  const tenantId = useTenantStore((state) => state.tenantId);

  return {
    tenantId,
    isMultiTenant: tenantId !== null,
  };
};
