import { apiClient } from '@/features/common/apiClient';
import { authEndpoints } from './endpoint';
import type { AuthResponse, LoginCredentials, RegisterCredentials, User } from '../types';

export const authApi = {
  // Login
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(authEndpoints.login, credentials);
    return response.data;
  },

  // Register
  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(authEndpoints.register, credentials);
    return response.data;
  },

  // Logout
  logout: async (): Promise<void> => {
    await apiClient.post(authEndpoints.logout);
  },

  // Get current user
  me: async (): Promise<User> => {
    const response = await apiClient.get<User>(authEndpoints.me);
    return response.data;
  },

  // Refresh token
  refreshToken: async (): Promise<AuthResponse> => {
    const response = await apiClient.post<AuthResponse>(authEndpoints.refreshToken);
    return response.data;
  },
};
