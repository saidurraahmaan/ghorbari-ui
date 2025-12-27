import { useState } from 'react';
import { Building2, MapPin, Plus, Search, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useBuildings } from '../hooks/useBuildings';
import { type Building } from '../types';

export const BuildingList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: buildings = [], isLoading, error } = useBuildings();

  const filteredBuildings = buildings.filter((building) =>
    building.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    building.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: Building['status']) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'MAINTENANCE':
        return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400';
      case 'INACTIVE':
        return 'bg-red-500/10 text-red-700 dark:text-red-400';
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-muted-foreground">Loading buildings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-destructive">Error loading buildings. Please try again.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search buildings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Building
        </Button>
      </div>

      {/* Buildings Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Building Cards */}
        {filteredBuildings.map((building) => (
          <Card key={building.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className={getStatusColor(building.status)}>
                  {building.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">{building.name}</h3>
                <div className="flex items-start text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1 mt-0.5 shrink-0" />
                  <span>{building.address}</span>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Home className="w-3 h-3 mr-1" />
                    Total Units
                  </div>
                  <p className="text-lg font-semibold">{building.totalUnits}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Building2 className="w-3 h-3 mr-1" />
                    Floors
                  </div>
                  <p className="text-lg font-semibold">{building.totalFloors}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Building2 className="w-3 h-3 mr-1" />
                    Year Built
                  </div>
                  <p className="text-lg font-semibold">{building.yearBuilt}</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Building2 className="w-3 h-3 mr-1" />
                    Status
                  </div>
                  <p className="text-sm font-semibold">{building.status}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

    </div>
  );
};
