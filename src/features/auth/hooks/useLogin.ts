import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/authApi';
import { useAuthStore } from '../store/authStore';
import type { LoginCredentials } from '../types';

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setLoading = useAuthStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
    onError: (error) => {
      setLoading(false);
      console.error('Login error:', error);
    },
  });
};
