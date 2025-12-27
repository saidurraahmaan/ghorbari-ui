import { createBrowserRouter, Navigate } from 'react-router';
import { RootLayout } from '@/components/layouts/RootLayout';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { Register } from '@/features/auth/pages/Register';
import { Dashboard } from '@/features/dashboard/pages/Dashboard';
import { BuildingList } from '@/features/building/pages/BuildingList';
import { AddBuilding } from '@/features/building/pages/AddBuilding';
import { NotFound } from '@/features/common/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DashboardLayout />,
            children: [
              {
                path: 'dashboard',
                element: <Dashboard />,
              },
              {
                path: 'buildings',
                element: <BuildingList />,
              },
              {
                path: 'buildings/add',
                element: <AddBuilding />,
              },
              // Add more protected routes here
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
