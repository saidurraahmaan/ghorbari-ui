import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Building2,
  Home,
  Users,
  FileText,
  DollarSign,
  Boxes,
  Calendar,
  Megaphone,
  Settings,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Buildings', href: '/buildings', icon: Building2 },
  { name: 'Apartments', href: '/apartments', icon: Home },
  { name: 'Residents', href: '/residents', icon: Users },
  { name: 'Leases', href: '/leases', icon: FileText },
  { name: 'Finances', href: '/finances', icon: DollarSign },
  { name: 'Amenities', href: '/amenities', icon: Boxes },
  { name: 'Bookings', href: '/bookings', icon: Calendar },
  { name: 'Announcements', href: '/announcements', icon: Megaphone },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const AppSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-background border-r border-border flex flex-col">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-border">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
          <Building2 className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="font-semibold text-foreground">Ghorbari</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
