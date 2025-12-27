import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@/features/auth/hooks';

export const AuthLayout = () => {
  const { isAuthenticated } = useAuth();

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md p-6">
        <Outlet />
      </div>
    </div>
  );
};
