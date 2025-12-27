import { type UseFormReturn } from 'react-hook-form';
import { Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { type Tenant } from '@/features/common/types';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export interface LoginFormData {
  username: string;
  password: string;
}

interface LoginProps {
  form: UseFormReturn<LoginFormData>;
  tenantInfo: Tenant | null;
  isLoading?: boolean;
  onSubmit: (data: LoginFormData) => void;
}

export const Login = ({ form, tenantInfo, isLoading = false, onSubmit }: LoginProps) => {

  return (
    <div className="w-full max-w-md">
      {/* Logo & Branding */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <Building2 className="w-12 h-12 text-primary-foreground" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground">
          {tenantInfo?.name || 'Property Management'}
        </h1>
        <p className="text-muted-foreground mt-1">Property Management Portal</p>
      </div>

      {/* Login Card */}
      <div className="bg-card rounded-lg shadow-sm border border-border p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your username"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="••••••••••"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
