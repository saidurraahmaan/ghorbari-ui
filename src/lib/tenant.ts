/**
 * Tenant utility functions for multi-tenant subdomain handling
 *
 * Examples:
 * - tenant1.example.com -> tenant1
 * - tenant2.example.com -> tenant2
 * - localhost:3000 -> defaultTenant from env
 */

interface TenantConfig {
  defaultTenant?: string;
}

/**
 * Extract tenant ID from the current subdomain
 */
export const getTenantFromSubdomain = (config?: TenantConfig): string | null => {
  const hostname = window.location.hostname;

  // For localhost or IP addresses, return default tenant
  if (hostname === 'localhost' || hostname === '127.0.0.1' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return config?.defaultTenant || null;
  }

  // Extract first part of subdomain (tenant1.example.com -> tenant1)
  const parts = hostname.split('.');
  return parts.length > 1 ? parts[0] : null;
};
