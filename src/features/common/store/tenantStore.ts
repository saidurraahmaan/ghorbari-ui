import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface TenantState {
  tenantId: string | null;
  // Optional: Add these back later if you need tenant-specific customization
  // tenantName: string | null;
  // tenantConfig: Record<string, unknown> | null;
}

export interface TenantActions {
  setTenant: (tenantId: string) => void;
  clearTenant: () => void;
}

export type TenantStore = TenantState & TenantActions;

export const useTenantStore = create<TenantStore>()(
  persist(
    (set) => ({
      // Initial state
      tenantId: null,

      // Actions
      setTenant: (tenantId: string) => {
        set({ tenantId });
      },

      clearTenant: () => {
        set({ tenantId: null });
      },
    }),
    {
      name: 'tenant-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
