import { useAuth, useLogout } from '@/features/auth/hooks';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Dashboard = () => {
  const { user } = useAuth();
  const { mutate: logout, isPending } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout} variant="outline" disabled={isPending}>
          {isPending ? 'Logging out...' : 'Logout'}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
            <CardDescription>You're logged in</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Name:</span> {user?.name}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
              {user?.role && (
                <p>
                  <span className="font-semibold">Role:</span> {user.role}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
            <CardDescription>Overview of your activity</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No data available yet.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">No recent activity.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
