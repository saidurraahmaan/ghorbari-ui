import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router';
import { useLogin } from '@/features/auth/hooks';
import { useTenantStore } from '@/features/common/store/tenantStore';
import { useTenantInfo } from '@/features/common/hooks/useTenant';
import { Login, type LoginFormData } from './components/Login';

const loginSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();
  const { tenantId, setTenantInfo } = useTenantStore();
  const { data: tenantInfo, isLoading: isTenantLoading } = useTenantInfo(tenantId || '');

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Store tenant info when fetched
  useEffect(() => {
    if (tenantInfo) {
      setTenantInfo(tenantInfo);
    }
  }, [tenantInfo, setTenantInfo]);

  const handleSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: () => {
        navigate('/dashboard');
      },
    });
  };

  if (isTenantLoading) {
    return (
      <div className="w-full max-w-md">
        <div className="text-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Login
      form={form}
      tenantInfo={tenantInfo || null}
      isLoading={isPending}
      onSubmit={handleSubmit}
    />
  );
};
