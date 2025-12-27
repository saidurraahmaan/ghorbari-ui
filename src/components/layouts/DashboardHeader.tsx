import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserMenu } from '@/components/business/UserMenu';

export const DashboardHeader = () => {
  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>

      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
        </Button>

        {/* User Menu */}
        <UserMenu />
      </div>
    </header>
  );
};
