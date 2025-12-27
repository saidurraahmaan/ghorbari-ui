import { Link } from 'react-router';

export const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-3xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
