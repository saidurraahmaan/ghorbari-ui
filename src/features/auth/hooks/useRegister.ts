import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/authApi';
import { useAuthStore } from '../store/authStore';
import type { RegisterCredentials } from '../types';

export const useRegister = () => {
  const setAuth = useAuthStore((state) => state.setAuth);
  const setLoading = useAuthStore((state) => state.setLoading);

  return useMutation({
    mutationFn: (credentials: RegisterCredentials) => authApi.register(credentials),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      setAuth(data.token, data.user);
    },
    onError: (error) => {
      setLoading(false);
      console.error('Register error:', error);
    },
  });
};
