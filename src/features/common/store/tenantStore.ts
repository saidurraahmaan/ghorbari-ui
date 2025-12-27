import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { type Tenant } from '../types';

export interface TenantState {
  tenantId: string | null;
  tenantInfo: Tenant | null;
}

export interface TenantActions {
  setTenant: (tenantId: string) => void;
  setTenantInfo: (tenantInfo: Tenant) => void;
  clearTenant: () => void;
}

export type TenantStore = TenantState & TenantActions;

export const useTenantStore = create<TenantStore>()(
  persist(
    (set) => ({
      // Initial state
      tenantId: null,
      tenantInfo: null,

      // Actions
      setTenant: (tenantId: string) => {
        set({ tenantId });
      },

      setTenantInfo: (tenantInfo: Tenant) => {
        set({ tenantInfo, tenantId: tenantInfo.tenantKey });
      },

      clearTenant: () => {
        set({ tenantId: null, tenantInfo: null });
      },
    }),
    {
      name: 'tenant-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
