import { Outlet } from 'react-router';
import { AppSidebar } from '@/components/sidebar/AppSidebar';
import { DashboardHeader } from './DashboardHeader';

export const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-6 bg-muted/20">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
